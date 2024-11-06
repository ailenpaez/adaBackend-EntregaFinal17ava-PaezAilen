import jwt from "jsonwebtoken";
import { Auth, User } from "../models";
import UserService from "./users";
import { userSchema, userUpdateSchema } from "../validators/userValidator";
import { z } from "zod";
import logger from "../utils/logger";
import { UserCreate, UserModel, UserUpdate } from "../interfaces/users";
import { CustomError } from "../utils/customError";
import { createHash, comparePassword } from "../utils/create-hash";
import * as tokenUtils from '../utils/token';
import crypto from 'crypto';


const JWT_SECRET = process.env.JWT_SECRET || "hakunamatata";

class AuthServices {
 
    static async registerUser(userData: UserCreate) {
        const existingUser = await User.findOne({ where: { email: userData.email } });
        if (existingUser) {
          throw new Error("EMAIL_ALREADY_EXISTS");
        }
    
        const hashedPassword = await createHash(userData.password);
    
        const newUser = await User.create({
          username: userData.username,
          fullname: userData.fullname,
          password: hashedPassword,
          email: userData.email,
          birthdate: userData.birthdate,
          nationality: userData.nationality,
          role: userData.role
        });
    
        await Auth.create({
          userId: newUser.dataValues.userId,
          action: "register",
        });
    
        return newUser;
      }
    
      static async loginUser(email: string, password: string): Promise<{ user: UserModel; token: string }> {
        try {
          const user = await User.findOne({ where: { email } });
          if (!user) {
            throw new Error("USER_NOT_FOUND");
          }
    
          const storedHash = user.dataValues.password;
          const isMatch = await comparePassword(storedHash, password);
          if (!isMatch) {
            throw new Error("INVALID_PASSWORD");
          }
    
          const tokenData = { userId: user.dataValues.userId };  
          const token = tokenUtils.createToken(tokenData); 
    
          await Auth.create({
            userId: user.dataValues.userId, 
            action: "login",  
            token,  
          });
    
          return {
            user: user as UserModel,  
            token,  
          };
        } catch (error) {
          throw error;  
        }
      }

     
    
 
}

export default AuthServices;



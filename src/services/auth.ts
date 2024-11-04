import { Auth, User } from "../models";
import UserService from "./users";
import { hashPassword } from "../utils/hashedPass";
import { userSchema } from "../validators/userValidator";
import { z } from "zod";
import logger from "../utils/logger";
import { UserCreate } from "../interfaces/users";

class AuthServices {
    static async registerUser(userData: UserCreate) {
        const existingUser = await User.findOne({ where: { email: userData.email } });
        if (existingUser) {
            throw new Error("EMAIL_ALREADY_EXISTS");
        }

        const hashedPassword = await hashPassword(userData.password); 

        const newUser = await User.create({
            username: userData.username,
            fullname: userData.fullname,
            password: hashedPassword,
            email: userData.email,
            birthdate: userData.birthdate,
            nationality: userData.nationality,
        });

        return newUser; 
    }
}

export default AuthServices;

import { Request, Response } from "express";
import AuthServices from "../services/auth";  
import logger from "../utils/logger"; 


class AuthController {

  static async register(req: Request, res: Response) {
    try {
      const userData = req.body;
      const newUser = await AuthServices.registerUser(userData);
      res.status(201).json({ message: "USER_REGISTERED_SUCCESSFULLY", user: newUser });
    } catch (error) {
      logger.error(`Error during registration: ${error.message}`);
      res.status(500).json({ message: error.message });
    }
  }

  static async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const { user, token } = await AuthServices.loginUser(email, password);
      res.json({ message: "USER_LOGGED_IN_SUCCESSFULLY", user, token });
    } catch (error) {
      logger.error(`Login error: ${error.message}`);
      res.status(401).json({ message: error.message });  
    }
  }


}

export default AuthController;

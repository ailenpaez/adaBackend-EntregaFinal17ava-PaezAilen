import { Request, Response } from "express";
import UserService from "../services/users";
class UserController {
    static async getAllUsers(req: Request, res: Response) {
        try {
            const users = await UserService.getAllUsers() ;
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

}

export default UserController;

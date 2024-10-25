import { Request, Response } from "express";
import { User } from "../models";

class UserController {
    static async getAll(req: Request, res: Response) {
        try {
            const users = await User.findAll();
            // res.json(users); 
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

}

export default UserController;

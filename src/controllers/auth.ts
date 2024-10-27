import { Request, Response } from "express";
import { Auth } from "../models";

class AuthController {
    static async getAll(req: Request, res: Response) {
        try {
            const enrollments = await Auth.findAll();
            // res.json(enrollments);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

export default AuthController;

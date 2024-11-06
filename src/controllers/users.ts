import { Request, Response } from "express";
import UserService from "../services/users";
import { userSchema, userUpdateSchema } from '../validators/userValidator';
import { z } from 'zod';

class UserController {

    static async getAllUsers(req: Request, res: Response) {
        try {
            const users = await UserService.getAllUsers();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ message: "INTERNAL_SERVER_ERROR" });
        }
    }

    static async getUserById(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const user = await UserService.getUserById(id);
            res.status(200).json(user);
        } catch (error) {
            res.status(404).json({ message: "USER_NOT_FOUND" });
        }
    }

    static async createUser(req: Request, res: Response) {
        const newUser = req.body;

        try {
            userSchema.parse(newUser);

            const createdUser = await UserService.createUser(newUser);
            res.status(201).json({
                message: "USER_CREATED_SUCCESSFULLY",
                user: createdUser,
            });
        } catch (error) {
            if (error instanceof z.ZodError) {
                const errorMessages = error.errors.map((e) => `${e.message} for field ${e.path.join(".")}`);
                res.status(400).json({ message: errorMessages.join(", ") });
            } else if (error.message === "EMAIL_ALREADY_EXISTS") {
                res.status(409).json({ message: error.message });
            } else {
                res.status(500).json({ message: `INTERNAL_SERVER_ERROR: ${error.message}` });
            }
        }
    }

    static async updateUser(req: Request, res: Response) {
        const { id } = req.params;
        const updateData = req.body;

        try {
            userUpdateSchema.parse(updateData);

            const updatedUser = await UserService.updateUser(id, updateData);
            res.status(200).json({
                message: "USER_UPDATED_SUCCESSFULLY",
                user: updatedUser,
            });
        } catch (error) {
            if (error instanceof z.ZodError) {
                const errorMessages = error.errors.map((e) => `${e.message} for field ${e.path.join(".")}`);
                res.status(400).json({ message: errorMessages.join(", ") });
            } else if (error.message === "USER_NOT_FOUND") {
                res.status(404).json({ message: error.message });
            } else if (error.message === "EMAIL_ALREADY_EXISTS") {
                res.status(409).json({ message: error.message });
            } else {
                res.status(500).json({ message: "INTERNAL_SERVER_ERROR" });
            }
        }
    }

    static async deleteUser(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const response = await UserService.deleteUser(id);
            res.status(200).json(response);
        } catch (error) {
            if (error.message === "USER_NOT_FOUND") {
                res.status(404).json({ message: error.message });
            } else {
                res.status(500).json({ message: "INTERNAL_SERVER_ERROR" });
            }
        }
    }
}

export default UserController;

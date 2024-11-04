import { Request, Response } from 'express';
import AuthServices from '../services/auth';
import logger from '../utils/logger';
import { z } from "zod";
import { userSchema } from '../validators/userValidator';
import { UserCreate } from '../interfaces/users';

class AuthController {

    static async registerUser(req: Request, res: Response) {
        const userData = req.body;

        try {
            userSchema.parse(userData);
            logger.info("User data validated successfully");

            const newUser = await AuthServices.registerUser(userData);
            logger.info("User registered successfully", { user: newUser });

            return res.status(201).json({
                message: "USER_REGISTERED_SUCCESSFULLY",
                user: newUser,
            });
        } catch (error) {
            logger.error(`Registration failed: ${error.message}`);

            if (error instanceof z.ZodError) {
                const errorMessages = error.errors.map((e) => `${e.message} for field ${e.path.join('.')}`);
                return res.status(400).json({ message: errorMessages.join(", ") });
            }

            if (error.message === "EMAIL_ALREADY_EXISTS") {
                return res.status(409).json({ message: error.message });
            }

            return res.status(500).json({ message: `INTERNAL_SERVER_ERROR: ${error.message}` });
        }
    }

    static async loginUser(signatureData: { }) {}
    
    static async logoutUser(signatureData: { }) {}

    // NECESITA AUTENTICAR PARA REALIZAR ESTOS MÉTODOS DE USERS

    static async updateUserById(signatureData: { }) {}
    static async deleteUserById(signatureData: { }) {}

    // NECESITA AUTENTICAR PARA REALIZAR ESTOS MÉTODOS DE SIGNATURE

    static async createSignature(){}
    static async updateSignatureById(){}
    static async deleteSignatureById(){}

    // VER LOS ENROLLMENTS PARA VER LAS INSCRIPCIONES A CADA MATERIA.
    static async viewEnrollments(){}
}



export default AuthController;

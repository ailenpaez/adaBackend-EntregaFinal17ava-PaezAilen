import { SignatureUpdate, SignatureCreate } from '../interfaces/signatures'
import { Request, Response, NextFunction } from "express";
import SignatureService from "../services/signatures";
import customError, { CustomError } from '../utils/customError';

class SignatureController {

    static async getAllSignatures(req: Request, res: Response) {
        try {
            const signatures = await SignatureService.getAllSignatures();
            res.status(200).json(signatures);
        } catch (error) {
            const err = error as CustomError;
            res.status(err.status || 500).json({ message: err.message });
        }
    }

    static async createSignature(req: Request, res: Response) {
        const newSignature: SignatureCreate = req.body;

        try {
            const createdSignature = await SignatureService.createSignature(newSignature);
            res.status(201).json({
                message: "SIGNATURE_CREATED_SUCCESSFULLY",
                signature: createdSignature,
            });
        } catch (error) {
            if ((error as any).message === "NO_DATA_TO_CREATE" || (error as any).message === "MISSING_REQUIRED_FIELDS") {
                res.status(400).json({ message: error.message });
            } else if ((error as any).message === "NAME_ALREADY_EXISTS") {
                res.status(409).json({ message: error.message });
            } else {
                res.status(500).json({ message: "INTERNAL_SERVER_ERROR" });
            }
        }
    }

    static async getSignatureById(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const signature = await SignatureService.getSignatureById(id);
            res.status(200).json(signature);
        } catch (error) {
            const err = error as CustomError;
            res.status(err.status || 404).json({ message: err.message });
        }
    }

    static async updateSignature(req: Request, res: Response) {
        const { id } = req.params;
        const updateData: SignatureUpdate = req.body;

        try {
            const updatedSignature = await SignatureService.updateSignature(id, updateData);
            res.status(200).json({
                message: "SIGNATURE_UPDATED_SUCCESSFULLY",
                signature: updatedSignature,
            });
        } catch (error) {
            if ((error as any).message === "SIGNATURE_NOT_FOUND") {
                res.status(404).json({ message: error.message });
            } else if ((error as any).message === "NAME_ALREADY_EXISTS") {
                res.status(400).json({ message: error.message });
            } else if ((error as any).message === "NO_DATA_TO_UPDATE") {
                res.status(400).json({ message: error.message });
            } else {
                res.status(500).json({ message: "INTERNAL_SERVER_ERROR" });
            }
        }
    }

    static async deleteSignature(req: Request, res: Response) {
        const { id } = req.params;

        try {
            const response = await SignatureService.deleteSignature(id);
            res.status(200).json(response);
        } catch (error) {
            if ((error as any).message === "SIGNATURE_NOT_FOUND") {
                res.status(404).json({ message: error.message });
            } else {
                res.status(500).json({ message: "INTERNAL_SERVER_ERROR" });
            }
        }
    }
}

export default SignatureController;

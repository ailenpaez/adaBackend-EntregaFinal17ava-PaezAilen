import { Request, Response } from 'express';
import SignatureService from "../services/signatures";
import { SignatureUpdate } from '../interfaces/signatures';


class SignatureController {
    static async getAllSignatures(req: Request, res: Response) {
        try {
            const signatures = await SignatureService.getAllSignatures();
            res.status(200).json(signatures);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async createSignature(req: Request, res: Response) {
        try {
            const { name, syllabus, startDate, endDate } = req.body;
            if (!name || !syllabus || !startDate || !endDate) {
                return res.status(400).json({ message: "REQUIRED_FIELDS_MISSING." });
            }

            const signature = await SignatureService.createSignature(req.body);
            res.status(201).json({
                message: "SIGNATURE_CREATED_SUCCESSFULLY:",
                signature: signature
            });
        } catch (error) {
            if ((error as any).status === 409) {
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
            res.status(404).json({ message: error.message });
        }
    }

    static async updatedSignature(req: Request, res: Response) {
        const { id } = req.params;
        const updateData: SignatureUpdate = req.body;

        try {
            const updatedSignature = await SignatureService.updatedSignature(id, updateData);
            res.status(200).json({
                message: "SIGNATURE_UPDATED_SUCCESSFULLY",
                signature: updatedSignature,
            });
        } catch (error) {
            if ((error as any).status === 404) {
                res.status(404).json({ message: error.message });
            } else {
                res.status(500).json({ message: "INTERNAL_SERVER_ERROR" });
            }
        }
    }

    static async deleteSignature(req: Request, res: Response) {
        const { id } = req.params;

        try {
            const result = await SignatureService.deleteSignature(id);
            res.status(200).json(result);
        } catch (error) {
            // console.error("deleteSignature controller:", error); 
            if ((error as any).message === "SIGNATURE_NOT_FOUND") {
                res.status(404).json({ message: error.message });
            } else {
                res.status(500).json({ error: error.message });
            }
        }
    }
}

export default SignatureController;

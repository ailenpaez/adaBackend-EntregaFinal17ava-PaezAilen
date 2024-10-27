import { Request, Response } from 'express';
import signatureService from '../services/signatures'; // Asegúrate de que la ruta sea correcta

class SignatureController {
    static async getAllSignatures(req: Request, res: Response) {
        try {
            const signatures = await signatureService.getAllSignatures();
            res.status(200).json(signatures);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async getSignatureById(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const signature = await signatureService.getSignatureById(id);
            res.status(200).json(signature);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }

    static async createSignature() { }

    static async UpdateSignature() { }

    static async deleteSignature() { }

}

export default SignatureController;

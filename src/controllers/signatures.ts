import { Request, Response } from "express";
import { Signature } from "../models";

class SignatureController {
    static async getAll(req: Request, res: Response) {
        try {
            const signatures = await Signature.findAll();
            // res.json(signatures);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

}

export default SignatureController;

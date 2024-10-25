import { Request, Response } from "express";
import { Enrollment } from "../models";

class EnrollmentController {
    static async getAll(req: Request, res: Response) {
        try {
            const enrollments = await Enrollment.findAll();
            // res.json(enrollments);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

export default EnrollmentController;

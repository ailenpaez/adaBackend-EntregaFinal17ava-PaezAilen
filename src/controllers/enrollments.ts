import { Request, Response } from 'express';
import EnrollmentService from "../services/enrollments";

class EnrollmentController {
    static async ViewEnrollments(req: Request, res: Response) {
        try {
            const enrollments = await EnrollmentService.ViewEnrollments();
            res.status(200).json(enrollments);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}
export default EnrollmentController;

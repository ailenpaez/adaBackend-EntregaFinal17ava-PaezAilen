import { Router } from "express";
import EnrollmentController from "../controllers/enrollments";

const router = Router();

router.get("/", EnrollmentController.ViewEnrollments);

export default router;
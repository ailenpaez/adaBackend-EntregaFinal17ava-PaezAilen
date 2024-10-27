import { Router } from "express";
import EnrollmentController from "../controllers/enrollments";

const router = Router();

router.get("/", EnrollmentController.getAll);

export default router;
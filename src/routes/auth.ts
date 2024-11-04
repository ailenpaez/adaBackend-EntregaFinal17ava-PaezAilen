import { Router } from "express";
import AuthController from "../controllers/auth";

const router = Router();

router.post("/register", AuthController.registerUser.bind(AuthController));

export default router;

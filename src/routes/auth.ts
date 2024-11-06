import { Router } from "express";
import AuthController from "../controllers/auth";
import { authenticateToken } from "../middlewares/auth-token";

const router = Router();

router.post("/register", AuthController.register);
router.post("/login", AuthController.login);
// router.post("/logout", authenticateToken, AuthController.logout);

export default router;

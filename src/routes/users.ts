import { Router } from "express";
import UserController from "../controllers/users";

const router = Router();

router.get("/", UserController.getAllUsers);

export default router

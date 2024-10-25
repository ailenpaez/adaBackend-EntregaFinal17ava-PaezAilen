import { Router } from "express";
import UserController from "../controllers/users";

const router = Router();

router.get("/", UserController.getAll);

export default router

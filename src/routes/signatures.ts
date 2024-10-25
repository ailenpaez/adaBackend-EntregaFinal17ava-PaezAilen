import { Router } from "express";
import SignatureController from "../controllers/signatures";

const router = Router();

router.get("/", SignatureController.getAll);

export default router;
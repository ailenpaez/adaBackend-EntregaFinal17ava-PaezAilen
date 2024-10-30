import { Router } from "express";
import SignatureController from "../controllers/signatures";
const router = Router();

router.get("/", SignatureController.getAllSignatures);
router.get("/:id", SignatureController.getSignatureById) // BUSCAR x ID
router.post("/new", SignatureController.createSignature);
router.patch("/:id", SignatureController.updateSignature);
router.delete('/:id', SignatureController.deleteSignature); 


export default router
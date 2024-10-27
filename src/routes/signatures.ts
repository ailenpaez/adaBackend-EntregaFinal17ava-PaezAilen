import { Router } from "express";
import SignatureController from "../controllers/signatures";

const router = Router();

router.get("/", SignatureController.getAllSignatures);
router.get("/:id", SignatureController.getSignatureById)
router.post('/signatures',SignatureController.createSignature);
// router.put('/signatures/:id', signatureController.UpdateSignature);
// router.delete('/signatures/:id', signatureController.deleteSignature);

export default router;
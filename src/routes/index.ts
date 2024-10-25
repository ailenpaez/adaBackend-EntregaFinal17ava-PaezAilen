import { Router } from "express";

import users from "./users"
import signatures from "./signatures"
import enrollments from "./entollments"


const router = Router();

router.use("/users", users)
router.use("/signatures", signatures)
router.use("/entollments", enrollments)

export default router;
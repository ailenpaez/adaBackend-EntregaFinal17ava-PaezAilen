import { Router } from "express";

import users from "./users"
import signatures from "./signatures"
import enrollments from "./enrollments"
import auth from "./auth"


const router = Router();

router.use("/users", users)
router.use("/signatures", signatures)
router.use("/enrollments", enrollments)
router.use("/auth", auth)

export default router;
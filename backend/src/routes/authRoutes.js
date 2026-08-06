import express from "express";
import { verifyIdToken } from "../middleware/auth.js";
import { register } from "../controllers/authControllers.js";

const router = express.Router();

router.post("/register", verifyIdToken, register);

export default router;
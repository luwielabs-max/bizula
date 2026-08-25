import express from "express";

import {
  verifyIdToken,
} from "../middleware/auth.js";

import {
  register,
  login,
} from "../controllers/authControllers.js";

const router = express.Router();


// ================================
// REGISTER
// ================================

router.post(
  "/register",
  verifyIdToken,
  register
);


// ================================
// LOGIN
// ================================

router.post(
  "/login",
  verifyIdToken,
  login
);


export default router;
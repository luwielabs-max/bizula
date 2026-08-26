import express from "express";

import { verifyIdToken } from "../middleware/auth.js";

import {
  getBookings,
  createBooking,
  updateBooking,
  deleteBooking,
} from "../controllers/bookingControllers.js";

const router = express.Router();

router.get(
  "/",
  verifyIdToken,
  getBookings
);

router.post(
  "/",
  verifyIdToken,
  createBooking
);

router.put(
  "/:id",
  verifyIdToken,
  updateBooking
);

router.delete(
  "/:id",
  verifyIdToken,
  deleteBooking
);

export default router;
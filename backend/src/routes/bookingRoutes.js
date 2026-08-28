import express from "express";

import {
  getBookings,
  createBooking,
  updateBooking,
  deleteBooking,
} from "../controllers/bookingControllers.js";

import { verifyIdToken } from "../middleware/auth.js";

const router = express.Router();


// Customer creates booking
router.post("/", createBooking);


// Vendor manages bookings
router.get("/", verifyIdToken, getBookings);

router.put("/:id", verifyIdToken, updateBooking);

router.delete("/:id", verifyIdToken, deleteBooking);


export default router;
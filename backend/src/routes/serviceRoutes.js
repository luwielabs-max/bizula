import express from "express";

import { verifyIdToken } from "../middleware/auth.js";

import {
  getServices,
  createService,
  updateService,
  deleteService,
} from "../controllers/serviceControllers.js";

const router = express.Router();


// Get vendor's services
router.get(
  "/",
  verifyIdToken,
  getServices
);


// Create service
router.post(
  "/",
  verifyIdToken,
  createService
);


// Update service
router.put(
  "/:id",
  verifyIdToken,
  updateService
);


// Delete service
router.delete(
  "/:id",
  verifyIdToken,
  deleteService
);


export default router;
import express from "express";

import {
  getPublicBusiness,
} from "../controllers/publicController.js";

const router = express.Router();

router.get(
  "/business/:slug",
  getPublicBusiness
);

export default router;
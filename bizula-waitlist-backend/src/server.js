import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { db } from "./config/firebase.js";
import waitlistRoutes from "./routes/waitlistRoutes.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());

app.use("/api/waitlist", waitlistRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Bizula waitlist backend is running 🚀",
  });
});

app.get("/api/health", async (req, res) => {
  try {
    await db
      .collection("_health")
      .doc("connection")
      .get();

    res.status(200).json({
      success: true,
      message: "Bizula backend and Firestore are connected",
    });
  } catch (error) {
    console.error(
      "Firestore connection error:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Could not connect to Firestore",
      error: error.message,
      code: error.code || null,
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Bizula backend running on http://localhost:${PORT}`
  );
});


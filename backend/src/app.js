import express from "express";
import cors from "cors";
import helmet from "helmet";
//import compression from "compression";

const app = express();

// Security
app.use(helmet());

// Enable CORS
app.use(cors());

// Parse JSON
app.use(express.json());

// Parse Form Data
app.use(express.urlencoded({ extended: true }));

// Compress responses
//app.use(compression());

// Health Check
app.get("/health", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Bizula API is running "
    });
});

export default app;
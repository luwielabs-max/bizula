import { db } from "../config/firebase.js";

// ==========================================
// REGISTER
// ==========================================

export const register = async (req, res) => {
  try {
    const { uid, email } = req.user;

    const {
      name,
      businessName,
      businessType,
    } = req.body;

    const userRef = db
      .collection("users")
      .doc(uid);

    const existingUser = await userRef.get();

    if (existingUser.exists) {
      return res.status(409).json({
        success: false,
        message: "User already exists",
      });
    }

    const user = {
      uid,
      email,
      name,

      role: "vendor",

      business: {
        name: businessName,
        type: businessType,
        verified: false,
      },

      status: "pending",

      isBlocked: false,

      createdAt: new Date().toISOString(),

      updatedAt: new Date().toISOString(),
    };

    await userRef.set(user);

    return res.status(201).json({
      success: true,
      message: "Registration successful",
      user,
    });

  } catch (error) {
    console.error(
      "REGISTER ERROR:",
      error
    );

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// ==========================================
// LOGIN
// ==========================================

export const login = async (req, res) => {
  try {

    // Firebase token was already verified
    // by verifyIdToken middleware

    const { uid, email } = req.user;

    console.log(
      "Login request:",
      uid,
      email
    );

    // Find user in Firestore
    const userRef = db
      .collection("users")
      .doc(uid);

    const userSnapshot = await userRef.get();

    // User authenticated with Firebase
    // but doesn't have a Bizula profile
    if (!userSnapshot.exists) {
      return res.status(404).json({
        success: false,
        message:
          "User profile not found",
      });
    }

    const user = userSnapshot.data();

    // Check if account is blocked
    if (user.isBlocked === true) {
      return res.status(403).json({
        success: false,
        message:
          "Your account has been blocked.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Login successful",

      user,
    });

  } catch (error) {

    console.error(
      "LOGIN ERROR:",
      error
    );

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
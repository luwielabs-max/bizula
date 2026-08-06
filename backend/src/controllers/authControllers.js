import { db } from "../config/firebase.js";

export const register = async (req, res) => {
  try {
    const { uid, email } = req.user;

    const {
      name,
      businessName,
      businessType,
    } = req.body;

    const userRef = db.collection("users").doc(uid);

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
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
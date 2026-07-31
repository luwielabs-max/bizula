import { db } from "../config/firebase.js";

export async function joinWaitlist(req, res) {
  try {
    const { email } = req.body;

    // Check that an email was sent
    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email is required",
      });
    }

    // Clean the email
    const normalizedEmail = email
      .trim()
      .toLowerCase();

    // Basic email validation
    const emailPattern =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(normalizedEmail)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address",
      });
    }

    // Use the email as the document ID
    const waitlistRef = db
      .collection("waitlist")
      .doc(normalizedEmail);

    // Check whether the email already exists
    const existingEntry = await waitlistRef.get();

    if (existingEntry.exists) {
      return res.status(409).json({
        success: false,
        message:
          "This email is already on the waitlist",
      });
    }

    // Save the new waitlist entry
    await waitlistRef.set({
      email: normalizedEmail,
      status: "waiting",
      source: "website",
      createdAt: new Date(),
    });

    return res.status(201).json({
      success: true,
      message:
        "You have successfully joined the Bizula waitlist",
    });
  } catch (error) {
    console.error(
      "Waitlist signup error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Something went wrong. Please try again.",
    });
  }
}


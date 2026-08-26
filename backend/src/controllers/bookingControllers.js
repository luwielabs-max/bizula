import { db } from "../config/firebase.js";

// ==========================================
// GET BOOKINGS
// ==========================================

export const getBookings = async (req, res) => {
  try {
    const { uid } = req.user;

    const snapshot = await db
      .collection("bookings")
      .where("vendorId", "==", uid)
      .get();

    const bookings = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return res.status(200).json({
      success: true,
      bookings,
    });

  } catch (error) {
    console.error("Get bookings error:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// ==========================================
// CREATE BOOKING
// ==========================================

export const createBooking = async (req, res) => {
  try {
    const { uid } = req.user;

    const {
      customer,
      service,
      date,
      time,
      amount,
      status,
    } = req.body;

    if (!customer || !service || !date || !time) {
      return res.status(400).json({
        success: false,
        message:
          "Customer, service, date and time are required",
      });
    }

    const booking = {
      vendorId: uid,

      customer,
      service,
      date,
      time,

      amount: Number(amount) || 0,

      status: status || "pending",

      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const bookingRef = await db
      .collection("bookings")
      .add(booking);

    return res.status(201).json({
      success: true,
      message: "Booking created successfully",

      booking: {
        id: bookingRef.id,
        ...booking,
      },
    });

  } catch (error) {
    console.error("Create booking error:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// ==========================================
// UPDATE BOOKING
// ==========================================

export const updateBooking = async (req, res) => {
  try {
    const { uid } = req.user;
    const { id } = req.params;

    const bookingRef = db
      .collection("bookings")
      .doc(id);

    const bookingDoc = await bookingRef.get();

    if (!bookingDoc.exists) {
      return res.status(404).json({
        success: false,
        message: "Booking not found",
      });
    }

    const booking = bookingDoc.data();

    // Make sure this booking belongs
    // to the logged-in vendor

    if (booking.vendorId !== uid) {
      return res.status(403).json({
        success: false,
        message: "Access denied",
      });
    }

    const {
      customer,
      service,
      date,
      time,
      amount,
      status,
    } = req.body;

    const updates = {
      updatedAt: new Date().toISOString(),
    };

    if (customer !== undefined)
      updates.customer = customer;

    if (service !== undefined)
      updates.service = service;

    if (date !== undefined)
      updates.date = date;

    if (time !== undefined)
      updates.time = time;

    if (amount !== undefined)
      updates.amount = Number(amount) || 0;

    if (status !== undefined)
      updates.status = status;

    await bookingRef.update(updates);

    return res.status(200).json({
      success: true,
      message: "Booking updated successfully",
    });

  } catch (error) {
    console.error("Update booking error:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// ==========================================
// DELETE BOOKING
// ==========================================

export const deleteBooking = async (req, res) => {
  try {
    const { uid } = req.user;
    const { id } = req.params;

    const bookingRef = db
      .collection("bookings")
      .doc(id);

    const bookingDoc = await bookingRef.get();

    if (!bookingDoc.exists) {
      return res.status(404).json({
        success: false,
        message: "Booking not found",
      });
    }

    const booking = bookingDoc.data();

    // Ownership check

    if (booking.vendorId !== uid) {
      return res.status(403).json({
        success: false,
        message: "Access denied",
      });
    }

    await bookingRef.delete();

    return res.status(200).json({
      success: true,
      message: "Booking deleted successfully",
    });

  } catch (error) {
    console.error("Delete booking error:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
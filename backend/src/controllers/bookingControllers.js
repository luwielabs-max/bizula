
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
//
// This endpoint is used by customers from
// the public booking page.
//
// Customer does NOT need to be logged in.
//
// ==========================================

export const createBooking = async (req, res) => {
  try {
    const {
      vendorId,
      serviceId,
      serviceName,
      customerName,
      customerEmail,
      customerPhone,
      date,
      time,
      notes,
      amount,
      reservationFee,
    } = req.body;


    // ========================================
    // VALIDATION
    // ========================================

    if (
      !vendorId ||
      !serviceId ||
      !customerName ||
      !customerEmail ||
      !customerPhone ||
      !date ||
      !time
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Vendor, service, customer details, date and time are required",
      });
    }


    // ========================================
    // VERIFY VENDOR EXISTS
    // ========================================

    const vendorRef = db
      .collection("users")
      .doc(vendorId);

    const vendorDoc = await vendorRef.get();

    if (!vendorDoc.exists) {
      return res.status(404).json({
        success: false,
        message: "Business not found",
      });
    }


    // ========================================
    // CREATE BOOKING
    // ========================================

    const booking = {
      vendorId,

      serviceId,
      serviceName: serviceName || "",

      customerName,
      customerEmail,
      customerPhone,

      date,
      time,

      notes: notes || "",

      amount: Number(amount) || 0,

      reservationFee:
        Number(reservationFee) || 0,

      status: "pending",

      paymentStatus: "unpaid",

      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };


    // ========================================
    // SAVE TO FIRESTORE
    // ========================================

    const bookingRef = await db
      .collection("bookings")
      .add(booking);


    // ========================================
    // RESPONSE
    // ========================================

    return res.status(201).json({
      success: true,
      message: "Booking created successfully",

      booking: {
        id: bookingRef.id,
        ...booking,
      },
    });

  } catch (error) {
    console.error(
      "Create booking error:",
      error
    );

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


    // ========================================
    // OWNERSHIP CHECK
    // ========================================

    if (booking.vendorId !== uid) {
      return res.status(403).json({
        success: false,
        message: "Access denied",
      });
    }


    const {
      customerName,
      customerEmail,
      customerPhone,
      serviceName,
      date,
      time,
      notes,
      amount,
      reservationFee,
      status,
      paymentStatus,
    } = req.body;


    const updates = {
      updatedAt: new Date().toISOString(),
    };


    if (customerName !== undefined)
      updates.customerName = customerName;

    if (customerEmail !== undefined)
      updates.customerEmail = customerEmail;

    if (customerPhone !== undefined)
      updates.customerPhone = customerPhone;

    if (serviceName !== undefined)
      updates.serviceName = serviceName;

    if (date !== undefined)
      updates.date = date;

    if (time !== undefined)
      updates.time = time;

    if (notes !== undefined)
      updates.notes = notes;

    if (amount !== undefined)
      updates.amount = Number(amount) || 0;

    if (reservationFee !== undefined)
      updates.reservationFee =
        Number(reservationFee) || 0;

    if (status !== undefined)
      updates.status = status;

    if (paymentStatus !== undefined)
      updates.paymentStatus = paymentStatus;


    await bookingRef.update(updates);


    return res.status(200).json({
      success: true,
      message: "Booking updated successfully",
    });

  } catch (error) {
    console.error(
      "Update booking error:",
      error
    );

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


    // ========================================
    // OWNERSHIP CHECK
    // ========================================

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
    console.error(
      "Delete booking error:",
      error
    );

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


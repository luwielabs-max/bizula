import { db } from "../config/firebase.js";

// ==========================================
// GET SERVICES
// ==========================================

export const getServices = async (req, res) => {
  try {
    const { uid } = req.user;

    const snapshot = await db
      .collection("services")
      .where("vendorId", "==", uid)
      .get();

    const services = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return res.status(200).json({
      success: true,
      services,
    });

  } catch (error) {
    console.error("Get services error:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// ==========================================
// CREATE SERVICE
// ==========================================

export const createService = async (req, res) => {
  try {
    const { uid } = req.user;

    const {
      name,
      description,
      price,
      duration,
      status,
    } = req.body;

    // Validate required fields

    if (!name || price === undefined) {
      return res.status(400).json({
        success: false,
        message: "Service name and price are required",
      });
    }

    // Create service

    const service = {
      vendorId: uid,

      name: name.trim(),

      description: description || "",

      price: Number(price) || 0,

      duration: duration || "",

      status: status || "Active",

      createdAt: new Date().toISOString(),

      updatedAt: new Date().toISOString(),
    };

    // Save to Firestore

    const serviceRef = await db
      .collection("services")
      .add(service);

    return res.status(201).json({
      success: true,

      message: "Service created successfully",

      service: {
        id: serviceRef.id,
        ...service,
      },
    });

  } catch (error) {
    console.error("Create service error:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// ==========================================
// UPDATE SERVICE
// ==========================================

export const updateService = async (req, res) => {
  try {
    const { uid } = req.user;

    const { id } = req.params;

    const serviceRef = db
      .collection("services")
      .doc(id);

    const serviceDoc = await serviceRef.get();

    // Service doesn't exist

    if (!serviceDoc.exists) {
      return res.status(404).json({
        success: false,
        message: "Service not found",
      });
    }

    const existingService = serviceDoc.data();

    // Make sure the service belongs
    // to the logged-in vendor

    if (existingService.vendorId !== uid) {
      return res.status(403).json({
        success: false,
        message: "Access denied",
      });
    }

    const {
      name,
      description,
      price,
      duration,
      status,
    } = req.body;

    const updates = {
      updatedAt: new Date().toISOString(),
    };

    if (name !== undefined) {
      updates.name = name.trim();
    }

    if (description !== undefined) {
      updates.description = description;
    }

    if (price !== undefined) {
      updates.price = Number(price) || 0;
    }

    if (duration !== undefined) {
      updates.duration = duration;
    }

    if (status !== undefined) {
      updates.status = status;
    }

    await serviceRef.update(updates);

    return res.status(200).json({
      success: true,
      message: "Service updated successfully",
    });

  } catch (error) {
    console.error("Update service error:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// ==========================================
// DELETE SERVICE
// ==========================================

export const deleteService = async (req, res) => {
  try {
    const { uid } = req.user;

    const { id } = req.params;

    const serviceRef = db
      .collection("services")
      .doc(id);

    const serviceDoc = await serviceRef.get();

    // Service doesn't exist

    if (!serviceDoc.exists) {
      return res.status(404).json({
        success: false,
        message: "Service not found",
      });
    }

    const existingService = serviceDoc.data();

    // Ownership check

    if (existingService.vendorId !== uid) {
      return res.status(403).json({
        success: false,
        message: "Access denied",
      });
    }

    await serviceRef.delete();

    return res.status(200).json({
      success: true,
      message: "Service deleted successfully",
    });

  } catch (error) {
    console.error("Delete service error:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
import { db } from "../config/firebase.js";

export const getPublicBusiness = async (req, res) => {
  try {
    const { slug } = req.params;

    if (!slug) {
      return res.status(400).json({
        success: false,
        message: "Business slug is required",
      });
    }

    // Get all vendor users
    const usersSnapshot = await db
      .collection("users")
      .where("role", "==", "vendor")
      .get();

    let business = null;
    let vendorId = null;

    usersSnapshot.forEach((doc) => {
      const user = doc.data();

      if (
        user.business?.name &&
        user.business.name
          .toLowerCase()
          .replace(/\s+/g, "-") === slug.toLowerCase()
      ) {
        business = {
          id: doc.id,
          name: user.business.name,
          type: user.business.type,
          verified: user.business.verified,
          rating: user.business.rating || null,
          reviews: user.business.reviews || 0,
        };

        vendorId = user.uid;
      }
    });

    if (!business) {
      return res.status(404).json({
        success: false,
        message: "Business not found",
      });
    }

    // Get services belonging to this vendor
    const servicesSnapshot = await db
      .collection("services")
      .where("vendorId", "==", vendorId)
      .where("status", "==", "Active")
      .get();

    const services = [];

    servicesSnapshot.forEach((doc) => {
      const service = doc.data();

      services.push({
        id: doc.id,
        name: service.name,
        description: service.description || "",
        category: service.category || "",
        duration: service.duration || "",
        price: Number(service.price) || 0,
        reservationFee:
          Number(service.reservationFee) || 0,
        status: service.status,
      });
    });

    return res.status(200).json({
      success: true,
      business: {
        ...business,
        services,
      },
    });
  } catch (error) {
    console.error(
      "Error loading public business:",
      error
    );

    return res.status(500).json({
      success: false,
      message: "Unable to load business profile",
    });
  }
};
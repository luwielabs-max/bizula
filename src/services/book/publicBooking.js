
const API_URL = "http://localhost:5000/api";


// ==========================================
// GET PUBLIC BUSINESS
// ==========================================

export const getPublicBusiness = async (slug) => {
  const response = await fetch(
    `${API_URL}/public/business/${slug}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message ||
        "Failed to load business"
    );
  }

  return data;
};


// ==========================================
// CREATE PUBLIC BOOKING
// ==========================================

export const createPublicBooking = async (
  booking
) => {
  const response = await fetch(
    `${API_URL}/public/bookings`,
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(booking),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message ||
        "Failed to create booking"
    );
  }

  return data;
};


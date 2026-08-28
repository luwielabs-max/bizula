import { auth } from "../../firebase/config";

const API_URL = "http://localhost:5000/api/bookings";

// ==========================================
// GET FIREBASE TOKEN
// ==========================================

const getToken = async () => {
  const user = auth.currentUser;

  if (!user) {
    throw new Error("User is not logged in");
  }

  return await user.getIdToken();
};


// ==========================================
// GET ALL BOOKINGS
// ==========================================

export const getBookings = async () => {
  const token = await getToken();

  const response = await fetch(API_URL, {
    method: "GET",

    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || "Failed to load bookings"
    );
  }

  return data;
};


// ==========================================
// CREATE BOOKING
// ==========================================

export const createBooking = async (booking) => {
  const token = await getToken();

  const response = await fetch(API_URL, {
    method: "POST",

    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },

    body: JSON.stringify(booking),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || "Failed to create booking"
    );
  }

  return data;
};


// ==========================================
// UPDATE BOOKING
// ==========================================

export const updateBooking = async (
  id,
  booking
) => {
  const token = await getToken();

  const response = await fetch(
    `${API_URL}/${id}`,
    {
      method: "PUT",

      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },

      body: JSON.stringify(booking),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || "Failed to update booking"
    );
  }

  return data;
};


// ==========================================
// DELETE BOOKING
// ==========================================

export const deleteBooking = async (id) => {
  const token = await getToken();

  const response = await fetch(
    `${API_URL}/${id}`,
    {
      method: "DELETE",

      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || "Failed to delete booking"
    );
  }

  return data;
};
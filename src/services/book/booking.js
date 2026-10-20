
import { auth } from "../../firebase/config";

const API_BASE_URL = (
  import.meta.env.VITE_API_URL ||
  (import.meta.env.DEV ? "http://localhost:5000" : "")
).replace(/\/+$/, "");

const BOOKINGS_URL = `${API_BASE_URL}/api/bookings`;

const getToken = async () => {
  const user = auth.currentUser;

  if (!user) {
    throw new Error("Please log in to continue.");
  }

  return user.getIdToken();
};

const request = async (endpoint = "", options = {}) => {
  if (!API_BASE_URL) {
    throw new Error(
      "The API URL is not configured. Please contact support."
    );
  }

  const token = await getToken();

  let response;

  try {
    response = await fetch(`${BOOKINGS_URL}${endpoint}`, {
      ...options,
      headers: {
        Authorization: `Bearer ${token}`,
        ...(options.body
          ? { "Content-Type": "application/json" }
          : {}),
        ...options.headers,
      },
    });
  } catch {
    throw new Error(
      "Unable to connect to Bizula. Check your connection and try again."
    );
  }

  let data = null;

  try {
    data = await response.json();
  } catch {
    // Some successful responses, such as DELETE, may have no JSON body.
  }

  if (!response.ok) {
    throw new Error(
      data?.message ||
        data?.error ||
        `Request failed (${response.status}). Please try again.`
    );
  }

  return data;
};

// Get all bookings
export const getBookings = async () => {
  return request();
};

// Create a booking
export const createBooking = async (booking) => {
  if (!booking || typeof booking !== "object") {
    throw new Error("Valid booking details are required.");
  }

  return request("", {
    method: "POST",
    body: JSON.stringify(booking),
  });
};

// Update a booking
export const updateBooking = async (id, booking) => {
  if (!id) {
    throw new Error("A booking ID is required.");
  }

  if (!booking || typeof booking !== "object") {
    throw new Error("Valid booking details are required.");
  }

  return request(`/${encodeURIComponent(id)}`, {
    method: "PUT",
    body: JSON.stringify(booking),
  });
};

// Delete a booking
export const deleteBooking = async (id) => {
  if (!id) {
    throw new Error("A booking ID is required.");
  }

  return request(`/${encodeURIComponent(id)}`, {
    method: "DELETE",
  });
};

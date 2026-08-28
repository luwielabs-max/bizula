import { auth } from "../../firebase/config";

const API_URL = "http://localhost:5000/api/services";


// ==========================================
// GET AUTH TOKEN
// ==========================================

const getToken = async () => {
  const user = auth.currentUser;

  if (!user) {
    throw new Error("User is not logged in");
  }

  return await user.getIdToken();
};


// ==========================================
// GET SERVICES
// ==========================================

export const getServices = async () => {
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
      data.message || "Failed to load services"
    );
  }

  return data;
};


// ==========================================
// CREATE SERVICE
// ==========================================

export const createService = async (service) => {
  const token = await getToken();

  const response = await fetch(API_URL, {
    method: "POST",

    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },

    body: JSON.stringify(service),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || "Failed to create service"
    );
  }

  return data;
};


// ==========================================
// GET ONE SERVICE
// ==========================================

export const getService = async (id) => {
  const token = await getToken();

  const response = await fetch(
    `${API_URL}/${id}`,
    {
      method: "GET",

      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || "Failed to load service"
    );
  }

  return data;
};


// ==========================================
// UPDATE SERVICE
// ==========================================

export const updateService = async (
  id,
  service
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

      body: JSON.stringify(service),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || "Failed to update service"
    );
  }

  return data;
};


// ==========================================
// DELETE SERVICE
// ==========================================

export const deleteService = async (id) => {
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
      data.message || "Failed to delete service"
    );
  }

  return data;
};
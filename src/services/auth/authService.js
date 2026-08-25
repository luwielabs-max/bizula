import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import { auth } from "../../firebase/config";

const API_URL = "http://localhost:5000/api/auth";

export const register = async (form) => {
  // Create the user in Firebase Authentication
  const result = await createUserWithEmailAndPassword(
    auth,
    form.email,
    form.password
  );

  // Get Firebase ID Token
  const token = await result.user.getIdToken();

  // Send user details to our backend
  const response = await fetch(`${API_URL}/register`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: form.name,
      businessName: form.businessName,
      businessType: form.businessType,
    }),
  });

  if (!response.ok) {
    throw new Error("Registration failed");
  }

  return await response.json();
};

export const login = async (email, password) => {
  const result = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );

  const token = await result.user.getIdToken();

  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Login failed");
  }

  return await response.json();
};

export const googleLogin = async () => {
  const provider = new GoogleAuthProvider();

  const result = await signInWithPopup(auth, provider);

  const token = await result.user.getIdToken();

  const response = await fetch(`${API_URL}/google`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Google login failed");
  }

  return await response.json();
};
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import { auth } from "../firebase";

const API_URL = "http://localhost:5000/api/auth";

export async function register(form) {
  // Create Firebase user
  const result = await createUserWithEmailAndPassword(
    auth,
    form.email,
    form.password
  );

  // Get Firebase ID Token
  const token = await result.user.getIdToken();

  // Send profile data to backend
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

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Registration failed");
  }

  return data;
}

export async function login(email, password) {
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

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Login failed");
  }

  return data;
}

export async function googleLogin() {
  const provider = new GoogleAuthProvider();

  const result = await signInWithPopup(auth, provider);

  const token = await result.user.getIdToken();

  const response = await fetch(`${API_URL}/google`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Google login failed");
  }

  return data;
}
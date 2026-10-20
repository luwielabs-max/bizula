
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import { auth } from "../../firebase/config";

const API_BASE_URL = (
  import.meta.env.VITE_API_URL ||
  (import.meta.env.DEV ? "http://localhost:5000" : "")
).replace(/\/+$/, "");

const AUTH_URL = `${API_BASE_URL}/api/auth`;

async function requestAuth(endpoint, token, body) {
  if (!API_BASE_URL) {
    throw new Error(
      "The API URL is not configured. Please contact support."
    );
  }

  let response;

  try {
    response = await fetch(`${AUTH_URL}/${endpoint}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        ...(body ? { "Content-Type": "application/json" } : {}),
      },
      ...(body ? { body: JSON.stringify(body) } : {}),
    });
  } catch {
    throw new Error(
      "Unable to connect to Bizula. Check your connection and try again."
    );
  }

  let data;

  try {
    data = await response.json();
  } catch {
    data = {};
  }

  if (!response.ok) {
    throw new Error(
      data.message ||
        `Request failed (${response.status}). Please try again.`
    );
  }

  return data;
}

export const register = async (form) => {
  if (
    !form?.name?.trim() ||
    !form?.email?.trim() ||
    !form?.password ||
    !form?.businessName?.trim() ||
    !form?.businessType
  ) {
    throw new Error("Please complete all required registration fields.");
  }

  const result = await createUserWithEmailAndPassword(
    auth,
    form.email.trim(),
    form.password
  );

  const token = await result.user.getIdToken();

  try {
    return await requestAuth("register", token, {
      name: form.name.trim(),
      businessName: form.businessName.trim(),
      businessType: form.businessType,
    });
  } catch (error) {
    throw new Error(
      `${error.message} Your authentication account may have been created, but Bizula profile registration did not complete.`
    );
  }
};

export const login = async (email, password) => {
  if (!email?.trim() || !password) {
    throw new Error("Email and password are required.");
  }

  const result = await signInWithEmailAndPassword(
    auth,
    email.trim(),
    password
  );

  const token = await result.user.getIdToken();

  return requestAuth("login", token);
};

export const googleLogin = async () => {
  const provider = new GoogleAuthProvider();

  const result = await signInWithPopup(auth, provider);
  const token = await result.user.getIdToken();

  // The current backend supports /login, not /google.
  // New Google users still need a supported Bizula profile
  // creation/onboarding flow before this can work for them.
  return requestAuth("login", token);
};

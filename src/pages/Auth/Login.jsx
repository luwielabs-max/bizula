import { useState } from "react";
import { useNavigate } from "react-router-dom";

import AuthLayout from "../../components/auth/AuthLayout";

import AuthHeader from "../../components/auth/shared/AuthHeader";
import SocialLogin from "../../components/auth/shared/SocialLogin";
import AuthDivider from "../../components/auth/shared/AuthDivider";
import AuthFooter from "../../components/auth/shared/AuthFooter";

import LoginForm from "../../components/auth/forms/LoginForm";

import { login } from "../../services/auth/authService";

export default function Login() {
  const navigate = useNavigate();

  // Login form
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  // Login state
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // ==========================================
  // HANDLE LOGIN
  // ==========================================

  const handleLogin = async () => {
    try {
      setLoading(true);
      setError("");

      console.log(
        "Attempting login:",
        form.email
      );

      // Firebase + backend login
      const data = await login(
        form.email,
        form.password
      );

      console.log(
        "Login successful:",
        data
      );

      // Go to dashboard
      navigate("/dashboard");

    } catch (error) {
      console.error(
        "Login error:",
        error
      );

      // Firebase errors
      if (
        error.code ===
        "auth/invalid-credential"
      ) {
        setError(
          "Invalid email or password."
        );
      } else if (
        error.code ===
        "auth/user-not-found"
      ) {
        setError(
          "No account exists with this email."
        );
      } else if (
        error.code ===
        "auth/wrong-password"
      ) {
        setError(
          "Incorrect password."
        );
      } else if (
        error.code ===
        "auth/invalid-email"
      ) {
        setError(
          "Please enter a valid email address."
        );
      } else {
        setError(
          error.message ||
            "Unable to sign in. Please try again."
        );
      }

    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout>

      {/* Header */}

      <AuthHeader
        title="Welcome back"
        subtitle="Sign in to continue managing your business."
      />

      {/* Google / Social Login */}

      <SocialLogin />

      <AuthDivider />

      {/* Email / Password Login */}

      <LoginForm
        form={form}
        setForm={setForm}
        onSubmit={handleLogin}
        loading={loading}
        error={error}
      />

      {/* Footer */}

      <AuthFooter
        text="Don't have an account?"
        linkText="Create Account"
        link="/register"
      />

    </AuthLayout>
  );
}
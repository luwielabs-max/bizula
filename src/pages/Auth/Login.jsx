import { useState } from "react";
import { useNavigate } from "react-router-dom";

import AuthLayout from "../../components/auth/AuthLayout";

import AuthHeader from "../../components/auth/shared/AuthHeader";
import SocialLogin from "../../components/auth/shared/SocialLogin";
import AuthDivider from "../../components/auth/shared/AuthDivider";
import AuthFooter from "../../components/auth/shared/AuthFooter";

import LoginForm from "../../components/auth/forms/LoginForm";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  return (
    <AuthLayout>

      <AuthHeader
        title="Welcome back"
        subtitle="Sign in to continue managing your business."
      />

      <SocialLogin />

      <AuthDivider />

      <LoginForm
        form={form}
        setForm={setForm}
        onSubmit={() => {
          navigate("/dashboard");
        }}
      />

      <AuthFooter
        text="Don't have an account?"
        linkText="Create Account"
        link="/register"
      />

    </AuthLayout>
  );
}
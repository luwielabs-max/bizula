import { useState } from "react";
import { useNavigate } from "react-router-dom";

import AuthLayout from "../../components/auth/AuthLayout";
import AuthHeader from "../../components/auth/shared/AuthHeader";
import ForgotPasswordForm from "../../components/auth/forms/ForgotPasswordForm";
import AuthFooter from "../../components/auth/shared/AuthFooter";

export default function ForgotPassword() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  return (
    <AuthLayout>

      <AuthHeader
        title="Forgot your password?"
        subtitle="Enter your email and we'll send you a password reset link."
      />

      <ForgotPasswordForm
        email={email}
        setEmail={setEmail}
        onSubmit={() => navigate("/email-sent")}
      />

      <AuthFooter
        text="Remember your password?"
        linkText="Back to Login"
        link="/login"
      />

    </AuthLayout>
  );
}
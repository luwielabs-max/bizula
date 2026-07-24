import { useState } from "react";

import AuthLayout from "../../components/auth/AuthLayout";
import StepIndicator from "../../components/auth/shared/StepIndicator";
import AuthHeader from "../../components/auth/shared/AuthHeader";
import SocialLogin from "../../components/auth/shared/SocialLogin";
import AuthDivider from "../../components/auth/shared/AuthDivider";
import RegisterStepOne from "../../components/auth/forms/RegisterStepOne";
import AuthFooter from "../../components/auth/shared/AuthFooter";
import RegisterStepTwo from "../../components/auth/forms/RegisterStepTwo";
import RegisterStepThree from "../../components/auth/forms/RegisterStepThree";

import { useNavigate } from "react-router-dom";



export default function Register() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

const [form, setForm] = useState({
  name: "",
  email: "",
  password: "",

  businessType: "",

  businessName: "",
});

  return (
    <AuthLayout>
      <StepIndicator
        currentStep={step}
        totalSteps={3}
        labels={[
          "Account",
          "Business",
          "Ready",
        ]}
      />

      <AuthHeader
  step={step}
  title={
    step === 1
      ? "Create your account"
      : step === 2
      ? "Choose your business"
      : "Business details"
  }
  subtitle={
    step === 1
      ? "Let's get your business online."
      : step === 2
      ? "Select the type of business you run."
      : "Tell us about your business."
  }
/>

      <SocialLogin />

      <AuthDivider />

{step === 1 && (
  <RegisterStepOne
    form={form}
    setForm={setForm}
    onContinue={() => setStep(2)}
  />
)}

{step === 2 && (
  <RegisterStepTwo
    form={form}
    setForm={setForm}
    onContinue={() => setStep(3)}
  />
)}

{step === 3 && (
  <RegisterStepThree
    form={form}
    setForm={setForm}
    onBack={() => setStep(2)}
onSubmit={() => {
  navigate("/success");
}}
  />
)}
      <AuthFooter />
    </AuthLayout>
  );
}
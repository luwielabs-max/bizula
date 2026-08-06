import { useState } from "react";
import { motion } from "framer-motion";
import {
  Store,
  BriefcaseBusiness,
} from "lucide-react";

import {
  LButton,
  LInput,
} from "../../../lib/luwie-ui";

import { register } from "../../../services/auth/authService";

export default function RegisterStepThree({
  form,
  setForm,
  onBack,
  onSubmit,
}) {
  const isRetail = form.businessType === "retail";

  const [loading, setLoading] = useState(false);

  async function handleRegister() {
    try {
      setLoading(true);

      // Register with Firebase and Backend
      const response = await register(form);

      console.log("Registration Successful:", response);

      // Continue to success page
      onSubmit();

    } catch (error) {
      console.error("Registration Error:", error);

      alert(
        error.message || "Registration failed. Please try again."
      );

    } finally {
      setLoading(false);
    }
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 25,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      exit={{
        opacity: 0,
        x: -25,
      }}
      transition={{
        duration: 0.35,
      }}
      className="space-y-6"
    >
      <LInput
        autoFocus
        placeholder="Business Name"
        value={form.businessName}
        onChange={(e) =>
          setForm({
            ...form,
            businessName: e.target.value,
          })
        }
      />

      <div
        className="
          rounded-3xl
          border
          border-zinc-200
          p-5
          flex
          items-center
          justify-between
        "
      >
        <div className="flex items-center gap-4">
          <div
            className="
              w-12
              h-12
              rounded-2xl
              bg-black
              text-white
              flex
              items-center
              justify-center
            "
          >
            {isRetail ? (
              <Store size={22} />
            ) : (
              <BriefcaseBusiness size={22} />
            )}
          </div>

          <div>
            <h3 className="font-semibold">
              {isRetail
                ? "Retail Business"
                : "Service Business"}
            </h3>

            <p className="text-sm text-zinc-500">
              Selected in Step 2
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={onBack}
          className="
            text-sm
            font-medium
            text-black
            hover:underline
          "
        >
          Change
        </button>
      </div>

      <LButton
        className="w-full h-14 rounded-2xl"
        disabled={!form.businessName.trim() || loading}
        onClick={handleRegister}
      >
        {loading
          ? "Creating Account..."
          : "Create Account →"}
      </LButton>
    </motion.div>
  );
}
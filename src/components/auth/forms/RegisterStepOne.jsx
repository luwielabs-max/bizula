import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";

import {
  LButton,
  LInput,
} from "../../../lib/luwie-ui";

import { validateRegisterStepOne } from "../../../utils/validation/registerValidation";
import { passwordStrength } from "../../../utils/validation/passwordStrength";

export default function RegisterStepOne({
  form,
  setForm,
  onContinue,
}) {
  const [showPassword, setShowPassword] = useState(false);

  const errors = useMemo(
    () => validateRegisterStepOne(form),
    [form]
  );

  const isValid = Object.keys(errors).length === 0;

  const strength = passwordStrength(form.password);

  function updateField(field, value) {
    setForm({
      ...form,
      [field]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!isValid) return;

    onContinue();
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{
        opacity: 0,
        y: 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: .35,
      }}
      className="space-y-6"
    >
      {/* Full Name */}

      <div className="space-y-2">
        <LInput
          autoFocus
          placeholder="Full Name"
          value={form.name}
          onChange={(e) =>
            updateField("name", e.target.value)
          }
        />

        <AnimatePresence>
          {errors.name && (
            <motion.p
              initial={{
                opacity: 0,
                y: -6,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
              }}
              className="text-sm text-red-500"
            >
              {errors.name}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Email */}

      <div className="space-y-2">
        <LInput
          type="email"
          placeholder="Email Address"
          value={form.email}
          onChange={(e) =>
            updateField("email", e.target.value)
          }
        />

        <AnimatePresence>
          {errors.email && (
            <motion.p
              initial={{
                opacity: 0,
                y: -6,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
              }}
              className="text-sm text-red-500"
            >
              {errors.email}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Password */}

      <div className="space-y-3">

        <div className="relative">

          <LInput
            type={
              showPassword
                ? "text"
                : "password"
            }
            placeholder="Password"
            value={form.password}
            onChange={(e) =>
              updateField(
                "password",
                e.target.value
              )
            }
          />

          <button
            type="button"
            onClick={() =>
              setShowPassword(!showPassword)
            }
            className="
              absolute
              right-3
              top-1/2
              -translate-y-1/2

              w-9
              h-9

              rounded-full

              flex
              items-center
              justify-center

              hover:bg-zinc-100
              transition
            "
          >
            {showPassword ? (
              <EyeOff size={18} />
            ) : (
              <Eye size={18} />
            )}
          </button>

        </div>

        <AnimatePresence>
          {errors.password && (
            <motion.p
              initial={{
                opacity: 0,
                y: -6,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
              }}
              className="text-sm text-red-500"
            >
              {errors.password}
            </motion.p>
          )}
        </AnimatePresence>

        {/* Password Strength */}

        <div className="space-y-2">

          <div className="h-1.5 rounded-full bg-zinc-200 overflow-hidden">

            <motion.div
              animate={{
                width: strength.width,
              }}
              transition={{
                duration: .35,
              }}
              className="h-full rounded-full bg-black"
            />

          </div>

          <p className="text-xs text-zinc-500">
            Password Strength:
            <span className="ml-1 font-medium text-black">
              {strength.label}
            </span>
          </p>

        </div>

      </div>

      {/* Continue */}

      <LButton
        type="submit"
        className="w-full h-14 rounded-2xl"
        disabled={!isValid}
      >
        Continue →
      </LButton>

    </motion.form>
  );
}
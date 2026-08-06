import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

import {
  LButton,
  LInput,
} from "../../../lib/luwie-ui";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../../firebase/config";

const provider = new GoogleAuthProvider();

const login = async () => {
  try {
    const result = await signInWithPopup(auth, provider);

    const token = await result.user.getIdToken();

    console.log("Firebase Token:", token);

  } catch (error) {
    console.error(error);
  }
};

export default function LoginForm({
  form,
  setForm,
  onSubmit,
}) {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="space-y-5">

      {/* Email */}

      <LInput
        type="email"
        placeholder="Email Address"
        value={form.email}
        onChange={(e) =>
          setForm({
            ...form,
            email: e.target.value,
          })
        }
      />

      {/* Password */}

      <div className="relative">

        <LInput
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          value={form.password}
          onChange={(e) =>
            setForm({
              ...form,
              password: e.target.value,
            })
          }
        />

        <button
          type="button"
          onClick={() =>
            setShowPassword(!showPassword)
          }
          className="
            absolute
            right-4
            top-1/2
            -translate-y-1/2
            text-zinc-500
            hover:text-black
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

      {/* Remember */}

      <div className="flex items-center justify-between">

        <label className="flex items-center gap-2 cursor-pointer">

          <input
            type="checkbox"
            checked={rememberMe}
            onChange={() =>
              setRememberMe(!rememberMe)
            }
            className="rounded"
          />

          <span className="text-sm text-zinc-600">
            Remember me
          </span>

        </label>

        <Link
  to="/forgot-password"
  className="
    text-sm
    text-black
    hover:underline
  "
>
  Forgot password?
</Link>

      </div>

      {/* Login */}

      <LButton
        className="w-full h-12 rounded-xl"
        onClick={onSubmit}
      >
        Sign In
      </LButton>

    </div>
  );
}
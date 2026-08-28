import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

import {
  LButton,
  LInput,
} from "../../../lib/luwie-ui";

export default function LoginForm({
  form,
  setForm,
  onSubmit,
  loading = false,
  error = "",
}) {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      return;
    }

    await onSubmit();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >

      {/* ================================
          EMAIL
      ================================= */}

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
        disabled={loading}
      />

      {/* ================================
          PASSWORD
      ================================= */}

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
            setForm({
              ...form,
              password: e.target.value,
            })
          }
          disabled={loading}
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
            transition
            hover:text-black
          "
        >
          {showPassword ? (
            <EyeOff size={18} />
          ) : (
            <Eye size={18} />
          )}
        </button>

      </div>

      {/* ================================
          ERROR
      ================================= */}

      {error && (
        <p className="text-sm text-red-500">
          {error}
        </p>
      )}

      {/* ================================
          REMEMBER ME
      ================================= */}

      <div className="flex items-center justify-between">

        <label className="flex cursor-pointer items-center gap-2">

          <input
            type="checkbox"
            checked={rememberMe}
            onChange={() =>
              setRememberMe(!rememberMe)
            }
            className="rounded"
            disabled={loading}
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

      {/* ================================
          LOGIN BUTTON
      ================================= */}

      <LButton
        type="submit"
        className="w-full h-12 rounded-xl"
        disabled={
          loading ||
          !form.email ||
          !form.password
        }
      >
        {loading
          ? "Signing in..."
          : "Sign In"}
      </LButton>

    </form>
  );
}
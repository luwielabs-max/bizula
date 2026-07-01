import { motion } from "framer-motion";
import { avatarMotion } from "../motion";

export default function LTextarea({
  label,
  helperText,
  error,
  className = "",
  ...props
}) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="text-sm font-medium text-zinc-700">
          {label}
        </label>
      )}

      <motion.textarea
        className={`
          min-h-[140px]
          w-full
          resize-none

          rounded-3xl
          border

          ${
            error
              ? "border-red-300"
              : "border-zinc-200"
          }

          bg-white

          px-4
          py-3

          outline-none

          transition-all
          duration-200

          focus:border-zinc-400
          focus:shadow-[0_0_0_4px_rgba(0,0,0,0.04)]

          placeholder:text-zinc-400

          ${className}
        `}
        {...props}
      />

      {error ? (
        <p className="text-sm text-red-500">
          {error}
        </p>
      ) : helperText ? (
        <p className="text-sm text-zinc-500">
          {helperText}
        </p>
      ) : null}
    </div>
  );
}
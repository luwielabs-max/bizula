import { motion } from "framer-motion";

export default function LInput({
  label,
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

      <motion.input
        whileFocus={{
          scale: 1.01,
        }}
        transition={{
          duration: 0.15,
        }}
        className={`
          w-full
          px-4
          py-3
          rounded-2xl
          border
          border-zinc-200
          bg-white
          outline-none
          text-zinc-900
          placeholder:text-zinc-400
          focus:border-zinc-400
          focus:shadow-[0_0_0_4px_rgba(0,0,0,0.04)]
          transition-all
          duration-200
          ${className}
        `}
        {...props}
      />
    </div>
  );
}
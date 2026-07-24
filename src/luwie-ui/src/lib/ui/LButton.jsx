import { motion } from "framer-motion";
import { buttonMotion } from "../motion";

export default function LButton({
  children,
  variant = "default",
  className = "",
  ...props
}) {
  const variants = {
    default:
      "bg-black text-white hover:bg-zinc-900 shadow-sm",

    ghost:
      "bg-transparent text-black hover:bg-zinc-100",

    glass:
      "bg-white/80 backdrop-blur-xl border border-zinc-200 text-black",
  };

  return (
    <motion.button
      {...buttonMotion}
      className={`
        px-5
        py-2.5
        rounded-2xl
        font-medium
        text-sm
        transition-all
        duration-200
        ${variants[variant]}
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.button>
  );
}
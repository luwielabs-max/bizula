import { motion } from "framer-motion";

export default function LCard({
  children,
  variant = "default",
  hover = true,
  className = "",
  ...props
}) {
  const variants = {
    default:
      `
      bg-white
      border border-zinc-100
      shadow-[0_8px_30px_rgba(0,0,0,0.06)]
      `,

    glass:
      `
      bg-white/70
      backdrop-blur-xl
      border border-white/40
      shadow-[0_8px_30px_rgba(0,0,0,0.08)]
      `,
  };

  return (
    <motion.div
      whileHover={
        hover
          ? {
              y: -4,
              scale: 1.01,
            }
          : {}
      }
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 25,
      }}
      className={`
        rounded-[32px]
        p-6
        transition-all
        duration-200
        ${variants[variant]}
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.div>
  );
}
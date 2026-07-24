import { motion } from "framer-motion";

export default function LDock({
  children,
  className = "",
}) {
  return (
    <motion.div
      initial={{
        y: 20,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.3,
      }}
      className={`
        inline-flex
        items-center
        gap-2

        p-2

        rounded-[28px]

        bg-white/75
        backdrop-blur-xl

        border
        border-zinc-200/60

        shadow-[0_8px_30px_rgba(0,0,0,0.08)]

        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}
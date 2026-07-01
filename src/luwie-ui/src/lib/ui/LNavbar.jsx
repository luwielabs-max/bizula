import { motion } from "framer-motion";

export default function LNavbar({
  children,
  className = "",
}) {
  return (
    <motion.nav
      initial={{
        y: -20,
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
        w-full
        h-16

        px-6

        flex
        items-center
        justify-between

        bg-white/70
        backdrop-blur-xl

        border-b
        border-zinc-200/50

        ${className}
      `}
    >
      {children}
    </motion.nav>
  );
}
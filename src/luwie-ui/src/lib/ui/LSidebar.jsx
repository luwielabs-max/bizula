import { motion } from "framer-motion";
import { sidebarMotion } from "../motion";

export default function LSidebar({
  children,
  className = "",
}) {
  return (
    <motion.aside
      {...sidebarMotion}
      className={`
        h-full
        w-64

        bg-white/70
        backdrop-blur-xl

        border-r
        border-zinc-200/50

        p-4

        ${className}
      `}
    >
      <div className="flex flex-col gap-2">
        {children}
      </div>
    </motion.aside>
  );
}
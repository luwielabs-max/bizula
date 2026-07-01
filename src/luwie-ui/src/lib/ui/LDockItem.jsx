import { motion } from "framer-motion";
import { dockItemMotion } from "../motion";

export default function LDockItem({
  icon: Icon,
  active = false,
  children,
  className = "",
  ...props
}) {
  return (
    <motion.button
      {...dockItemMotion}
      className={`
        relative

        w-12
        h-12

        rounded-2xl

        flex
        items-center
        justify-center

        transition-all

        ${
          active
            ? "bg-zinc-900 text-white"
            : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
        }

        ${className}
      `}
      {...props}
    >
      {Icon && <Icon size={20} />}

      {children}
    </motion.button>
  );
}
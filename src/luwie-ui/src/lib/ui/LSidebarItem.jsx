import { motion } from "framer-motion";

export default function LSidebarItem({
  children,
  icon: Icon,
  active = false,
  className = "",
  ...props
}) {
  return (
    <motion.button
      whileHover={{
        x: 2,
      }}
      whileTap={{
        scale: 0.98,
      }}
      className={`
        w-full

        flex
        items-center
        gap-3

        px-4
        py-3

        rounded-2xl

        transition-all

        ${
          active
            ? "bg-zinc-100 text-zinc-900"
            : "text-zinc-600 hover:bg-zinc-50"
        }

        ${className}
      `}
      {...props}
    >
      {Icon && <Icon size={18} />}

      <span>{children}</span>
    </motion.button>
  );
}
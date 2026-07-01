import { motion } from "framer-motion";

export default function BusinessTypeCard({
  title,
  description,
  icon: Icon,
  selected,
  onClick,
}) {
  return (
    <motion.button
      whileHover={{
        y: -4,
        scale: 1.02,
      }}
      whileTap={{
        scale: .98,
      }}
      onClick={onClick}
      className={`
        w-full
        rounded-3xl
        border
        p-6
        text-left
        transition-all

        ${
          selected
            ? "border-black bg-black text-white shadow-xl"
            : "border-zinc-200 bg-white hover:border-zinc-400"
        }
      `}
    >
      <Icon
        size={34}
        className="mb-5"
      />

      <h3 className="text-lg font-semibold">
        {title}
      </h3>

      <p
        className={`
          mt-2
          text-sm

          ${
            selected
              ? "text-zinc-300"
              : "text-zinc-500"
          }
        `}
      >
        {description}
      </p>
    </motion.button>
  );
}
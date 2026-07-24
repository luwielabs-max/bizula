import { motion } from "framer-motion";
import { avatarMotion } from "../motion";

export default function LAvatar({
  src,
  name = "",
  size = "md",
  status,
  className = "",
}) {
  const sizes = {
    sm: "w-8 h-8 text-xs",
    md: "w-10 h-10 text-sm",
    lg: "w-14 h-14 text-base",
    xl: "w-20 h-20 text-lg",
  };

  const statusSizes = {
    sm: "w-2 h-2",
    md: "w-3 h-3",
    lg: "w-4 h-4",
    xl: "w-5 h-5",
  };

  const initials = name
    ? name
        .split(" ")
        .map((word) => word[0])
        .join("")
        .slice(0, 2)
        .toUpperCase()
    : "";

  return (
    <motion.div
      {...avatarMotion}
      className={`
        relative
        ${sizes[size]}
        ${className}
      `}
    >
      <div
        className="
          w-full
          h-full
          rounded-full
          overflow-hidden
          bg-zinc-100
          border
          border-zinc-200
          flex
          items-center
          justify-center
          font-medium
          text-zinc-700
          shadow-sm
        "
      >
        {src ? (
          <img
            src={src}
            alt={name}
            className="w-full h-full object-cover"
          />
        ) : (
          initials
        )}
      </div>

      {status && (
        <span
          className={`
            absolute
            bottom-0
            right-0
            rounded-full
            border-2
            border-white
            ${statusSizes[size]}
            ${
              status === "online"
                ? "bg-green-500"
                : "bg-zinc-400"
            }
          `}
        />
      )}
    </motion.div>
  );
}
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { LCard } from "../../lib/luwie-ui";

export default function QuickActionCard({
  title,
  description,
  icon: Icon,
  path,
}) {
  const navigate = useNavigate();

  return (
    <motion.div
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 24,
      }}
    >
      <LCard
        className="p-6 cursor-pointer group"
        onClick={() => navigate(path)}
      >
        <div className="flex justify-between items-start">
          <div className="w-12 h-12 rounded-2xl bg-zinc-100 flex items-center justify-center">
            <Icon size={22} />
          </div>

          <ArrowRight
            size={18}
            className="text-zinc-400 transition-transform duration-300 group-hover:translate-x-1"
          />
        </div>

        <h3 className="font-semibold text-lg mt-6">
          {title}
        </h3>

        <p className="text-sm text-zinc-500 mt-2">
          {description}
        </p>
      </LCard>
    </motion.div>
  );
}
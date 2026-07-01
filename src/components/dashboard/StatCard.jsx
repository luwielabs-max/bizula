import { motion } from "framer-motion";
import { LCard } from "../../lib/luwie-ui";

export default function StatCard({
  icon: Icon,
  title,
  value,
  subtitle,
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
    >
      <LCard className="p-6 h-full">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm text-zinc-500">
              {title}
            </p>

            <h2 className="text-3xl font-semibold mt-3 tracking-tight">
              {value}
            </h2>

            <p className="text-sm text-zinc-400 mt-2">
              {subtitle}
            </p>
          </div>

          {Icon && (
            <div className="w-12 h-12 rounded-2xl bg-zinc-100 flex items-center justify-center">
              <Icon size={22} />
            </div>
          )}
        </div>
      </LCard>
    </motion.div>
  );
}
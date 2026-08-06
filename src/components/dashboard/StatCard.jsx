import { motion } from "framer-motion";
import { LCard } from "../../luwie-ui/src";
import { formatCurrencyValue, formatCompactNumber } from "../../utils/formatters";

export default function StatCard({
  icon: Icon,
  title,
  value,
  subtitle,
  money = false,
}) {
  const isNumeric = typeof value === "number" || (!Number.isNaN(Number(value)) && String(value).trim() !== "");
  const numericValue = typeof value === "number" ? value : Number(value);
  const displayValue = money
    ? formatCurrencyValue(numericValue)
    : isNumeric
      ? formatCompactNumber(numericValue)
      : String(value);

  const fullValue = typeof value === "number"
    ? value.toLocaleString()
    : String(value ?? "");

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
    >
      <LCard className="h-full p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0 flex-1">
            <p className="text-sm text-zinc-500">{title}</p>

            <h2
              className="mt-3 overflow-hidden text-ellipsis whitespace-nowrap text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl"
              title={fullValue}
            >
              {displayValue}
            </h2>

            <p className="mt-2 text-sm text-zinc-400">{subtitle}</p>
          </div>

          {Icon && (
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-zinc-100">
              <Icon size={22} />
            </div>
          )}
        </div>
      </LCard>
    </motion.div>
  );
}
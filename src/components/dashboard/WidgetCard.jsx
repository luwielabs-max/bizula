import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { LCard } from "../../luwie-ui/src";
import { formatCurrencyValue, formatCompactNumber } from "../../utils/formatters";

export default function WidgetCard({
  title,
  value,
  description,
  icon: Icon,
  action,
  path,
}) {
  const navigate = useNavigate();

  return (
    <LCard className="p-6 h-full">

      <div className="flex justify-between items-start">

        <div className="w-12 h-12 rounded-2xl border border-zinc-200 bg-white shadow-sm flex items-center justify-center">
          {Icon && <Icon size={22} />}
        </div>

        {action && (
          <button
            onClick={() => navigate(path)}
            className="flex items-center gap-1 text-sm text-zinc-500 hover:text-black transition"
          >
            {action}
            <ArrowRight size={16} />
          </button>
        )}

      </div>

      <div className="mt-8">

        <p className="text-zinc-500 text-sm">
          {title}
        </p>

        <h2 className="text-3xl font-bold mt-2">
          {value}
        </h2>

        <p className="text-sm text-zinc-500 mt-3">
          {description}
        </p>

      </div>

    </LCard>
  );
}
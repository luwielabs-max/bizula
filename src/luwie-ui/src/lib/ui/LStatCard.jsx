import LCard from "./LCard";

export default function LStatCard({
  title,
  value,
  change,
  icon,
  className = "",
}) {
  return (
    <LCard
      className={`
        min-w-[260px]
        ${className}
      `}
    >
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-zinc-500">
            {title}
          </p>

          <h2 className="text-3xl font-semibold mt-2">
            {value}
          </h2>

          {change && (
            <p className="text-sm text-zinc-500 mt-2">
              {change}
            </p>
          )}
        </div>

        {icon && (
          <div>
            {icon}
          </div>
        )}
      </div>
    </LCard>
  );
}
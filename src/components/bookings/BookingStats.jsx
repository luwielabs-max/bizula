import { formatCurrencyValue, formatCompactNumber } from "../../utils/formatters";

const stats = [
  {
    title: "Today's Bookings",
    value: 12,
    isCurrency: false,
  },
  {
    title: "Upcoming",
    value: 43,
    isCurrency: false,
  },
  {
    title: "Completed",
    value: 281,
    isCurrency: false,
  },
  {
    title: "Revenue",
    value: 420000,
    isCurrency: true,
  },
];

export default function BookingStats() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="flex h-full flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm sm:p-6"
        >
          <p className="text-sm text-zinc-500">{stat.title}</p>

          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
            {stat.isCurrency ? formatCurrencyValue(stat.value) : formatCompactNumber(stat.value)}
          </h2>
        </div>
      ))}
    </div>
  );
}
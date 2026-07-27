

import { formatCurrencyValue, formatCompactNumber } from "../../utils/formatters";

export default function ServiceStats({ services }) {
  const totalServices = services.length;

  const activeServices = services.filter(
    (service) => service.status === "Active"
  ).length;

  const inactiveServices = services.filter(
    (service) => service.status === "Inactive"
  ).length;

  const totalValue = services.reduce((sum, service) => {
    return (
      sum +
      Number(
        service.price
          .replace("₦", "")
          .replace(/,/g, "")
      )
    );
  }, 0);

  const stats = [
    {
      title: "Total Services",
      value: totalServices,
    },
    {
      title: "Active",
      value: activeServices,
    },
    {
      title: "Inactive",
      value: inactiveServices,
    },
    {
      title: "Total Value",
      value: totalValue,
      isCurrency: true,
    },
  ];

  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="flex h-full flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm sm:p-6"
        >
          <p className="text-sm text-zinc-500">{stat.title}</p>

          <h2 className="mt-3 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
            {stat.isCurrency ? formatCurrencyValue(stat.value) : formatCompactNumber(stat.value)}
          </h2>
        </div>
      ))}
    </div>
  );
}
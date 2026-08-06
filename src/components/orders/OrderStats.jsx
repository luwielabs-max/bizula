import { formatCompactNumber } from "../../utils/formatters";

export default function OrderStats({ orders }) {
  const totalOrders = orders.length;

  const pendingOrders = orders.filter((order) => order.status === "Pending").length;
  const confirmedOrders = orders.filter((order) => order.status === "Confirmed").length;
  const completedOrders = orders.filter((order) => order.status === "Completed").length;

  const stats = [
    {
      title: "Orders",
      value: totalOrders,
    },
    {
      title: "Pending",
      value: pendingOrders,
    },
    {
      title: "Confirmed",
      value: confirmedOrders,
    },
    {
      title: "Completed",
      value: completedOrders,
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

          <h2 className="mt-3 overflow-hidden text-ellipsis whitespace-nowrap text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl" title={String(stat.value)}>
            {formatCompactNumber(stat.value)}
          </h2>
        </div>
      ))}
    </div>
  );
}
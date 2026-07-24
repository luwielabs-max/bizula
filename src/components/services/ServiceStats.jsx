

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
      value: `₦${totalValue.toLocaleString()}`,
    },
  ];

  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="rounded-2xl border border-zinc-200 bg-white p-6"
        >
          <p className="text-sm text-zinc-500">
            {stat.title}
          </p>

          <h2 className="mt-3 text-3xl font-bold text-zinc-900">
            {stat.value}
          </h2>
        </div>
      ))}
    </div>
  );
}
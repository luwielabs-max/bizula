const stats = [
  {
    title: "Today's Bookings",
    value: "12",
  },
  {
    title: "Upcoming",
    value: "43",
  },
  {
    title: "Completed",
    value: "281",
  },
  {
    title: "Revenue",
    value: "₦420,000",
  },
];

export default function BookingStats() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">

      {stats.map((stat) => (
        <div
          key={stat.title}
          className="rounded-3xl border border-zinc-200 bg-white p-6"
        >
          <p className="text-sm text-zinc-500">
            {stat.title}
          </p>

          <h2 className="mt-3 text-3xl font-semibold">
            {stat.value}
          </h2>

        </div>
      ))}

    </div>
  );
}
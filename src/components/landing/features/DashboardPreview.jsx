import { motion } from "framer-motion";

const cards = [
  {
    title: "Revenue",
    value: "₦2.4M",
    change: "+18%",
  },
  {
    title: "Orders",
    value: "128",
    change: "+12",
  },
  {
    title: "Customers",
    value: "472",
    change: "+32",
  },
  {
    title: "Bookings",
    value: "74",
    change: "+8",
  },
];

const activity = [
  "Payment received",
  "Booking confirmed",
  "Order completed",
];

export default function DashboardPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="rounded-[36px] border border-zinc-200 bg-white p-8 shadow-sm"
    >
      <div className="grid grid-cols-2 gap-4">
        {cards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.08,
            }}
            className="rounded-2xl border border-zinc-200 p-5"
          >
            <p className="text-sm text-zinc-500">
              {card.title}
            </p>

            <h3 className="mt-3 text-3xl font-semibold">
              {card.value}
            </h3>

            <p className="mt-2 text-sm text-green-600">
              {card.change}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 rounded-2xl border border-zinc-200 p-6">

        <p className="font-semibold">
          Recent Activity
        </p>

        <div className="mt-5 space-y-4">

          {activity.map((item) => (
            <div
              key={item}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="h-2.5 w-2.5 rounded-full bg-black" />

                <span className="text-sm text-zinc-700">
                  {item}
                </span>
              </div>

              <span className="text-xs text-zinc-400">
                Just now
              </span>
            </div>
          ))}

        </div>
      </div>
    </motion.div>
  );
}
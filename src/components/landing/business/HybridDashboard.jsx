import { motion } from "framer-motion";

export default function HybridDashboard() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="rounded-[32px] border border-zinc-200 bg-zinc-50 p-8"
    >
      <div className="grid grid-cols-2 gap-4">

        {[
          ["Revenue", "₦2.1M"],
          ["Products", "824"],
          ["Services", "138"],
          ["Bookings", "67"],
        ].map(([title, value]) => (
          <div
            key={title}
            className="rounded-2xl bg-white p-6"
          >
            <p className="text-sm text-zinc-500">
              {title}
            </p>

            <h3 className="mt-3 text-3xl font-semibold">
              {value}
            </h3>
          </div>
        ))}

      </div>

      <div className="rounded-2xl bg-white mt-6 p-6">

        <p className="font-medium">
          Business Overview
        </p>

        <div className="mt-5 h-3 rounded-full bg-zinc-200">

          <div className="h-3 w-3/4 rounded-full bg-black" />

        </div>

        <p className="mt-4 text-sm text-zinc-500">
          Your business grew by 27% this month.
        </p>

      </div>
    </motion.div>
  );
}
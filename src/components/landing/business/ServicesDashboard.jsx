import { motion } from "framer-motion";

export default function ServicesDashboard() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="rounded-[32px] border border-zinc-200 bg-zinc-50 p-8"
    >
      <div className="rounded-2xl bg-white p-6">

        <h3 className="font-semibold text-lg">
          Today's Bookings
        </h3>

        <div className="mt-6 space-y-4">

          {[
            ["09:00", "Haircut"],
            ["11:30", "Consultation"],
            ["2:00", "Therapy"],
            ["5:00", "Training"],
          ].map(([time, title]) => (
            <div
              key={time}
              className="flex justify-between border-b border-zinc-100 pb-3"
            >
              <span className="font-medium">{time}</span>

              <span className="text-zinc-500">
                {title}
              </span>
            </div>
          ))}

        </div>

      </div>

      <div className="grid grid-cols-3 gap-4 mt-6">

        <div className="rounded-2xl bg-white p-5">
          <p className="text-sm text-zinc-500">Clients</p>
          <h3 className="text-2xl font-semibold mt-2">192</h3>
        </div>

        <div className="rounded-2xl bg-white p-5">
          <p className="text-sm text-zinc-500">Revenue</p>
          <h3 className="text-2xl font-semibold mt-2">₦860K</h3>
        </div>

        <div className="rounded-2xl bg-white p-5">
          <p className="text-sm text-zinc-500">Bookings</p>
          <h3 className="text-2xl font-semibold mt-2">74</h3>
        </div>

      </div>
    </motion.div>
  );
}
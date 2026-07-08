import { motion } from "framer-motion";

export default function BusinessEverywherePreview() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .6 }}
      className="space-y-6"
    >

      {/* Website */}

      <div className="rounded-[30px] border border-zinc-200 bg-white p-8 shadow-sm">

        <p className="text-sm uppercase tracking-widest text-zinc-500">
          Website
        </p>

        <div className="mt-8 rounded-2xl border border-zinc-200 p-6">

          <div className="space-y-3">

            <div className="h-3 rounded-full bg-zinc-200 w-2/3"></div>

            <div className="h-3 rounded-full bg-zinc-100 w-full"></div>

            <div className="h-3 rounded-full bg-zinc-100 w-4/5"></div>

          </div>

          <button className="mt-8 rounded-xl bg-black px-6 py-3 text-white font-medium">
            Book Now
          </button>

        </div>

      </div>

      {/* Commitment Fee */}

      <div className="rounded-[30px] border border-zinc-200 bg-white p-8 shadow-sm">

        <p className="font-semibold">
          Appointment
        </p>

        <div className="mt-6 flex justify-between">

          <span>Service</span>

          <span>₦15,000</span>

        </div>

        <div className="mt-4 flex justify-between">

          <span>Commitment Fee</span>

          <span className="font-semibold">
            ₦2,000
          </span>

        </div>

        <div className="mt-4 flex justify-between">

          <span>Balance</span>

          <span>₦13,000</span>

        </div>

        <div className="mt-8 rounded-xl bg-zinc-100 py-3 text-center font-medium">

          Booking Confirmed ✓

        </div>

      </div>

      {/* Product Deposit */}

      <div className="rounded-[30px] border border-zinc-200 bg-white p-8 shadow-sm">

        <p className="font-semibold">
          Product Order
        </p>

        <div className="mt-6 flex justify-between">

          <span>Custom Cake</span>

          <span>₦120,000</span>

        </div>

        <div className="mt-4 flex justify-between">

          <span>Deposit Paid</span>

          <span className="font-semibold">
            ₦30,000
          </span>

        </div>

        <div className="mt-4 flex justify-between">

          <span>Remaining</span>

          <span>₦90,000</span>

        </div>

        <div className="mt-8 rounded-xl bg-zinc-100 py-3 text-center font-medium">

          Production Started

        </div>

      </div>

    </motion.div>
  );
}
import { motion } from "framer-motion";
import { Check, X, ArrowRight } from "lucide-react";

const traditional = [
  "Monthly subscription",
  "Setup fees",
  "Upgrade costs",
  "Annual renewals",
];

const bizula = [
  "Free account",
  "Unlimited products",
  "Unlimited bookings",
  "Unlimited customers",
];

const flow = [
  "Create Account",
  "Share Link",
  "Customer Pays",
  "You Get Paid",
];

export default function PricingPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .6 }}
      className="space-y-8"
    >
      {/* Comparison */}

      <div className="grid gap-5 md:grid-cols-2">

        <div className="rounded-[28px] border border-zinc-200 bg-white p-7">

          <h3 className="text-xl font-semibold">
            Traditional Software
          </h3>

          <div className="mt-8 space-y-5">

            {traditional.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3"
              >
                <X
                  size={18}
                  className="text-red-500"
                />

                <span className="text-zinc-600">
                  {item}
                </span>

              </div>
            ))}

          </div>

        </div>

        <div className="rounded-[28px] bg-black p-7 text-white">

          <h3 className="text-xl font-semibold">
            Bizula
          </h3>

          <div className="mt-8 space-y-5">

            {bizula.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3"
              >
                <Check
                  size={18}
                  className="text-green-400"
                />

                <span>{item}</span>

              </div>
            ))}

          </div>

          <div className="mt-8 rounded-2xl bg-white/10 p-5">

            <p className="text-sm leading-6 text-zinc-300">
              We only earn through small transaction
              charges when your customers place an
              order, pay a commitment fee or complete
              a booking.
            </p>

          </div>

        </div>

      </div>

      {/* Timeline */}

      <div className="rounded-[28px] border border-zinc-200 bg-white p-8">

        <h3 className="text-xl font-semibold">
          How Bizula Works
        </h3>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-5">

          {flow.map((step, index) => (
            <div
              key={step}
              className="flex items-center gap-4"
            >

              <div className="rounded-full border border-zinc-200 px-5 py-3 text-sm font-medium">

                {step}

              </div>

              {index !== flow.length - 1 && (
                <ArrowRight
                  size={18}
                  className="text-zinc-400"
                />
              )}

            </div>
          ))}

        </div>

      </div>

    </motion.div>
  );
}
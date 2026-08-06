
import { motion } from "framer-motion";
import {
  Boxes,
  CalendarDays,
  CreditCard,
  Users,
  BarChart3,
  Sparkles,
} from "lucide-react";

const items = [
  {
    icon: Boxes,
    title: "Inventory",
    description: "Know what you have",
  },
  {
    icon: CalendarDays,
    title: "Bookings",
    description: "Keep your schedule moving",
  },
  {
    icon: CreditCard,
    title: "Payments",
    description: "Track every payment",
  },
  {
    icon: Users,
    title: "Customers",
    description: "Build stronger relationships",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description: "Understand your growth",
  },
];

export default function SocialProof() {
  return (
    <section className="relative overflow-hidden bg-zinc-50 py-24 sm:py-32">
      {/* Soft background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-200/30 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-sm font-semibold text-violet-700">
            <Sparkles size={15} />
            Everything works together
          </div>

          <h2 className="mt-7 text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl">
            One place to run
            <span className="block text-violet-600">
              your entire business.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-zinc-500 sm:text-lg sm:leading-8">
            Sell products, manage bookings, accept payments, and
            understand your customers without jumping between
            different apps or messy spreadsheets.
          </p>
        </motion.div>

        {/* Feature cards */}
        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-20 lg:grid-cols-5">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.07,
                }}
                whileHover={{
                  y: -7,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[2rem]
                  border
                  border-zinc-200
                  bg-white
                  p-6
                  shadow-sm
                  transition-all
                  duration-300
                  hover:border-violet-200
                  hover:shadow-xl
                  hover:shadow-violet-100/70
                  sm:p-7
                "
              >
                {/* Hover glow */}
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-violet-200/0 blur-2xl transition-all duration-500 group-hover:bg-violet-200/50" />

                {/* Icon */}
                <div className="relative flex h-13 w-13 items-center justify-center rounded-2xl bg-violet-50 text-violet-700 transition-transform duration-300 group-hover:scale-110">
                  <Icon size={25} strokeWidth={2.2} />
                </div>

                {/* Text */}
                <h3 className="relative mt-7 text-lg font-semibold text-zinc-900">
                  {item.title}
                </h3>

                <p className="relative mt-2 text-sm leading-6 text-zinc-500">
                  {item.description}
                </p>

                {/* Small bottom indicator */}
                <div className="relative mt-7 h-1 w-10 rounded-full bg-violet-100 transition-all duration-300 group-hover:w-full group-hover:bg-violet-500" />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom reassurance */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
          className="mx-auto mt-10 max-w-2xl text-center text-sm leading-6 text-zinc-500"
        >
          Start with the tools your business needs today. Add more
          as you grow.
        </motion.p>
      </div>
    </section>
  );
}
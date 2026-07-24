import { motion } from "framer-motion";
import {
  Boxes,
  CalendarDays,
  CreditCard,
  Users,
  BarChart3,
} from "lucide-react";

const items = [
  {
    icon: Boxes,
    title: "Inventory",
  },
  {
    icon: CalendarDays,
    title: "Bookings",
  },
  {
    icon: CreditCard,
    title: "Payments",
  },
  {
    icon: Users,
    title: "Customers",
  },
  {
    icon: BarChart3,
    title: "Analytics",
  },
];

export default function SocialProof() {
  return (
    <section className="bg-white py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-zinc-500">
            Everything in one place
          </p>

          <h2 className="mt-6 text-4xl lg:text-6xl font-semibold tracking-tight text-zinc-900">
            Built for modern commerce.
          </h2>

          <p className="mt-8 text-lg leading-8 text-zinc-500">
            Whether you sell products, offer services,
            or run both together, Bizula keeps your
            business organized from one platform.
          </p>
        </motion.div>

        <div className="mt-20 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">

          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                }}
                className="
                  rounded-3xl
                  border
                  border-zinc-200
                  p-8
                  text-center
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-zinc-300
                "
              >
                <Icon
                  size={28}
                  className="mx-auto text-zinc-900"
                />

                <p className="mt-5 font-medium text-zinc-800">
                  {item.title}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
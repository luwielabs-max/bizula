import { motion } from "framer-motion";

const item = {
  hidden: { opacity: 0, y: 20 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.4,
    },
  }),
};

export default function RetailDashboard() {
  return (
    <div className="rounded-[32px] border border-zinc-200 bg-zinc-50 p-8">

      <div className="grid grid-cols-2 gap-4">

        {[
          ["Revenue", "₦1.2M", "+18%"],
          ["Orders", "128", "+12"],
          ["Customers", "472", "+32"],
          ["Inventory", "1,264", "34 Low"],
        ].map(([title, value, sub], i) => (
          <motion.div
            key={title}
            custom={i}
            variants={item}
            initial="hidden"
            animate="show"
            className="rounded-2xl bg-white p-6"
          >
            <p className="text-sm text-zinc-500">{title}</p>
            <h3 className="mt-3 text-3xl font-semibold">{value}</h3>
            <p className="mt-2 text-sm text-green-600">{sub}</p>
          </motion.div>
        ))}

      </div>

      <motion.div
        custom={5}
        variants={item}
        initial="hidden"
        animate="show"
        className="mt-6 rounded-2xl bg-white p-6"
      >
        <p className="font-medium">Recent Orders</p>

        <div className="mt-4 space-y-3">

          {[
            ["Nike Shoes", "Paid"],
            ["White Shirt", "Pending"],
            ["Leather Bag", "Paid"],
          ].map(([name, status]) => (
            <div
              key={name}
              className="flex justify-between text-sm"
            >
              <span>{name}</span>

              <span
                className={
                  status === "Paid"
                    ? "text-green-600"
                    : "text-orange-500"
                }
              >
                {status}
              </span>
            </div>
          ))}

        </div>
      </motion.div>

    </div>
  );
}
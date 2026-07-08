import { motion } from "framer-motion";

import DashboardPreview from "../features/DashboardPreview";

export default function FeatureShowcase() {
  return (
    <section className="bg-white py-36">

      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2 lg:px-10">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
        >

          <p className="text-sm uppercase tracking-[0.35em] text-zinc-500">
            Run everything
          </p>

          <h2 className="mt-6 text-5xl font-semibold tracking-tight text-zinc-950 lg:text-7xl">

            Run your business.

            <br />

            Not your spreadsheets.

          </h2>

          <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-500">

            Manage products, services,
            bookings, customers,
            payments and analytics
            from one beautiful workspace.

          </p>

          <div className="mt-12 space-y-5">

            {[
              "Products",
              "Services",
              "Bookings",
              "Customers",
              "Payments",
              "Analytics",
            ].map((item) => (

              <div
                key={item}
                className="flex items-center gap-4"
              >

                <div className="h-2.5 w-2.5 rounded-full bg-black" />

                <span className="text-lg text-zinc-700">
                  {item}
                </span>

              </div>

            ))}

          </div>

        </motion.div>

        {/* RIGHT */}

        <DashboardPreview />

      </div>

    </section>
  );
}
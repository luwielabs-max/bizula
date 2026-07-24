import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";

import { businessTypes } from "../data/businessTypes";
import RetailDashboard from "../business/RetailDashboard";
import ServicesDashboard from "../business/ServicesDashboard";
import HybridDashboard from "../business/HybridDashboard";

export default function BusinessTypes() {
  const [active, setActive] = useState("retail");

  const current = businessTypes.find((item) => item.id === active);

  return (
    <section className="bg-white py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-zinc-500">
            Built for every business
          </p>

          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-zinc-950 lg:text-6xl">
            One platform.
            <br />
            Three ways to grow.
          </h2>

          <p className="mt-8 text-lg leading-8 text-zinc-500">
            Whether you sell products, offer services, or both,
            Bizula adapts to the way you work.
          </p>
        </motion.div>

        {/* Tabs */}

        <div className="mt-16 flex flex-wrap justify-center gap-3">

          {businessTypes.map((item) => (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 ${
                active === item.id
                  ? "bg-black text-white"
                  : "border border-zinc-200 bg-white text-zinc-600 hover:border-zinc-400"
              }`}
            >
              {item.title}
            </button>
          ))}

        </div>

        {/* Card */}

        <div className="mt-20">

          <AnimatePresence mode="wait">

            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -25 }}
              transition={{ duration: .35 }}
              className="
                overflow-hidden
                rounded-[36px]
                border
                border-zinc-200
                bg-white
                shadow-sm
              "
            >

              <div className="grid items-center gap-12 lg:grid-cols-2">

                {/* Left */}

                <div className="p-10 lg:p-16">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-zinc-100">

                    <current.icon size={30} />

                  </div>

                  <h3 className="mt-8 text-4xl font-semibold tracking-tight text-zinc-950">
                    {current.title}
                  </h3>

                  <p className="mt-6 text-lg leading-8 text-zinc-500">
                    {current.description}
                  </p>

                  <div className="mt-10 space-y-5">

                    {current.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-3"
                      >
                        <Check
                          size={18}
                          className="text-violet-600"
                        />

                        <span className="text-zinc-700">
                          {feature}
                        </span>
                      </div>
                    ))}

                  </div>

                </div>

                {/* Right */}

                <AnimatePresence mode="wait">

  <motion.div
    key={active}
    initial={{ opacity: 0, y: 25 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -25 }}
    transition={{ duration: .35 }}
  >
    {active === "retail" && <RetailDashboard />}

    {active === "services" && <ServicesDashboard />}

    {active === "hybrid" && <HybridDashboard />}
  </motion.div>

</AnimatePresence>
              </div>

            </motion.div>

          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
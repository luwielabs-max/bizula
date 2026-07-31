
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

import { businessTypes } from "../data/businessTypes";
import RetailDashboard from "../business/RetailDashboard";
import ServicesDashboard from "../business/ServicesDashboard";
import HybridDashboard from "../business/HybridDashboard";

export default function BusinessTypes() {
  const [active, setActive] = useState("retail");

  const current = businessTypes.find((item) => item.id === active);

  const CurrentIcon = current.icon;

  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-32">
      {/* Background decoration */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-[-12rem] top-1/3 h-96 w-96 rounded-full bg-violet-100/50 blur-[130px]" />

        <div className="absolute bottom-0 left-[-12rem] h-96 w-96 rounded-full bg-violet-50 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-sm font-semibold text-violet-700">
            <Sparkles size={15} />

            Built around how you work
          </div>

          <h2 className="mt-7 text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl">
            Your business is unique.
            <span className="block text-violet-600">
              Your tools should fit.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-zinc-500 sm:text-lg sm:leading-8">
            Whether you sell products, offer services, or do both,
            Bizula gives you a workspace designed around the way
            your business actually operates.
          </p>
        </motion.div>

        {/* Tabs */}

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="
            mx-auto
            mt-12
            flex
            w-full
            max-w-xl
            flex-col
            gap-2
            rounded-[1.5rem]
            border
            border-zinc-200
            bg-zinc-50
            p-2
            sm:mt-16
            sm:flex-row
          "
        >
          {businessTypes.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActive(item.id)}
                className={`
                  relative
                  flex
                  flex-1
                  items-center
                  justify-center
                  gap-2
                  rounded-2xl
                  px-5
                  py-3
                  text-sm
                  font-semibold
                  transition-colors
                  duration-300
                  ${
                    isActive
                      ? "text-violet-700"
                      : "text-zinc-500 hover:text-zinc-900"
                  }
                `}
              >
                {isActive && (
                  <motion.span
                    layoutId="business-type-tab"
                    className="
                      absolute
                      inset-0
                      rounded-2xl
                      border
                      border-violet-100
                      bg-white
                      shadow-sm
                    "
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                )}

                <Icon
                  size={17}
                  className="relative z-10"
                />

                <span className="relative z-10">
                  {item.title}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Business preview */}

        <div className="mt-12 sm:mt-16 lg:mt-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{
                opacity: 0,
                y: 28,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
              }}
              className="
                overflow-hidden
                rounded-[2rem]
                border
                border-zinc-200
                bg-white
                shadow-[0_30px_100px_-55px_rgba(76,29,149,0.35)]
                sm:rounded-[2.5rem]
              "
            >
              <div className="grid items-stretch lg:grid-cols-[0.9fr_1.1fr]">
                {/* Information */}

                <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14 xl:p-16">
                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      bg-violet-50
                      text-violet-700
                    "
                  >
                    <CurrentIcon
                      size={28}
                      strokeWidth={2.2}
                    />
                  </div>

                  <h3 className="mt-7 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
                    {current.title}
                  </h3>

                  <p className="mt-5 max-w-lg text-base leading-7 text-zinc-500 sm:text-lg sm:leading-8">
                    {current.description}
                  </p>

                  <div className="mt-8 space-y-4 sm:mt-10">
                    {current.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-start gap-3"
                      >
                        <span
                          className="
                            mt-0.5
                            flex
                            h-6
                            w-6
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            bg-violet-100
                            text-violet-700
                          "
                        >
                          <Check
                            size={14}
                            strokeWidth={3}
                          />
                        </span>

                        <span className="leading-6 text-zinc-700">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Dashboard preview */}

                <div
                  className="
                    relative
                    min-h-[430px]
                    overflow-hidden
                    border-t
                    border-zinc-200
                    bg-zinc-50
                    p-4
                    sm:min-h-[500px]
                    sm:p-7
                    lg:border-l
                    lg:border-t-0
                    lg:p-8
                  "
                >
                  {/* Preview glow */}

                  <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-violet-200/30 blur-[100px]" />

                  <motion.div
                    key={`${active}-dashboard`}
                    initial={{
                      opacity: 0,
                      scale: 0.96,
                      y: 20,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.08,
                      duration: 0.45,
                    }}
                    className="
                      relative
                      h-full
                      overflow-hidden
                      rounded-[1.5rem]
                      border
                      border-zinc-200
                      bg-white
                      shadow-xl
                      shadow-zinc-200/50
                    "
                  >
                    {active === "retail" && (
                      <RetailDashboard />
                    )}

                    {active === "services" && (
                      <ServicesDashboard />
                    )}

                    {active === "hybrid" && (
                      <HybridDashboard />
                    )}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Reassurance */}

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-9 max-w-2xl text-center text-sm leading-6 text-zinc-500"
        >
          Start with the business type that matches you today.
          Bizula grows with you when your business evolves.
        </motion.p>
      </div>
    </section>
  );
}


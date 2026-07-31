
import { motion } from "framer-motion";
import {
  BarChart3,
  Boxes,
  CalendarDays,
  CreditCard,
  Users,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

import DashboardPreview from "../features/DashboardPreview";

const features = [
  {
    icon: Boxes,
    title: "Stay on top of inventory",
    description:
      "Know what is selling, what is running low, and what needs attention.",
  },
  {
    icon: CalendarDays,
    title: "Keep bookings organized",
    description:
      "Manage appointments and service requests without the back-and-forth.",
  },
  {
    icon: Users,
    title: "Understand your customers",
    description:
      "Keep customer information and activity in one connected workspace.",
  },
  {
    icon: CreditCard,
    title: "Track every payment",
    description:
      "See what has been paid, what is pending, and how your business is performing.",
  },
];

export default function FeatureShowcase() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 py-24 sm:py-32">
      {/* Background atmosphere */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-10rem] top-1/4 h-[30rem] w-[30rem] rounded-full bg-violet-600/20 blur-[150px]" />

        <div className="absolute bottom-[-15rem] right-[-10rem] h-[35rem] w-[35rem] rounded-full bg-fuchsia-500/10 blur-[170px]" />

        <div
          className="
            absolute
            inset-0
            opacity-[0.05]
            [background-image:linear-gradient(rgba(255,255,255,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.6)_1px,transparent_1px)]
            [background-size:72px_72px]
          "
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-sm font-semibold text-violet-200">
              <Sparkles size={15} />

              Your complete business workspace
            </div>

            <h2 className="mt-7 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              See your whole business.
              <span className="block text-violet-400">
                Make better decisions.
              </span>
            </h2>

            <p className="mt-7 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
              Bizula brings your daily operations into one connected
              workspace, so you spend less time searching for
              information and more time growing your business.
            </p>

            {/* Feature list */}

            <div className="mt-10 space-y-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.08,
                      duration: 0.4,
                    }}
                    className="
                      group
                      flex
                      gap-4
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/[0.04]
                      p-4
                      transition-all
                      duration-300
                      hover:border-violet-400/25
                      hover:bg-white/[0.07]
                    "
                  >
                    <div
                      className="
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        bg-violet-500/15
                        text-violet-300
                        transition-transform
                        duration-300
                        group-hover:scale-105
                      "
                    >
                      <Icon size={21} />
                    </div>

                    <div>
                      <h3 className="font-semibold text-white">
                        {feature.title}
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-zinc-400">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Reassurance */}

            <div className="mt-8 flex items-center gap-3 text-sm font-medium text-zinc-400">
              <CheckCircle2
                size={19}
                className="shrink-0 text-violet-400"
              />

              Everything stays connected as your business grows.
            </div>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{
              opacity: 0,
              x: 35,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              y: 0,
            }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
            }}
            className="relative"
          >
            {/* Outer glow */}

            <div className="absolute -inset-8 rounded-[3rem] bg-violet-500/20 blur-[70px]" />

            {/* Preview shell */}

            <div
              className="
                relative
                overflow-hidden
                rounded-[2rem]
                border
                border-white/10
                bg-white/[0.06]
                p-2
                shadow-[0_35px_120px_-45px_rgba(139,92,246,0.65)]
                backdrop-blur-xl
                sm:rounded-[2.5rem]
                sm:p-3
              "
            >
              {/* Browser top bar */}

              <div className="flex items-center gap-2 px-4 py-3 sm:px-5">
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />

                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />

                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />

                <div className="ml-3 h-6 flex-1 rounded-full bg-white/[0.07]" />
              </div>

              <div
                className="
                  overflow-hidden
                  rounded-[1.4rem]
                  border
                  border-white/10
                  bg-white
                  shadow-2xl
                "
              >
                <DashboardPreview />
              </div>
            </div>

            {/* Floating analytics card */}

            <motion.div
              animate={{
                y: [0, -9, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                -bottom-7
                -left-3
                hidden
                rounded-2xl
                border
                border-white/10
                bg-zinc-900/90
                p-4
                shadow-2xl
                backdrop-blur-xl
                sm:block
                lg:-left-8
              "
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300">
                  <BarChart3 size={20} />
                </div>

                <div>
                  <p className="text-xs font-medium text-zinc-400">
                    Business growth
                  </p>

                  <p className="mt-1 text-lg font-bold text-white">
                    +24.8%
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


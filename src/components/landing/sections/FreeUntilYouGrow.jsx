
import { motion } from "framer-motion";
import {
  Check,
  CircleDollarSign,
  Sprout,
  Handshake,
  Sparkles,
} from "lucide-react";

import PricingPreview from "../features/PricingPreview";

const principles = [
  {
    icon: CircleDollarSign,
    title: "Start free",
    description:
      "No monthly subscription, no setup fee, and no upfront cost just to begin using Bizula.",
  },
  {
    icon: Sprout,
    title: "Grow naturally",
    description:
      "Accept orders, bookings, commitment fees, and deposits as your business grows.",
  },
  {
    icon: Handshake,
    title: "We grow with you",
    description:
      "Bizula earns through small transaction charges only when business actually happens.",
  },
];

export default function FreeUntilYouGrow() {
  return (
    <section className="relative overflow-hidden bg-zinc-50 py-24 sm:py-32">
      {/* Background */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-12rem] top-[-8rem] h-[32rem] w-[32rem] rounded-full bg-violet-100/70 blur-[140px]" />

        <div className="absolute bottom-[-14rem] right-[-10rem] h-[34rem] w-[34rem] rounded-full bg-fuchsia-100/50 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* LEFT */}

          <motion.div
            initial={{
              opacity: 0,
              x: -35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            {/* Badge */}

            <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white px-4 py-2 text-sm font-semibold text-violet-700 shadow-sm">
              <Sparkles size={15} />

              Free until you grow
            </div>

            {/* Heading */}

            <h2 className="mt-7 text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl">
              Software should help
              <span className="block text-violet-600">
                you make money.
              </span>
              <span className="block text-zinc-400">
                Not cost you money.
              </span>
            </h2>

            {/* Description */}

            <p className="mt-7 max-w-xl text-base leading-7 text-zinc-500 sm:text-lg sm:leading-8">
              Most business software starts charging before you have
              earned your first sale. Bizula lets you begin for free
              and only earns through small transaction charges when
              your business actually earns.
            </p>

            {/* Principles */}

            <div className="mt-10 space-y-4 sm:mt-12">
              {principles.map((principle, index) => {
                const Icon = principle.icon;

                return (
                  <motion.div
                    key={principle.title}
                    initial={{
                      opacity: 0,
                      y: 18,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: index * 0.08,
                      duration: 0.45,
                    }}
                    className="
                      group
                      rounded-[1.5rem]
                      border
                      border-zinc-200
                      bg-white/90
                      p-5
                      shadow-sm
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-violet-200
                      hover:shadow-lg
                      hover:shadow-violet-100/70
                    "
                  >
                    <div className="flex gap-4">
                      {/* Icon */}

                      <div
                        className="
                          flex
                          h-11
                          w-11
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          bg-violet-50
                          text-violet-700
                          transition-transform
                          duration-300
                          group-hover:scale-105
                        "
                      >
                        <Icon
                          size={21}
                          strokeWidth={2.2}
                        />
                      </div>

                      {/* Content */}

                      <div>
                        <h3 className="font-semibold capitalize text-zinc-900">
                          {principle.title}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-zinc-500">
                          {principle.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Promise */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.2,
                duration: 0.5,
              }}
              className="
                mt-8
                overflow-hidden
                rounded-[2rem]
                border
                border-violet-200
                bg-violet-600
                p-7
                shadow-xl
                shadow-violet-200/70
                sm:p-9
              "
            >
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-white">
                  <Check
                    size={22}
                    strokeWidth={3}
                  />
                </span>

                <div>
                  <p className="text-2xl font-semibold leading-tight text-white sm:text-3xl">
                    When you grow,
                    <br />
                    we grow with you.
                  </p>

                  <p className="mt-3 max-w-md text-sm leading-6 text-violet-100">
                    Our success is tied to the success of the
                    businesses that use Bizula.
                  </p>
                </div>
              </div>
            </motion.div>
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
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.8,
              delay: 0.1,
            }}
            className="relative"
          >
            {/* Glow */}

            <div className="absolute -inset-8 rounded-[3rem] bg-violet-300/25 blur-[80px]" />

            {/* Preview shell */}

            <div
              className="
                relative
                overflow-hidden
                rounded-[2rem]
                border
                border-white
                bg-white/80
                p-2
                shadow-[0_35px_100px_-50px_rgba(109,40,217,0.35)]
                backdrop-blur-xl
                sm:rounded-[2.5rem]
                sm:p-3
              "
            >
              {/* Preview label */}

              <div className="flex items-center justify-between px-4 py-4 sm:px-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-600">
                    Simple pricing
                  </p>

                  <p className="mt-1 text-sm font-medium text-zinc-700">
                    Pay only when business happens
                  </p>
                </div>

                <span className="rounded-full bg-violet-50 px-3 py-1.5 text-xs font-semibold text-violet-700">
                  No subscription
                </span>
              </div>

              {/* Existing pricing component */}

              <div
                className="
                  overflow-hidden
                  rounded-[1.5rem]
                  border
                  border-zinc-100
                  bg-white
                  shadow-xl
                  shadow-violet-100/40
                "
              >
                <PricingPreview />
              </div>
            </div>

            {/* Floating free card */}

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
                -bottom-6
                -right-2
                hidden
                rounded-2xl
                border
                border-violet-100
                bg-white/95
                p-4
                shadow-xl
                shadow-violet-200/50
                backdrop-blur-xl
                sm:block
                lg:-right-7
              "
            >
              <p className="text-xs font-medium text-zinc-500">
                Monthly subscription
              </p>

              <p className="mt-1 text-2xl font-bold text-violet-700">
                ₦0
              </p>

              <p className="mt-1 text-xs text-zinc-400">
                Start without upfront costs
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


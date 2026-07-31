
import { motion } from "framer-motion";
import {
  Check,
  Link2,
  ShieldCheck,
  WalletCards,
  Sparkles,
} from "lucide-react";

import BusinessEverywherePreview from "../features/BusinessEverywherePreview";

const benefits = [
  {
    icon: Link2,
    title: "Share one link everywhere",
    description:
      "Put your Bizula link in your Instagram bio, TikTok profile, WhatsApp status, website, or anywhere your customers already find you.",
  },
  {
    icon: ShieldCheck,
    title: "Reduce no-shows",
    description:
      "Collect a small commitment fee before confirming a booking, so customers have a reason to show up.",
  },
  {
    icon: WalletCards,
    title: "Accept deposits with confidence",
    description:
      "Let customers make part-payments before production, preparation, or delivery begins.",
  },
];

export default function BusinessEverywhere() {
  return (
    <section className="relative overflow-hidden bg-violet-50/60 py-24 sm:py-32">
      {/* Background decoration */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-12rem] top-[-10rem] h-[30rem] w-[30rem] rounded-full bg-violet-200/50 blur-[130px]" />

        <div className="absolute bottom-[-14rem] right-[-10rem] h-[32rem] w-[32rem] rounded-full bg-fuchsia-100/60 blur-[150px]" />
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

            <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/80 px-4 py-2 text-sm font-semibold text-violet-700 shadow-sm">
              <Sparkles size={15} />

              Built for social commerce
            </div>

            {/* Heading */}

            <h2 className="mt-7 text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl">
              Your business.
              <span className="block text-violet-600">
                Everywhere your customers are.
              </span>
            </h2>

            {/* Description */}

            <p className="mt-7 max-w-xl text-base leading-7 text-zinc-500 sm:text-lg sm:leading-8">
              Your customers should not need to download another app
              before they can buy, book, or pay. Share your Bizula
              link and let them take action from the platforms they
              already use every day.
            </p>

            {/* Benefits */}

            <div className="mt-10 space-y-4 sm:mt-12">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;

                return (
                  <motion.div
                    key={benefit.title}
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
                      border-violet-100
                      bg-white/85
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

                      {/* Text */}

                      <div>
                        <h3 className="font-semibold text-zinc-900">
                          {benefit.title}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-zinc-500">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Small reassurance */}

            <div className="mt-8 flex items-center gap-3 text-sm font-medium text-zinc-600">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-100 text-violet-700">
                <Check
                  size={14}
                  strokeWidth={3}
                />
              </span>

              One link. Less friction. More completed sales.
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

            <div className="absolute -inset-8 rounded-[3rem] bg-violet-300/30 blur-[80px]" />

            {/* Preview shell */}

            <div
              className="
                relative
                overflow-hidden
                rounded-[2rem]
                border
                border-white/80
                bg-white/70
                p-2
                shadow-[0_35px_100px_-50px_rgba(109,40,217,0.4)]
                backdrop-blur-xl
                sm:rounded-[2.5rem]
                sm:p-3
              "
            >
              {/* Top label */}

              <div className="flex items-center justify-between px-4 py-4 sm:px-5">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-violet-300" />

                  <span className="text-xs font-semibold text-zinc-500">
                    Your customer experience
                  </span>
                </div>

                <span className="rounded-full bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-700">
                  Live
                </span>
              </div>

              {/* Existing preview */}

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
                <BusinessEverywherePreview />
              </div>
            </div>

            {/* Floating link card */}

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
                items-center
                gap-3
                rounded-2xl
                border
                border-violet-100
                bg-white/95
                p-4
                shadow-xl
                shadow-violet-200/50
                backdrop-blur-xl
                sm:flex
                lg:-right-7
              "
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-700">
                <Link2 size={20} />
              </div>

              <div>
                <p className="text-xs font-medium text-zinc-500">
                  Your Bizula link
                </p>

                <p className="mt-1 text-sm font-semibold text-zinc-900">
                  bizula.co/your-business
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

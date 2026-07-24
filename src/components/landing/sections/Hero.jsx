import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";

import { LButton } from "../../../luwie-ui/src";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background */}

      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Ambient Glow */}

        <motion.div
          animate={{
            x: [0, 60, -40, 0],
            y: [0, -50, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-20 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-violet-300/20 blur-[160px]"
        />

        {/* Grid */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.035]
            [background-image:linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)]
            [background-size:72px_72px]
          "
        />
      </div>

      <div className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center lg:px-10">
        {/* Badge */}

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-full border border-zinc-200 bg-white px-5 py-2 text-sm font-medium text-zinc-600 shadow-sm"
        >
          Built for African Commerce
        </motion.div>

        {/* Heading */}

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="
            mt-10
            max-w-5xl
            text-5xl
            font-semibold
            tracking-tight
            text-zinc-950
            sm:text-6xl
            lg:text-8xl
          "
        >
          Run your business.
          <br />
          <span className="text-zinc-400">
            Not your spreadsheets.
          </span>
        </motion.h1>

        {/* Description */}

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="
            mt-8
            max-w-2xl
            text-lg
            leading-8
            text-zinc-500
            lg:text-xl
          "
        >
          Manage inventory, bookings, products, customers and
          payments from one beautifully designed platform built
          for modern African businesses.
          <br className="hidden sm:block" />
          Start free. Pay only when business happens.
        </motion.p>

        {/* Buttons */}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-12 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row"
        >
          <Link to="/register">
            <LButton size="lg">
              Start Free
            </LButton>
          </Link>

          <Link to="/login">
            <LButton variant="secondary" size="lg">
              Sign In
            </LButton>
          </Link>
        </motion.div>

        {/* Trust */}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
          className="mt-8 text-sm text-zinc-500"
        >
          Free forever • No monthly subscription • Built for African commerce
        </motion.p>

        {/* Scroll */}

        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="absolute bottom-10"
        >
          <ArrowDown
            size={20}
            className="text-zinc-400"
          />
        </motion.div>
      </div>
    </section>
  );
}
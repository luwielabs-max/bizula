import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";

import LButton from "../../lib/ui/LButton";

export default function Hero() {
  return (
    <section
      className="
      relative

      min-h-screen

      flex
      flex-col

      items-center
      justify-center

      text-center

      px-6
    "
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
      >
        <span
          className="
          px-4
          py-2

          rounded-full

          bg-zinc-100
          border

          text-sm
        "
        >
          Apple Inspired React Components
        </span>
      </motion.div>

      <motion.h1
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.2,
        }}
        className="
        mt-8

        text-4xl
        sm:text-5xl
        md:text-6xl
        lg:text-7xl
        xl:text-8xl

        font-bold
        tracking-tight
      "
      >
        Design Faster.
        <br />

        <span className="text-zinc-400">
          <TypeAnimation
            sequence={[
              "Ship Better.",
              2000,

              "Scale Beautifully.",
              2000,

              "Build Premium.",
              2000,
            ]}
            speed={40}
            repeat={Infinity}
          />
        </span>
      </motion.h1>

      <motion.p
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 0.4,
        }}
        className="
        mt-8

        max-w-xl
        md:max-w-2xl

        text-zinc-600
        text-lg
      "
      >
        Build SaaS products, dashboards,
        landing pages and startups faster
        with a premium Apple-inspired
        design system.
      </motion.p>

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.6,
        }}
        className="
        mt-10
        flex
        gap-4
      "
      >
         <Link to="/buttons">
    <LButton>
      Get Started
    </LButton>
  </Link>

  <Link to="/buttons">
    <LButton variant="glass">
      View Components
    </LButton>
  </Link>
      </motion.div>
    </section>
  );
}
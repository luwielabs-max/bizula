import { motion } from "framer-motion";

const greetings = {
  1: "Let's get started.",
  2: "Almost there.",
  3: "Everything is ready.",
};

export default function AuthHeader({
  step,
  title,
  subtitle,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: .35,
      }}
      className="mb-10 text-center"
    >

      {/* Logo */}

      <motion.div
        whileHover={{
          scale: 1.05,
        }}
        transition={{
          type: "spring",
          stiffness: 260,
        }}
        className="
          w-16
          h-16
          mx-auto
          mb-6
          rounded-3xl
          bg-black
          text-white
          flex
          items-center
          justify-center
          text-2xl
          font-bold
          shadow-lg
        "
      >
        B
      </motion.div>

      {/* Greeting */}

      {step && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .15 }}
          className="
            text-sm
            text-zinc-500
            mb-2
          "
        >
          {greetings[step]}
        </motion.p>
      )}

      {/* Title */}

      <motion.h1
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: .1,
        }}
        className="
          text-3xl
          font-bold
          tracking-tight
          text-zinc-900
        "
      >
        {title}
      </motion.h1>

      {/* Subtitle */}

      <motion.p
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: .2,
        }}
        className="
          mt-3
          text-zinc-500
          leading-relaxed
        "
      >
        {subtitle}
      </motion.p>

    </motion.div>
  );
}
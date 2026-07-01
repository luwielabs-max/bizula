import { motion } from "framer-motion";

export default function AuthLayout({ children }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-zinc-50 flex items-center justify-center px-6 py-10">

      {/* Floating Background */}

      <motion.div
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -40, 20, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -top-40
          -left-40
          w-[500px]
          h-[500px]
          rounded-full
          bg-blue-200/40
          blur-3xl
        "
      />

      <motion.div
        animate={{
          x: [0, -60, 20, 0],
          y: [0, 30, -30, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -bottom-40
          -right-40
          w-[450px]
          h-[450px]
          rounded-full
          bg-violet-200/40
          blur-3xl
        "
      />

      {/* Content */}

      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: .45,
        }}
        className="
          relative
          z-10
          w-full
          max-w-md
        "
      >

        {/* Brand */}

        <div className="text-center mb-8">

          <h1
            className="
              text-5xl
              font-semibold
              tracking-tight
              text-zinc-900
              select-none
            "
          >
            Bizula
          </h1>

          <p className="mt-3 text-zinc-500">
            Business Operating System
          </p>

        </div>

        {/* Card */}

        <div
          className="
            rounded-[32px]
            bg-white/90
            backdrop-blur-xl
            border
            border-zinc-200
            shadow-2xl
            p-8
          "
        >
          {children}
        </div>

        {/* Footer */}

        <p
          className="
            mt-8
            text-center
            text-sm
            text-zinc-500
          "
        >
          Built by <span className="font-medium text-zinc-700">Luwie Labs</span>
        </p>

      </motion.div>

    </div>
  );
}
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

import AuthLayout from "../../components/auth/AuthLayout";
import { LButton } from "../../lib/luwie-ui";

export default function Success() {
  const navigate = useNavigate();

  return (
    <AuthLayout>
      <div className="flex flex-col items-center text-center">

        {/* Check Circle */}

        <motion.div
          initial={{
            scale: 0.4,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            w-28
            h-28
            rounded-full
            border
            border-zinc-200
            flex
            items-center
            justify-center
            mb-10
          "
        >
          <motion.svg
            width="54"
            height="54"
            viewBox="0 0 24 24"
            fill="none"
          >
            <motion.path
              d="M5 12L10 17L19 8"
              stroke="black"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{
                pathLength: 0,
              }}
              animate={{
                pathLength: 1,
              }}
              transition={{
                delay: .35,
                duration: .65,
                ease: "easeInOut",
              }}
            />
          </motion.svg>
        </motion.div>

        {/* Title */}

        <motion.h1
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: .8,
            duration: .45,
          }}
          className="
            text-3xl
            font-bold
            tracking-tight
          "
        >
          Welcome to Bizula
        </motion.h1>

        {/* Subtitle */}

        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1,
            duration: .45,
          }}
          className="
            mt-4
            text-zinc-500
            leading-relaxed
            max-w-sm
          "
        >
          Your workspace has been created successfully.
          You're ready to start managing your business.
        </motion.p>

        {/* Divider */}

        <motion.div
          initial={{
            opacity: 0,
            scaleX: .8,
          }}
          animate={{
            opacity: 1,
            scaleX: 1,
          }}
          transition={{
            delay: 1.2,
          }}
          className="
            w-24
            h-px
            bg-zinc-200
            my-10
          "
        />

        {/* Button */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1.35,
            duration: .45,
          }}
          className="w-full"
        >
          <LButton
            className="w-full h-14 rounded-2xl"
            onClick={() => navigate("/verify-email")}
          >
            Continue to Dashboard
          </LButton>
        </motion.div>

      </div>
    </AuthLayout>
  );
}
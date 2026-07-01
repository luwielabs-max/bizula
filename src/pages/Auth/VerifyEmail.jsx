import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

import AuthLayout from "../../components/auth/AuthLayout";
import { LButton } from "../../lib/luwie-ui";

export default function VerifyEmail() {
  const navigate = useNavigate();

  return (
    <AuthLayout>

      <div className="flex flex-col items-center text-center">

        {/* Mail */}

        <motion.div
          initial={{
            opacity: 0,
            scale: .6,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: .45,
          }}
          className="
            w-24
            h-24
            rounded-full
            border
            border-zinc-200
            flex
            items-center
            justify-center
            mb-8
          "
        >
          <Mail
            size={42}
            strokeWidth={1.8}
          />
        </motion.div>

        {/* Status */}

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
            delay: .15,
          }}
          className="
            mb-6
            px-4
            py-2
            rounded-full
            border
            border-zinc-200
            text-sm
            text-zinc-600
          "
        >
          ● Waiting for verification
        </motion.div>

        {/* Heading */}

        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: .25,
          }}
          className="
            text-3xl
            font-bold
            tracking-tight
          "
        >
          Verify your email
        </motion.h1>

        {/* Text */}

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
            delay: .35,
          }}
          className="
            mt-5
            text-zinc-500
            leading-relaxed
          "
        >
          We've sent a verification link to your email address.

          <br />
          <br />

          Verify your account before accepting
          payments, bookings or customer orders.
        </motion.p>

        {/* Buttons */}

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
            delay: .5,
          }}
          className="w-full mt-10 space-y-3"
        >
          <LButton
            className="w-full h-12 rounded-xl"
            onClick={() => {
              // Firebase tomorrow
            }}
          >
            Resend Email
          </LButton>

          <LButton
            variant="secondary"
            className="w-full h-12 rounded-xl"
            onClick={() => {
              // Firebase tomorrow
              navigate("/dashboard");
            }}
          >
            I have verified
          </LButton>

          <button
            onClick={() => navigate("/login")}
            className="
              mt-2
              text-sm
              text-zinc-500
              hover:text-black
              transition
            "
          >
            Sign out
          </button>

        </motion.div>

      </div>

    </AuthLayout>
  );
}
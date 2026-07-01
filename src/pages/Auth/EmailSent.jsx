import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

import AuthLayout from "../../components/auth/AuthLayout";
import { LButton } from "../../lib/luwie-ui";

export default function EmailSent() {
  const navigate = useNavigate();

  return (
    <AuthLayout>

      <div className="text-center">

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
            w-28
            h-28
            mx-auto
            mb-8
            rounded-full
            border
            border-zinc-200
            flex
            items-center
            justify-center
          "
        >
          <Mail size={48} />
        </motion.div>

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
            delay: .2,
          }}
          className="text-3xl font-bold"
        >
          Check your email
        </motion.h1>

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
            mt-4
            text-zinc-500
            leading-relaxed
          "
        >
          We've sent you a password reset link.

          <br />

          Please check your inbox.
        </motion.p>

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: .55,
          }}
          className="mt-10"
        >
          <LButton
            className="w-full h-12 rounded-xl"
            onClick={() => navigate("/login")}
          >
            Back to Login
          </LButton>
        </motion.div>

      </div>

    </AuthLayout>
  );
}
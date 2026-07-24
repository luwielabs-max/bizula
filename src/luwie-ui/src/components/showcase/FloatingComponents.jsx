import { motion } from "framer-motion";

import LButton from "../../lib/ui/LButton";
import LCard from "../../lib/ui/LCard";
import LBadge from "../../lib/ui/LBadge";

export default function FloatingComponents() {
  return (
    <>
      <motion.div
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="
          absolute
          top-40
          left-24
        "
      >
        <LCard>
          Premium Card
        </LCard>
      </motion.div>

      <motion.div
        animate={{
          y: [0, 12, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="
          absolute
          right-24
          top-52
        "
      >
        <LButton>
          Action
        </LButton>
      </motion.div>

      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="
          absolute
          bottom-40
          left-32
        "
      >
        <LBadge>
          Motion
        </LBadge>
      </motion.div>
    </>
  );
}
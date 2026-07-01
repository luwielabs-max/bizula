import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGoogle,
  faApple,
} from "@fortawesome/free-brands-svg-icons";

import { LButton } from "../../../lib/luwie-ui";

const socials = [
  {
    name: "Google",
    icon: faGoogle,
  },
  {
    name: "Apple",
    icon: faApple,
  },
];

export default function SocialLogin() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="space-y-3"
    >
      {socials.map((social) => (
        <LButton
          key={social.name}
          variant="ghost"
          className="w-full h-12 rounded-2xl justify-center gap-3"
        >
          <FontAwesomeIcon
            icon={social.icon}
            className="text-lg"
          />

          <span>Continue with {social.name}</span>
        </LButton>
      ))}
    </motion.div>
  );
}
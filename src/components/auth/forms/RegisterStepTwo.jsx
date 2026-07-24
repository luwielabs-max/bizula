import { motion } from "framer-motion";
import {
  Store,
  BriefcaseBusiness,
} from "lucide-react";

import { LButton } from "../../../lib/luwie-ui";
import BusinessTypeCard from "../cards/BusinessTypeCard";

export default function RegisterStepTwo({
  form,
  setForm,
  onContinue,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 25,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      exit={{
        opacity: 0,
        x: -25,
      }}
      className="space-y-5"
    >
      <BusinessTypeCard
        title="Retail Business"
        description="Sell products, manage inventory and receive customer orders."
        icon={Store}
        selected={form.businessType === "retail"}
        onClick={() =>
          setForm({
            ...form,
            businessType: "retail",
          })
        }
      />

      <BusinessTypeCard
        title="Service Business"
        description="Accept bookings, manage appointments and deliver professional services."
        icon={BriefcaseBusiness}
        selected={form.businessType === "service"}
        onClick={() =>
          setForm({
            ...form,
            businessType: "service",
          })
        }
      />

      <LButton
        className="w-full h-14 rounded-2xl"
        disabled={!form.businessType}
        onClick={onContinue}
      >
        Continue →
      </LButton>
    </motion.div>
  );
}
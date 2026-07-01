import { motion } from "framer-motion";
import {
  Store,
  BriefcaseBusiness,
} from "lucide-react";

import {
  LButton,
  LInput,
} from "../../../lib/luwie-ui";

export default function RegisterStepThree({
  form,
  setForm,
  onBack,
  onSubmit,
}) {
  const isRetail = form.businessType === "retail";

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
      transition={{
        duration: .35,
      }}
      className="space-y-6"
    >
      <LInput
        autoFocus
        placeholder="Business Name"
        value={form.businessName}
        onChange={(e) =>
          setForm({
            ...form,
            businessName: e.target.value,
          })
        }
      />

      <div
        className="
          rounded-3xl
          border
          border-zinc-200
          p-5
          flex
          items-center
          justify-between
        "
      >
        <div className="flex items-center gap-4">

          <div
            className="
              w-12
              h-12
              rounded-2xl
              bg-black
              text-white
              flex
              items-center
              justify-center
            "
          >
            {isRetail ? (
              <Store size={22} />
            ) : (
              <BriefcaseBusiness size={22} />
            )}
          </div>

          <div>
            <h3 className="font-semibold">
              {isRetail
                ? "Retail Business"
                : "Service Business"}
            </h3>

            <p className="text-sm text-zinc-500">
              Selected in Step 2
            </p>
          </div>

        </div>

        <button
          onClick={onBack}
          className="
            text-sm
            font-medium
            text-black
            hover:underline
          "
        >
          Change
        </button>
      </div>

      <LButton
        className="w-full h-14 rounded-2xl"
        disabled={!form.businessName.trim()}
        onClick={onSubmit}
      >
        Create Account →
      </LButton>
    </motion.div>
  );
}
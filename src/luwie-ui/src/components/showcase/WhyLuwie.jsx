import { motion } from "framer-motion";

const features = [
  {
    title: "Apple-Inspired",
    description:
      "Carefully crafted aesthetics with premium spacing, typography and motion.",
  },

  {
    title: "Motion First",
    description:
      "Smooth animations powered by Framer Motion.",
  },

  {
    title: "Reusable",
    description:
      "Works across SaaS apps, dashboards, landing pages and future products.",
  },

  {
    title: "Customizable",
    description:
      "Variants, className overrides and composition-first architecture.",
  },
];

export default function WhyLuwie() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            text-5xl
            font-bold
            text-center
            mb-16
          "
        >
          Why Luwie UI?
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              className="
                p-8
                rounded-[32px]
                bg-white
                border
                border-zinc-200
              "
            >
              <h3 className="text-2xl font-semibold mb-3">
                {feature.title}
              </h3>

              <p className="text-zinc-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
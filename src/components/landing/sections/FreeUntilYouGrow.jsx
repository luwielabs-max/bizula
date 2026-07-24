import { motion } from "framer-motion";
import PricingPreview from "../features/PricingPreview";

export default function FreeUntilYouGrow() {
  return (
    <section className="bg-zinc-50 py-36">

      <div className="mx-auto grid max-w-7xl items-center gap-24 px-6 lg:grid-cols-2 lg:px-10">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
        >

          <p className="text-sm uppercase tracking-[0.35em] text-zinc-500">
            FREE UNTIL YOU GROW
          </p>

          <h2 className="mt-6 text-5xl font-semibold tracking-tight lg:text-7xl">

            Software should
            help you make money.

            <br />

            Not cost you money.

          </h2>

          <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-500">

            Most business software starts charging
            you before you've earned your first sale.

            Bizula lets you start for free and only
            earns through small transaction charges
            when your business actually earns.

          </p>

          <div className="mt-12 space-y-8">

            <div>

              <h3 className="text-xl font-semibold">
                Start Free
              </h3>

              <p className="mt-2 leading-7 text-zinc-500">
                No subscriptions.
                No setup fees.
                No upfront costs.
              </p>

            </div>

            <div>

              <h3 className="text-xl font-semibold">
                Grow Naturally
              </h3>

              <p className="mt-2 leading-7 text-zinc-500">
                Accept orders, bookings,
                commitment fees and deposits
                as your business grows.
              </p>

            </div>

            <div>

              <h3 className="text-xl font-semibold">
                We Grow With You
              </h3>

              <p className="mt-2 leading-7 text-zinc-500">
                We only succeed when you succeed.
                That's why Bizula earns only when
                business happens.
              </p>

            </div>

          </div>

          <div className="mt-12 rounded-[28px] border border-zinc-200 bg-white p-8">

            <p className="text-3xl font-semibold leading-tight">

              When you grow,

              <br />

              we grow with you.

            </p>

          </div>

        </motion.div>

        {/* RIGHT */}

        <PricingPreview />

      </div>

    </section>
  );
}
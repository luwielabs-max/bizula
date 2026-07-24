import { motion } from "framer-motion";
import BusinessEverywherePreview from "../features/BusinessEverywherePreview";

export default function BusinessEverywhere() {
  return (
    <section className="bg-white py-36">

      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-24 items-center">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
          >

            <p className="uppercase tracking-[0.35em] text-sm text-zinc-500">
              Sell Everywhere
            </p>

            <h2 className="mt-6 text-5xl lg:text-7xl font-semibold tracking-tight">

              Your business.

              <br />

              Everywhere.

            </h2>

            <p className="mt-8 text-lg leading-8 text-zinc-500">

              Your customers shouldn't need another app.

              Share one Bizula link or place a simple
              <strong className="text-black"> Book Now</strong>,
              <strong className="text-black"> Order Now</strong> or
              <strong className="text-black"> Buy Now</strong> button
              anywhere your customers already are.

            </p>

            <div className="mt-12 space-y-6">

              <div>
                <h3 className="font-semibold text-lg">
                  Share Anywhere
                </h3>

                <p className="mt-2 text-zinc-500 leading-7">

                  Instagram, TikTok, WhatsApp,
                  Facebook, X or your own website.

                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">
                  Commitment Fees
                </h3>

                <p className="mt-2 text-zinc-500 leading-7">

                  Reduce no-shows by collecting a small
                  commitment fee before confirming bookings.

                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">
                  Deposits
                </h3>

                <p className="mt-2 text-zinc-500 leading-7">

                  Accept part-payments for products
                  before production or delivery begins.

                </p>
              </div>

            </div>

          </motion.div>

          {/* RIGHT */}

          <BusinessEverywherePreview />

        </div>

      </div>

    </section>
  );
}
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="bg-black py-40 text-white">

      <div className="mx-auto max-w-5xl px-6 text-center">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
        >

          <p className="uppercase tracking-[0.35em] text-sm text-zinc-400">

            START TODAY

          </p>

          <h2 className="mt-8 text-5xl font-semibold tracking-tight lg:text-7xl">

            The future of
            business isn't
            complicated.

            <br />

            It's Bizula.

          </h2>

          <p className="mx-auto mt-10 max-w-2xl text-lg leading-8 text-zinc-400">

            Sell products.

            Accept bookings.

            Collect commitment fees.

            Receive deposits.

            Manage customers.

            Grow your business —

            all from one platform.

          </p>

          <div className="mt-14 flex flex-col items-center justify-center gap-5 sm:flex-row">

            <Link
              to="/register"
              className="rounded-full bg-white px-8 py-4 text-black font-medium transition hover:scale-[1.03]"
            >

              Create Free Account

            </Link>

            <Link
              to="/login"
              className="flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 font-medium transition hover:bg-white/10"
            >

              Sign In

              <ArrowRight size={18} />

            </Link>

          </div>

          <div className="mt-20 grid gap-10 border-t border-white/10 pt-12 text-center md:grid-cols-3">

            <div>

              <h3 className="text-3xl font-semibold">

                Free

              </h3>

              <p className="mt-2 text-zinc-400">

                To get started

              </p>

            </div>

            <div>

              <h3 className="text-3xl font-semibold">

                One Link

              </h3>

              <p className="mt-2 text-zinc-400">

                Share everywhere

              </p>

            </div>

            <div>

              <h3 className="text-3xl font-semibold">

                One Platform

              </h3>

              <p className="mt-2 text-zinc-400">

                Everything connected

              </p>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}
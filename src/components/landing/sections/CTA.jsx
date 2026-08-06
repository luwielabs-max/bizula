import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Sparkles,
  Boxes,
  Link2,
  LayoutDashboard,
  Mail,
  LoaderCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const highlights = [
  {
    icon: Boxes,
    title: "Start free",
    description: "No monthly subscription",
  },
  {
    icon: Link2,
    title: "One business link",
    description: "Share it everywhere",
  },
  {
    icon: LayoutDashboard,
    title: "One workspace",
    description: "Keep everything connected",
  },
];

export default function CTA() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    const normalizedEmail = email
      .trim()
      .toLowerCase();

    if (!normalizedEmail) {
      setStatus("error");
      setMessage("Enter your email address to join.");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch(
  `${import.meta.env.VITE_API_URL}/api/waitlist`,
  {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: normalizedEmail,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setStatus("error");
        setMessage(
          data.message ||
            "Something went wrong. Please try again."
        );
        return;
      }

      setStatus("success");
      setMessage(
        data.message ||
          "You are officially on the Bizula waitlist."
      );

      setEmail("");
    } catch (error) {
      console.error(
        "Waitlist request error:",
        error
      );

      setStatus("error");
      setMessage(
        "We could not connect to Bizula. Please try again."
      );
    }
  }

  return (
    <section className="relative overflow-hidden bg-violet-700 py-24 text-white sm:py-32">
      {/* Background */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Large ambient glows */}

        <div className="absolute left-1/2 top-[-18rem] h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-white/10 blur-[120px]" />

        <div className="absolute bottom-[-18rem] left-[-10rem] h-[34rem] w-[34rem] rounded-full bg-fuchsia-500/25 blur-[140px]" />

        <div className="absolute bottom-[-16rem] right-[-10rem] h-[34rem] w-[34rem] rounded-full bg-indigo-950/30 blur-[140px]" />

        {/* Grid */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.08]
            [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)]
            [background-size:72px_72px]
          "
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 text-center sm:px-6">
        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          {/* Badge */}

          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-violet-50 backdrop-blur-sm">
            <Sparkles size={15} />

            Built for businesses ready to grow
          </div>

          {/* Heading */}

          <h2 className="mx-auto mt-8 max-w-5xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-7xl">
            The future of business

            <span className="block text-violet-200">
              is not complicated.
            </span>

            <span className="mt-2 block">
              It is{" "}

              <span className="text-white">
                Bizula.
              </span>
            </span>
          </h2>

          {/* Description */}

          <p className="mx-auto mt-8 max-w-2xl text-base leading-7 text-violet-100 sm:text-lg sm:leading-8">
            Sell products, accept bookings, collect commitment fees,
            receive deposits, manage customers, and grow your business
            from one connected platform.
          </p>

          {/* Waitlist */}

          <div className="mx-auto mt-11 max-w-xl">
            {status === "success" ? (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 12,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                className="
                  rounded-[2rem]
                  border
                  border-white/20
                  bg-white/10
                  p-7
                  backdrop-blur-md
                  sm:p-8
                "
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-violet-700">
                  <Check
                    size={27}
                    strokeWidth={3}
                  />
                </div>

                <h3 className="mt-5 text-2xl font-semibold">
                  You are on the list!
                </h3>

                <p className="mx-auto mt-3 max-w-md leading-7 text-violet-100">
                  {message}
                </p>
              </motion.div>
            ) : (
              <>
                <form
                  onSubmit={handleSubmit}
                  className="
                    flex
                    flex-col
                    gap-3
                    rounded-[2rem]
                    border
                    border-white/15
                    bg-white/10
                    p-3
                    backdrop-blur-md
                    sm:flex-row
                  "
                >
                  <div className="flex min-w-0 flex-1 items-center gap-3 rounded-full bg-white px-5 py-4 text-zinc-950">
                    <Mail
                      size={19}
                      className="shrink-0 text-zinc-400"
                    />

                    <input
                      type="email"
                      value={email}
                      onChange={(event) => {
                        setEmail(event.target.value);

                        if (status === "error") {
                          setStatus("idle");
                          setMessage("");
                        }
                      }}
                      placeholder="Enter your email address"
                      disabled={status === "loading"}
                      className="
                        min-w-0
                        flex-1
                        bg-transparent
                        text-base
                        outline-none
                        placeholder:text-zinc-400
                        disabled:cursor-not-allowed
                      "
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="
                      inline-flex
                      min-h-[56px]
                      items-center
                      justify-center
                      gap-2
                      rounded-full
                      bg-white
                      px-7
                      font-semibold
                      text-violet-700
                      shadow-xl
                      shadow-violet-950/20
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                      hover:shadow-2xl
                      disabled:cursor-not-allowed
                      disabled:opacity-70
                      sm:min-w-[170px]
                    "
                  >
                    {status === "loading" ? (
                      <>
                        <LoaderCircle
                          size={18}
                          className="animate-spin"
                        />

                        Joining...
                      </>
                    ) : (
                      <>
                        Join the waitlist

                        <ArrowRight size={18} />
                      </>
                    )}
                  </button>
                </form>

                {status === "error" && (
                  <motion.p
                    initial={{
                      opacity: 0,
                      y: -5,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    className="
                      mt-4
                      rounded-xl
                      border
                      border-red-200/20
                      bg-red-500/15
                      px-4
                      py-3
                      text-sm
                      font-medium
                      text-red-100
                    "
                  >
                    {message}
                  </motion.p>
                )}

                <p className="mt-4 text-sm text-violet-100">
                  Join the waitlist and be among the first
                  businesses to experience Bizula.
                </p>
              </>
            )}
          </div>

          {/* Existing users */}

          <div className="mt-6">
            <Link
              to="/login"
              className="
                inline-flex
                items-center
                gap-2
                text-sm
                font-semibold
                text-white/90
                transition
                hover:text-white
              "
            >
              Already have an account?

              <span className="underline underline-offset-4">
                Sign in
              </span>
            </Link>
          </div>

          {/* Trust line */}

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-violet-100">
            <span className="inline-flex items-center gap-2">
              <Check
                size={15}
                strokeWidth={3}
              />

              Free to get started
            </span>

            <span className="inline-flex items-center gap-2">
              <Check
                size={15}
                strokeWidth={3}
              />

              No monthly subscription
            </span>

            <span className="inline-flex items-center gap-2">
              <Check
                size={15}
                strokeWidth={3}
              />

              Built for African commerce
            </span>
          </div>

          {/* Highlights */}

          <div className="mt-16 grid gap-3 border-t border-white/15 pt-10 sm:grid-cols-3 sm:gap-4">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;

              return (
                <motion.div
                  key={highlight.title}
                  initial={{
                    opacity: 0,
                    y: 18,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: 0.15 + index * 0.08,
                    duration: 0.45,
                  }}
                  className="
                    rounded-[1.5rem]
                    border
                    border-white/10
                    bg-white/[0.07]
                    p-6
                    backdrop-blur-sm
                    transition-colors
                    duration-300
                    hover:bg-white/[0.1]
                  "
                >
                  <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white">
                    <Icon size={21} />
                  </span>

                  <h3 className="mt-5 text-lg font-semibold text-white">
                    {highlight.title}
                  </h3>

                  <p className="mt-2 text-sm text-violet-100">
                    {highlight.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

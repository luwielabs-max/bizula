import {
  useEffect,
  useState,
} from "react";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import {
  ArrowRight,
  Check,
  LoaderCircle,
  Mail,
} from "lucide-react";

import {
  Link,
} from "react-router-dom";

import {
  bizulaIcon,
  bizulaLogo,
} from "../../../assets/brand/brand";

const heroPoints = [
  "No monthly subscription",
  "Built for African businesses",
  "Pay when business happens",
];

const changingWords = [
  "better than stress.",
  "better than chaos.",
  "better than scattered tools.",
  "built to grow.",
];

export default function Hero() {
  const [email, setEmail] = useState("");

  const [status, setStatus] =
    useState("idle");

  const [message, setMessage] =
    useState("");

  const [wordIndex, setWordIndex] =
    useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((currentIndex) => {
        return (
          currentIndex + 1
        ) % changingWords.length;
      });
    }, 2600);

    return () => {
      clearInterval(interval);
    };
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();

    const normalizedEmail = email
      .trim()
      .toLowerCase();

    if (!normalizedEmail) {
      setStatus("error");

      setMessage(
        "Enter your email address to join the waitlist."
      );

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
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            email: normalizedEmail,
          }),
        }
      );

      const data =
        await response.json();

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
    <section className="relative isolate overflow-hidden bg-white">

      {/* Background atmosphere */}

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">

        <motion.div
          animate={{
            x: [
              0,
              55,
              -35,
              0,
            ],

            y: [
              0,
              -35,
              25,
              0,
            ],

            scale: [
              1,
              1.08,
              0.96,
              1,
            ],
          }}

          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}

          className="
            absolute
            left-1/2
            top-[-260px]
            h-[720px]
            w-[720px]
            -translate-x-1/2
            rounded-full
            bg-violet-300/30
            blur-[150px]
          "
        />

        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
            [background-image:linear-gradient(#18181b_1px,transparent_1px),linear-gradient(90deg,#18181b_1px,transparent_1px)]
            [background-size:72px_72px]
          "
        />

      </div>

      <div
        className="
          mx-auto
          flex
          min-h-[850px]
          max-w-7xl
          flex-col
          items-center
          px-5
          pb-20
          pt-8
          text-center
          sm:px-8
          lg:px-10
          lg:pb-28
        "
      >

        {/* Brand */}

        <motion.div
          initial={{
            opacity: 0,
            y: -12,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.5,
          }}

          className="
            flex
            w-full
            items-center
            justify-center
          "
        >

          <img
            src={bizulaLogo}
            alt="Bizula"
            className="h-10 w-auto sm:h-11"
          />

        </motion.div>

        {/* Main content */}

        <div className="flex flex-1 flex-col items-center justify-center pt-16 sm:pt-20 lg:pt-24">

          {/* Brand message */}

          <motion.div
            initial={{
              opacity: 0,
              y: 18,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration: 0.5,
            }}

            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-violet-200
              bg-violet-50
              px-4
              py-2
              text-sm
              font-semibold
              text-violet-700
              shadow-sm
            "
          >

            <img
              src={bizulaIcon}
              alt=""
              aria-hidden="true"
              className="h-5 w-5"
            />

            Built for African businesses

          </motion.div>

          {/* Heading */}

          <motion.h1
            initial={{
              opacity: 0,
              y: 24,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              delay: 0.1,
              duration: 0.65,
            }}

            className="
              mt-8
              max-w-5xl
              text-5xl
              font-extrabold
              leading-[0.98]
              tracking-[-0.055em]
              text-zinc-950
              sm:text-6xl
              md:text-7xl
              lg:text-8xl
            "
          >

            Your business deserves

            <span className="block min-h-[1.05em] text-violet-600">

              <AnimatePresence
                mode="wait"
              >

                <motion.span
                  key={
                    changingWords[
                      wordIndex
                    ]
                  }

                  initial={{
                    opacity: 0,
                    y: 28,
                    filter:
                      "blur(8px)",
                  }}

                  animate={{
                    opacity: 1,
                    y: 0,
                    filter:
                      "blur(0px)",
                  }}

                  exit={{
                    opacity: 0,
                    y: -28,
                    filter:
                      "blur(8px)",
                  }}

                  transition={{
                    duration: 0.45,
                    ease:
                      "easeOut",
                  }}

                  className="block"
                >

                  {
                    changingWords[
                      wordIndex
                    ]
                  }

                </motion.span>

              </AnimatePresence>

            </span>

          </motion.h1>

          {/* Description */}

          <motion.p
            initial={{
              opacity: 0,
              y: 24,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              delay: 0.2,
              duration: 0.65,
            }}

            className="
              mt-7
              max-w-2xl
              text-base
              leading-7
              text-zinc-500
              sm:text-lg
              sm:leading-8
              lg:text-xl
            "
          >

            Manage products,
            inventory,
            orders,
            bookings,
            customers,
            sales,
            and payments from one simple
            platform designed for modern
            African businesses.

          </motion.p>

          {/* Waitlist form */}

          <motion.div
            initial={{
              opacity: 0,
              y: 24,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              delay: 0.3,
              duration: 0.65,
            }}

            className="
              mt-10
              w-full
              max-w-2xl
            "
          >

            {status ===
            "success" ? (

              <motion.div
                initial={{
                  opacity: 0,
                  y: 10,
                }}

                animate={{
                  opacity: 1,
                  y: 0,
                }}

                className="
                  rounded-[2rem]
                  border
                  border-violet-200
                  bg-violet-50
                  p-7
                  shadow-sm
                  sm:p-8
                "
              >

                <div
                  className="
                    mx-auto
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-violet-600
                    text-white
                  "
                >

                  <Check
                    size={27}
                    strokeWidth={3}
                  />

                </div>

                <h3
                  className="
                    mt-5
                    text-2xl
                    font-bold
                    tracking-tight
                    text-zinc-950
                  "
                >

                  You are on the list!

                </h3>

                <p
                  className="
                    mx-auto
                    mt-3
                    max-w-md
                    leading-7
                    text-zinc-500
                  "
                >

                  {message}

                </p>

              </motion.div>

            ) : (

              <>

                <form
                  onSubmit={
                    handleSubmit
                  }

                  className="
                    flex
                    w-full
                    flex-col
                    gap-3
                    rounded-[2rem]
                    border
                    border-zinc-200
                    bg-white
                    p-3
                    shadow-[0_20px_70px_-30px_rgba(76,29,149,0.25)]
                    sm:flex-row
                  "
                >

                  <div
                    className="
                      flex
                      min-w-0
                      flex-1
                      items-center
                      gap-3
                      rounded-full
                      bg-zinc-50
                      px-5
                      py-4
                    "
                  >

                    <Mail
                      size={19}

                      className="
                        shrink-0
                        text-zinc-400
                      "
                    />

                    <input
                      type="email"

                      value={
                        email
                      }

                      onChange={(
                        event
                      ) => {

                        setEmail(
                          event
                            .target
                            .value
                        );

                        if (
                          status ===
                          "error"
                        ) {

                          setStatus(
                            "idle"
                          );

                          setMessage(
                            ""
                          );

                        }

                      }}

                      placeholder="Enter your email address"

                      disabled={
                        status ===
                        "loading"
                      }

                      className="
                        min-w-0
                        flex-1
                        bg-transparent
                        text-base
                        text-zinc-950
                        outline-none
                        placeholder:text-zinc-400
                        disabled:cursor-not-allowed
                      "
                    />

                  </div>

                  <button
                    type="submit"

                    disabled={
                      status ===
                      "loading"
                    }

                    className="
                      inline-flex
                      min-h-[56px]
                      items-center
                      justify-center
                      gap-2
                      rounded-full
                      bg-violet-600
                      px-7
                      font-semibold
                      text-white
                      shadow-lg
                      shadow-violet-600/20
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                      hover:bg-violet-700
                      disabled:cursor-not-allowed
                      disabled:opacity-70
                      sm:min-w-[180px]
                    "
                  >

                    {status ===
                    "loading" ? (

                      <>

                        <LoaderCircle
                          size={18}

                          className="
                            animate-spin
                          "
                        />

                        Joining...

                      </>

                    ) : (

                      <>

                        Join waitlist

                        <ArrowRight
                          size={18}
                        />

                      </>

                    )}

                  </button>

                </form>

                {status ===
                "error" && (

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
                      border-red-200
                      bg-red-50
                      px-4
                      py-3
                      text-sm
                      font-medium
                      text-red-600
                    "
                  >

                    {message}

                  </motion.p>

                )}

                <p
                  className="
                    mt-4
                    text-sm
                    font-medium
                    text-zinc-500
                  "
                >

                  Join the waitlist and be among
                  the first businesses to
                  experience Bizula.

                </p>

              </>

            )}

            {/* Sign in */}

            <div className="mt-5">

              <Link
                to="/login"

                className="
                  inline-flex
                  items-center
                  gap-2
                  text-sm
                  font-semibold
                  text-zinc-600
                  transition
                  hover:text-violet-700
                "
              >

                Already have an account?

                <span
                  className="
                    underline
                    underline-offset-4
                  "
                >

                  Sign in

                </span>

              </Link>

            </div>

          </motion.div>

          {/* Trust points */}

          <motion.div
            initial={{
              opacity: 0,
            }}

            animate={{
              opacity: 1,
            }}

            transition={{
              delay: 0.45,
              duration: 0.6,
            }}

            className="
              mt-7
              flex
              max-w-3xl
              flex-col
              items-center
              justify-center
              gap-3
              text-sm
              font-medium
              text-zinc-500
              sm:flex-row
              sm:gap-6
            "
          >

            {heroPoints.map(
              (point) => (

                <div
                  key={point}

                  className="
                    flex
                    items-center
                    gap-2
                  "
                >

                  <span
                    className="
                      flex
                      h-5
                      w-5
                      items-center
                      justify-center
                      rounded-full
                      bg-violet-100
                      text-violet-700
                    "
                  >

                    <Check
                      size={13}
                      strokeWidth={3}
                    />

                  </span>

                  {point}

                </div>

              )
            )}

          </motion.div>

          {/* Product preview */}

          <motion.div
            initial={{
              opacity: 0,
              y: 50,
              scale: 0.97,
            }}

            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}

            transition={{
              delay: 0.55,
              duration: 0.8,
              ease: "easeOut",
            }}

            className="
              relative
              mt-14
              w-full
              max-w-5xl
              rounded-[2rem]
              border
              border-zinc-200
              bg-white
              p-2
              shadow-[0_30px_100px_-35px_rgba(76,29,149,0.35)]
              sm:p-3
            "
          >

            <div
              className="
                overflow-hidden
                rounded-[1.5rem]
                border
                border-zinc-100
                bg-zinc-50
                p-5
                sm:p-8
              "
            >

              <div
                className="
                  flex
                  items-center
                  justify-between
                  border-b
                  border-zinc-200
                  pb-5
                "
              >

                <div
                  className="
                    flex
                    items-center
                    gap-3
                  "
                >

                  <img
                    src={bizulaIcon}
                    alt=""
                    aria-hidden="true"

                    className="
                      h-10
                      w-10
                    "
                  />

                  <div className="text-left">

                    <p
                      className="
                        font-bold
                        text-zinc-950
                      "
                    >

                      Your business,
                      at a glance

                    </p>

                    <p
                      className="
                        text-sm
                        text-zinc-500
                      "
                    >

                      Everything working
                      together

                    </p>

                  </div>

                </div>

                <span
                  className="
                    hidden
                    rounded-full
                    bg-emerald-100
                    px-3
                    py-1
                    text-xs
                    font-bold
                    text-emerald-700
                    sm:block
                  "
                >

                  Business active

                </span>

              </div>

              <div
                className="
                  mt-6
                  grid
                  gap-4
                  sm:grid-cols-3
                "
              >

                <div
                  className="
                    rounded-2xl
                    border
                    border-zinc-200
                    bg-white
                    p-5
                    text-left
                  "
                >

                  <p
                    className="
                      text-sm
                      font-medium
                      text-zinc-500
                    "
                  >

                    Today&apos;s sales

                  </p>

                  <p
                    className="
                      mt-3
                      text-2xl
                      font-extrabold
                      tracking-tight
                      text-zinc-950
                    "
                  >

                    ₦248,000

                  </p>

                  <p
                    className="
                      mt-2
                      text-sm
                      font-semibold
                      text-emerald-600
                    "
                  >

                    +18.4% this week

                  </p>

                </div>

                <div
                  className="
                    rounded-2xl
                    border
                    border-zinc-200
                    bg-white
                    p-5
                    text-left
                  "
                >

                  <p
                    className="
                      text-sm
                      font-medium
                      text-zinc-500
                    "
                  >

                    New orders

                  </p>

                  <p
                    className="
                      mt-3
                      text-2xl
                      font-extrabold
                      tracking-tight
                      text-zinc-950
                    "
                  >

                    24

                  </p>

                  <p
                    className="
                      mt-2
                      text-sm
                      font-semibold
                      text-violet-600
                    "
                  >

                    8 awaiting action

                  </p>

                </div>

                <div
                  className="
                    rounded-2xl
                    border
                    border-zinc-200
                    bg-white
                    p-5
                    text-left
                  "
                >

                  <p
                    className="
                      text-sm
                      font-medium
                      text-zinc-500
                    "
                  >

                    Inventory health

                  </p>

                  <p
                    className="
                      mt-3
                      text-2xl
                      font-extrabold
                      tracking-tight
                      text-zinc-950
                    "
                  >

                    96%

                  </p>

                  <p
                    className="
                      mt-2
                      text-sm
                      font-semibold
                      text-amber-600
                    "
                  >

                    3 products running low

                  </p>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}
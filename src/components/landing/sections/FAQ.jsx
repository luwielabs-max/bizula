
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  Minus,
  MessageCircleQuestion,
  Sparkles,
} from "lucide-react";

const faqs = [
  {
    question: "Is Bizula really free?",
    answer:
      "Yes. You can create an account and manage products, services, bookings, and customers without paying a monthly subscription. Bizula earns through small transaction charges only when your business earns.",
  },
  {
    question: "Who is Bizula built for?",
    answer:
      "Bizula is built for retail stores, freelancers, salons, restaurants, consultants, creators, online sellers, and any business that sells products, services, or both.",
  },
  {
    question: "Can I use Bizula on my own website?",
    answer:
      "Yes. You can add a Book Now, Order Now, or Buy Now button to your website and connect it to your Bizula page. You can also share the same link on Instagram, WhatsApp, TikTok, and other platforms.",
  },
  {
    question: "What are Commitment Fees?",
    answer:
      "Commitment Fees are small upfront payments that help reduce no-shows and allow businesses to confirm genuine bookings before reserving time or resources.",
  },
  {
    question: "Can customers pay deposits?",
    answer:
      "Yes. Customers can pay part of an order before production begins and complete the remaining balance later.",
  },
  {
    question: "Do I need to install anything?",
    answer:
      "No. Bizula runs in your browser. Simply create your account, set up your business, and start selling or accepting bookings.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-32">
      {/* Soft background */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-violet-100/40 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-5 sm:px-6">
        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-sm font-semibold text-violet-700">
            <MessageCircleQuestion size={16} />

            Frequently asked questions
          </div>

          <h2 className="mt-7 text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl">
            Questions?
            <span className="block text-violet-600">
              We have answers.
            </span>
          </h2>

          <p className="mt-7 text-base leading-7 text-zinc-500 sm:text-lg sm:leading-8">
            Everything you need to know before getting started
            with Bizula.
          </p>
        </motion.div>

        {/* FAQ list */}

        <div className="mt-14 space-y-3 sm:mt-16">
          {faqs.map((faq, index) => {
            const active = open === index;

            return (
              <motion.div
                key={faq.question}
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.05,
                  duration: 0.4,
                }}
                className={`
                  overflow-hidden
                  rounded-[1.5rem]
                  border
                  transition-all
                  duration-300
                  ${
                    active
                      ? "border-violet-200 bg-violet-50/50 shadow-lg shadow-violet-100/50"
                      : "border-zinc-200 bg-white hover:border-zinc-300"
                  }
                `}
              >
                <button
                  type="button"
                  onClick={() => setOpen(active ? -1 : index)}
                  aria-expanded={active}
                  aria-controls={`faq-answer-${index}`}
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    gap-5
                    p-5
                    text-left
                    sm:p-7
                  "
                >
                  <span
                    className={`
                      text-base
                      font-semibold
                      transition-colors
                      sm:text-lg
                      ${
                        active
                          ? "text-violet-800"
                          : "text-zinc-900"
                      }
                    `}
                  >
                    {faq.question}
                  </span>

                  <span
                    className={`
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      transition-all
                      duration-300
                      ${
                        active
                          ? "bg-violet-600 text-white"
                          : "bg-zinc-100 text-zinc-600"
                      }
                    `}
                  >
                    {active ? (
                      <Minus
                        size={18}
                        strokeWidth={2.5}
                      />
                    ) : (
                      <Plus
                        size={18}
                        strokeWidth={2.5}
                      />
                    )}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {active && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-6 text-sm leading-7 text-zinc-600 sm:px-7 sm:pb-8 sm:text-base">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom reassurance */}

        <motion.div
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
            delay: 0.15,
            duration: 0.5,
          }}
          className="
            mt-10
            flex
            flex-col
            items-center
            justify-center
            gap-3
            rounded-[1.75rem]
            border
            border-violet-100
            bg-violet-50/70
            px-6
            py-6
            text-center
            sm:flex-row
            sm:text-left
          "
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-violet-700 shadow-sm">
            <Sparkles size={20} />
          </span>

          <div>
            <p className="font-semibold text-zinc-900">
              Still have questions?
            </p>

            <p className="mt-1 text-sm leading-6 text-zinc-500">
              We are building Bizula with business owners in mind,
              and we would love to hear from you.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Is Bizula really free?",
    answer:
      "Yes. You can create an account, manage products, services, bookings and customers without paying a subscription. Bizula earns through small transaction charges only when your business earns."
  },
  {
    question: "Who is Bizula built for?",
    answer:
      "Retail stores, freelancers, salons, restaurants, consultants, creators, online sellers and any business that sells products, services or both."
  },
  {
    question: "Can I use Bizula on my own website?",
    answer:
      "Yes. Simply add a Book Now, Order Now or Buy Now button to your website and link it to your Bizula page. You can also share the same link on Instagram, WhatsApp, TikTok and other platforms."
  },
  {
    question: "What are Commitment Fees?",
    answer:
      "Commitment Fees are small upfront payments that reduce no-shows and help businesses confirm genuine bookings before reserving time or resources."
  },
  {
    question: "Can customers pay deposits?",
    answer:
      "Absolutely. Customers can pay part of an order before production begins and complete the remaining balance later."
  },
  {
    question: "Do I need to install anything?",
    answer:
      "No. Bizula runs in your browser. Simply create your account and start selling or accepting bookings."
  }
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-white py-36">

      <div className="mx-auto max-w-4xl px-6">

        <motion.div
          initial={{opacity:0,y:30}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          className="text-center"
        >

          <p className="uppercase tracking-[0.35em] text-sm text-zinc-500">
            FAQ
          </p>

          <h2 className="mt-6 text-5xl lg:text-6xl font-semibold tracking-tight">
            Questions.
            <br />
            Answered.
          </h2>

          <p className="mt-8 text-lg leading-8 text-zinc-500">
            Everything you need to know before getting started.
          </p>

        </motion.div>

        <div className="mt-20 space-y-5">

          {faqs.map((faq, index) => {

            const active = open === index;

            return (

              <div
                key={faq.question}
                className="rounded-3xl border border-zinc-200"
              >

                <button
                  onClick={() => setOpen(active ? -1 : index)}
                  className="flex w-full items-center justify-between p-8 text-left"
                >

                  <span className="text-xl font-medium">
                    {faq.question}
                  </span>

                  {active ? (
                    <Minus size={20}/>
                  ) : (
                    <Plus size={20}/>
                  )}

                </button>

                <AnimatePresence>

                  {active && (

                    <motion.div
                      initial={{height:0,opacity:0}}
                      animate={{height:"auto",opacity:1}}
                      exit={{height:0,opacity:0}}
                      transition={{duration:.3}}
                    >

                      <div className="px-8 pb-8 text-zinc-500 leading-8">

                        {faq.answer}

                      </div>

                    </motion.div>

                  )}

                </AnimatePresence>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}
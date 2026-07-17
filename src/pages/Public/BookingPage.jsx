import { ShieldCheck, Star } from "lucide-react";
import { useParams } from "react-router-dom";

export default function BookingPage() {
  const { slug } = useParams();

  const business = {
    name: "Luwie Labs",
    tagline: "Premium Digital Products & Services",
    rating: 4.9,
    reviews: 128,

    services: [
      {
        id: 1,
        name: "Website Consultation",
        description:
          "Discuss your project goals, requirements and receive expert guidance before development begins.",
        duration: "60 mins",
        price: "₦15,000",
      },
      {
        id: 2,
        name: "Brand Identity",
        description:
          "Create a memorable brand identity with logo design, colours, typography and brand assets.",
        duration: "90 mins",
        price: "₦35,000",
      },
      {
        id: 3,
        name: "UI / UX Design",
        description:
          "Professional interface and user experience design for websites and mobile applications.",
        duration: "120 mins",
        price: "₦50,000",
      },
      {
        id: 4,
        name: "Product Strategy",
        description:
          "Validate your product idea and build a roadmap for launching your next digital product.",
        duration: "90 mins",
        price: "₦25,000",
      },
    ],
  };

  return (
    <main className="min-h-screen bg-zinc-50">
      <div className="mx-auto max-w-5xl px-6 py-16">
        {/* Header */}

        <div className="text-center">
          <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-[28px] bg-black text-4xl font-bold text-white">
            L
          </div>

          <h1 className="text-5xl font-bold tracking-tight text-zinc-900">
            {business.name}
          </h1>

          <p className="mt-4 text-lg text-zinc-500">
            {business.tagline}
          </p>

          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-5 py-3 shadow-sm">
            <Star
              size={18}
              className="fill-yellow-400 text-yellow-400"
            />

            <span className="font-semibold">
              {business.rating}
            </span>

            <span className="text-zinc-500">
              ({business.reviews} Reviews)
            </span>
          </div>
        </div>

        {/* Title */}

        <div className="mt-20 mb-10 text-center">
          <h2 className="text-4xl font-bold text-zinc-900">
            How can we help you today?
          </h2>

          <p className="mt-4 text-lg text-zinc-500">
            Choose a service below to begin your booking.
          </p>
        </div>

        {/* Services */}

        <div className="space-y-6">
          {business.services.map((service) => (
            <button
              key={service.id}
              onClick={() => console.log(service)}
              className="group w-full rounded-[32px] border border-zinc-200 bg-white p-10 text-left transition-all duration-300 hover:border-black hover:shadow-xl"
            >
              <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex-1">
                  <span className="inline-flex rounded-full border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-600">
                    {service.duration}
                  </span>

                  <h3 className="mt-6 text-3xl font-semibold text-zinc-900">
                    {service.name}
                  </h3>

                  <p className="mt-5 max-w-2xl leading-8 text-zinc-500">
                    {service.description}
                  </p>
                </div>

                <div className="flex flex-col items-start gap-6 lg:items-end">
                  <h2 className="text-4xl font-bold text-zinc-900">
                    {service.price}
                  </h2>

                  <button className="rounded-2xl bg-black px-8 py-4 font-medium text-white transition hover:bg-zinc-800">
                    Continue Booking →
                  </button>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Secure Booking */}

        <div className="mt-16 rounded-[32px] border border-zinc-200 bg-white p-10">
          <div className="flex items-start gap-5">
            <div className="rounded-2xl bg-zinc-100 p-4">
              <ShieldCheck
                size={26}
                className="text-zinc-900"
              />
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-zinc-900">
                Secure Booking
              </h2>

              <p className="mt-5 max-w-3xl leading-8 text-zinc-500">
                Every booking made through Bizula requires a small
                commitment fee. This secures your preferred time slot,
                reduces last-minute cancellations, and the commitment
                fee is deducted from your final payment to the business.
              </p>

              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-black" />
                  <span className="text-zinc-700">
                    Secure your reservation
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-black" />
                  <span className="text-zinc-700">
                    Deducted from your final payment
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-black" />
                  <span className="text-zinc-700">
                    Protects both customer and business
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}

        <div className="mt-16 text-center">
          <p className="text-sm text-zinc-400">
            Powered by <span className="font-medium">Bizula</span> • {slug}
          </p>
        </div>
      </div>
    </main>
  );
}

import { useEffect, useState } from "react";
import {
  ShieldCheck,
  Star,
  X,
  Clock,
  CalendarDays,
} from "lucide-react";
import { useParams } from "react-router-dom";

import { getPublicBusiness } from "../../services/book/publicBooking";
import {createPublicBooking} from "../../services/book/publicBooking";

// ==========================================
// PRICE HELPER
// ==========================================

const parseAmount = (value) => {
  return (
    Number(
      String(value ?? "")
        .replace("₦", "")
        .replace(/,/g, "")
        .trim()
    ) || 0
  );
};


export default function BookingPage() {
  const { slug } = useParams();

  const [business, setBusiness] = useState(null);

  const [selectedService, setSelectedService] =
    useState(null);

  const [loading, setLoading] = useState(true);

  const [submitting, setSubmitting] =
    useState(false);

  const [bookingSuccess, setBookingSuccess] =
    useState(false);

  const [error, setError] = useState("");

  const [bookingError, setBookingError] =
    useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    notes: "",
  });


  // ==========================================
  // LOAD BUSINESS
  // ==========================================

  useEffect(() => {
    const loadBusiness = async () => {
      try {
        setLoading(true);
        setError("");

        const data =
          await getPublicBusiness(slug);

        console.log(
          "Public business:",
          data
        );

        setBusiness(data.business);

      } catch (error) {
        console.error(
          "Error loading business:",
          error
        );

        setError(
          error.message ||
            "Unable to load business"
        );

      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      loadBusiness();
    }
  }, [slug]);


  // ==========================================
  // FORM CHANGE
  // ==========================================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };


  // ==========================================
  // SELECT SERVICE
  // ==========================================

  const openBooking = (service) => {
    setSelectedService(service);

    setBookingSuccess(false);
    setBookingError("");

    setTimeout(() => {
      document
        .getElementById("booking-form")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 100);
  };


  // ==========================================
  // CLOSE BOOKING
  // ==========================================

  const closeBooking = () => {
    setSelectedService(null);

    setBookingSuccess(false);
    setBookingError("");

    setForm({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      notes: "",
    });
  };


  // ==========================================
  // CREATE BOOKING
  // ==========================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedService) {
      return;
    }

    if (!business?.uid) {
      setBookingError(
        "Business ID is missing. Please refresh the page."
      );

      return;
    }


    try {
      setSubmitting(true);
      setBookingError("");


      const bookingData = {
        // Business owner
        vendorId: business.uid,

        // Selected service
        serviceId: selectedService.id,
        serviceName: selectedService.name,

        // Customer
        customerName: form.name,
        customerEmail: form.email,
        customerPhone: form.phone,

        // Appointment
        date: form.date,
        time: form.time,

        // Additional information
        notes: form.notes,

        // Money
        amount: parseAmount(
          selectedService.price
        ),

        reservationFee: parseAmount(
          selectedService.reservationFee
        ),
      };


      console.log(
        "Sending booking:",
        bookingData
      );


      const result =
        await createBooking(
          bookingData
        );


      console.log(
        "Booking created:",
        result
      );


      setBookingSuccess(true);

    } catch (error) {
      console.error(
        "Booking error:",
        error
      );

      setBookingError(
        error.message ||
          "Unable to create booking"
      );

    } finally {
      setSubmitting(false);
    }
  };


  // ==========================================
  // LOADING
  // ==========================================

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-zinc-50">

        <p className="text-zinc-500">
          Loading business...
        </p>

      </main>
    );
  }


  // ==========================================
  // ERROR
  // ==========================================

  if (error || !business) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-zinc-50 px-6">

        <div className="text-center">

          <h1 className="text-3xl font-bold text-zinc-900">
            Business not found
          </h1>

          <p className="mt-3 text-zinc-500">
            {error ||
              "This booking page does not exist."}
          </p>

        </div>

      </main>
    );
  }


  return (
    <main className="min-h-screen bg-zinc-50">

      <div className="mx-auto max-w-5xl px-6 py-16">


        {/* =====================================
            BUSINESS HEADER
        ====================================== */}

        <div className="text-center">

          <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-[28px] bg-black text-4xl font-bold text-white">

            {business.name
              ?.charAt(0)
              ?.toUpperCase()}

          </div>


          <h1 className="text-5xl font-bold tracking-tight text-zinc-900">

            {business.name}

          </h1>


          <p className="mt-4 text-lg text-zinc-500">

            {business.tagline ||
              "Book a service with us."}

          </p>


          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-5 py-3 shadow-sm">

            <Star
              size={18}
              className="fill-yellow-400 text-yellow-400"
            />

            <span className="font-semibold">
              {business.rating || "New"}
            </span>

            {business.reviews !== undefined && (
              <span className="text-zinc-500">
                ({business.reviews} Reviews)
              </span>
            )}

          </div>

        </div>


        {/* =====================================
            SERVICES
        ====================================== */}

        <div className="mt-20 mb-10 text-center">

          <h2 className="text-4xl font-bold text-zinc-900">
            How can we help you today?
          </h2>

          <p className="mt-4 text-lg text-zinc-500">
            Choose a service below to begin your booking.
          </p>

        </div>


        <div className="space-y-6">

          {business.services?.length > 0 ? (

            business.services.map((service) => (

              <div
                key={service.id}
                onClick={() =>
                  openBooking(service)
                }
                className="group w-full cursor-pointer rounded-[32px] border border-zinc-200 bg-white p-10 text-left transition-all duration-300 hover:border-black hover:shadow-xl"
              >

                <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">

                  <div className="flex-1">

                    <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-600">

                      <Clock size={15} />

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

                      ₦
                      {parseAmount(
                        service.price
                      ).toLocaleString()}

                    </h2>


                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();

                        openBooking(service);
                      }}
                      className="rounded-2xl bg-black px-8 py-4 font-medium text-white transition hover:bg-zinc-800"
                    >

                      Continue Booking →

                    </button>

                  </div>

                </div>

              </div>

            ))

          ) : (

            <div className="rounded-[32px] border border-zinc-200 bg-white p-12 text-center">

              <h3 className="text-xl font-semibold">
                No services available
              </h3>

              <p className="mt-2 text-zinc-500">
                This business hasn't added any services yet.
              </p>

            </div>

          )}

        </div>


        {/* =====================================
            BOOKING FORM
        ====================================== */}

        {selectedService && (

          <section
            id="booking-form"
            className="mt-16 scroll-mt-10"
          >

            <div className="rounded-[32px] border border-zinc-200 bg-white shadow-sm">


              {/* HEADER */}

              <div className="flex items-start justify-between border-b border-zinc-200 p-8">

                <div>

                  <p className="text-sm font-medium text-zinc-500">
                    You're booking
                  </p>

                  <h2 className="mt-2 text-3xl font-bold text-zinc-900">
                    {selectedService.name}
                  </h2>

                  <p className="mt-2 text-zinc-500">

                    {selectedService.duration}

                    {" • "}

                    ₦
                    {parseAmount(
                      selectedService.price
                    ).toLocaleString()}

                  </p>

                </div>


                <button
                  type="button"
                  onClick={closeBooking}
                  className="rounded-xl p-2 transition hover:bg-zinc-100"
                >

                  <X size={22} />

                </button>

              </div>


              {/* SUCCESS */}

              {bookingSuccess && (

                <div className="m-8 rounded-2xl border border-green-200 bg-green-50 p-6">

                  <h3 className="text-lg font-semibold text-green-800">
                    Booking created successfully 🎉
                  </h3>

                  <p className="mt-2 text-sm text-green-700">
                    Your booking has been sent to the business.
                  </p>

                  <button
                    type="button"
                    onClick={closeBooking}
                    className="mt-4 rounded-xl bg-black px-5 py-3 text-sm font-medium text-white"
                  >
                    Done
                  </button>

                </div>

              )}


              {/* FORM */}

              {!bookingSuccess && (

                <form
                  onSubmit={handleSubmit}
                  className="space-y-6 p-8"
                >

                  {/* NAME */}

                  <div>

                    <label className="mb-2 block text-sm font-medium">
                      Your Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="w-full rounded-2xl border border-zinc-200 px-4 py-3 outline-none focus:border-black"
                    />

                  </div>


                  {/* EMAIL */}

                  <div>

                    <label className="mb-2 block text-sm font-medium">
                      Email Address
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="w-full rounded-2xl border border-zinc-200 px-4 py-3 outline-none focus:border-black"
                    />

                  </div>


                  {/* PHONE */}

                  <div>

                    <label className="mb-2 block text-sm font-medium">
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="08012345678"
                      required
                      className="w-full rounded-2xl border border-zinc-200 px-4 py-3 outline-none focus:border-black"
                    />

                  </div>


                  {/* DATE + TIME */}

                  <div className="grid gap-5 sm:grid-cols-2">

                    <div>

                      <label className="mb-2 block text-sm font-medium">
                        Date
                      </label>

                      <div className="relative">

                        <CalendarDays
                          size={18}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
                        />

                        <input
                          type="date"
                          name="date"
                          value={form.date}
                          onChange={handleChange}
                          required
                          className="w-full rounded-2xl border border-zinc-200 py-3 pl-11 pr-4 outline-none focus:border-black"
                        />

                      </div>

                    </div>


                    <div>

                      <label className="mb-2 block text-sm font-medium">
                        Time
                      </label>

                      <div className="relative">

                        <Clock
                          size={18}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
                        />

                        <input
                          type="time"
                          name="time"
                          value={form.time}
                          onChange={handleChange}
                          required
                          className="w-full rounded-2xl border border-zinc-200 py-3 pl-11 pr-4 outline-none focus:border-black"
                        />

                      </div>

                    </div>

                  </div>


                  {/* NOTES */}

                  <div>

                    <label className="mb-2 block text-sm font-medium">
                      Notes
                    </label>

                    <textarea
                      name="notes"
                      value={form.notes}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Anything you'd like the business to know?"
                      className="w-full resize-none rounded-2xl border border-zinc-200 px-4 py-3 outline-none focus:border-black"
                    />

                  </div>


                  {/* RESERVATION FEE */}

                  <div className="rounded-2xl bg-zinc-50 p-5">

                    <div className="flex items-center justify-between">

                      <div>

                        <p className="font-medium">
                          Reservation Fee
                        </p>

                        <p className="mt-1 text-sm text-zinc-500">
                          Deducted from your final payment.
                        </p>

                      </div>


                      <p className="text-xl font-bold">

                        ₦
                        {parseAmount(
                          selectedService.reservationFee
                        ).toLocaleString()}

                      </p>

                    </div>

                  </div>


                  {/* ERROR */}

                  {bookingError && (

                    <div className="rounded-2xl bg-red-50 p-4 text-sm text-red-600">

                      {bookingError}

                    </div>

                  )}


                  {/* SUBMIT */}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full rounded-2xl bg-black py-4 font-medium text-white transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-50"
                  >

                    {submitting
                      ? "Creating Booking..."
                      : "Confirm Booking"}

                  </button>

                </form>

              )}

            </div>

          </section>

        )}


        {/* =====================================
            SECURE BOOKING
        ====================================== */}

        <div className="mt-16 rounded-[32px] border border-zinc-200 bg-white p-10">

          <div className="flex items-start gap-5">

            <div className="rounded-2xl bg-zinc-100 p-4">

              <ShieldCheck
                size={26}
                className="text-zinc-900"
              />

            </div>


            <div>

              <h2 className="text-2xl font-semibold">
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

                  <span>
                    Secure your reservation
                  </span>
                </div>


                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-black" />

                  <span>
                    Deducted from your final payment
                  </span>
                </div>


                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-black" />

                  <span>
                    Protects both customer and business
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>


        {/* FOOTER */}

        <div className="mt-16 text-center">

          <p className="text-sm text-zinc-400">

            Powered by{" "}
            <span className="font-medium">
              Bizula
            </span>

            {" • "}

            {slug}

          </p>

        </div>

      </div>

    </main>
  );
}


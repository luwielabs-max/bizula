import { X, Calendar, Clock, User, Wallet } from "lucide-react";

export default function BookingDetailsDrawer({
  booking,
  open,
  onClose,
}) {
    if (!open) return null;
  return (
    <>
      {/* Backdrop */}

      <div
        onClick={onClose}
        className={`
          fixed inset-0 z-40 bg-black/30 transition
          ${open ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      />

      {/* Drawer */}

      <div
        className={`
          fixed top-0 right-0 z-50 h-screen w-full max-w-md
          bg-white shadow-2xl transition-transform duration-300
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >

        {booking && (

          <>

            <div className="flex items-center justify-between border-b border-zinc-200 p-6">

              <div>

                <h2 className="text-2xl font-semibold">
                  {booking.customer}
                </h2>

                <p className="mt-1 text-zinc-500">
                  Booking Details
                </p>

              </div>

              <button
                onClick={onClose}
                className="rounded-xl p-2 hover:bg-zinc-100"
              >
                <X size={20} />
              </button>

            </div>

            <div className="space-y-8 p-6">

              <div className="flex items-center gap-4">

                <User size={20} />

                <div>

                  <p className="text-sm text-zinc-500">
                    Service
                  </p>

                  <h3 className="font-medium">
                    {booking.service}
                  </h3>

                </div>

              </div>

              <div className="flex items-center gap-4">

                <Calendar size={20} />

                <div>

                  <p className="text-sm text-zinc-500">
                    Date
                  </p>

                  <h3 className="font-medium">
                    {booking.date}
                  </h3>

                </div>

              </div>

              <div className="flex items-center gap-4">

                <Clock size={20} />

                <div>

                  <p className="text-sm text-zinc-500">
                    Time
                  </p>

                  <h3 className="font-medium">
                    {booking.time}
                  </h3>

                </div>

              </div>

              <div className="flex items-center gap-4">

                <Wallet size={20} />

                <div>

                  <p className="text-sm text-zinc-500">
                    Amount
                  </p>

                  <h3 className="font-medium">
                    {booking.amount}
                  </h3>

                </div>

              </div>

              <div>

                <p className="text-sm text-zinc-500">
                  Status
                </p>

                <div className="mt-2 inline-flex rounded-full bg-green-100 px-4 py-2 text-green-700">

                  {booking.status}

                </div>

              </div>

            </div>

            <div className="absolute bottom-0 left-0 right-0 border-t border-zinc-200 bg-white p-6">

              <div className="flex gap-4">

                <button className="flex-1 rounded-2xl border border-zinc-200 py-3 font-medium hover:bg-zinc-50">

                  Edit

                </button>

                <button className="flex-1 rounded-2xl bg-black py-3 font-medium text-white">

                  Mark Complete

                </button>

              </div>

            </div>

          </>

        )}

      </div>
    </>
  );
}
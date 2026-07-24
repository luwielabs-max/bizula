import { X } from "lucide-react";

export default function CreateBookingDrawer({
  open,
  onClose,
}) {

  if (!open) return null;

  return (
    <>
      {/* Backdrop */}

      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/30 transition-all duration-300 ${
          open
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      />

      {/* Drawer */}

      <aside
        className={`fixed top-0 right-0 z-50 h-screen w-full max-w-lg bg-white shadow-2xl transition-transform duration-300 ${
          open
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">

          {/* Header */}

          <div className="flex items-center justify-between border-b border-zinc-200 px-8 py-6">

            <div>

              <h2 className="text-2xl font-semibold text-zinc-900">
                Create Booking
              </h2>

              <p className="mt-1 text-sm text-zinc-500">
                Create a booking on behalf of a customer.
              </p>

            </div>

            <button
              onClick={onClose}
              className="rounded-xl p-2 transition hover:bg-zinc-100"
            >
              <X size={22} />
            </button>

          </div>

          {/* Body */}

          <div className="flex-1 space-y-6 overflow-y-auto px-8 py-8">

            <div>

              <label className="mb-2 block text-sm font-medium">
                Customer Name
              </label>

              <input
                type="text"
                placeholder="John Doe"
                className="w-full rounded-2xl border border-zinc-200 px-4 py-3 outline-none focus:border-black"
              />

            </div>

            <div>

              <label className="mb-2 block text-sm font-medium">
                Service
              </label>

              <select className="w-full rounded-2xl border border-zinc-200 px-4 py-3 outline-none focus:border-black">

                <option>Select Service</option>

              </select>

            </div>

            <div className="grid grid-cols-2 gap-4">

              <div>

                <label className="mb-2 block text-sm font-medium">
                  Date
                </label>

                <input
                  type="date"
                  className="w-full rounded-2xl border border-zinc-200 px-4 py-3 outline-none focus:border-black"
                />

              </div>

              <div>

                <label className="mb-2 block text-sm font-medium">
                  Time
                </label>

                <input
                  type="time"
                  className="w-full rounded-2xl border border-zinc-200 px-4 py-3 outline-none focus:border-black"
                />

              </div>

            </div>

            <div>

              <label className="mb-2 block text-sm font-medium">
                Staff
              </label>

              <select className="w-full rounded-2xl border border-zinc-200 px-4 py-3 outline-none focus:border-black">

                <option>Assign Staff (Optional)</option>

              </select>

            </div>

            <div>

              <label className="mb-2 block text-sm font-medium">
                Notes
              </label>

              <textarea
                rows={5}
                placeholder="Additional information..."
                className="w-full resize-none rounded-2xl border border-zinc-200 px-4 py-3 outline-none focus:border-black"
              />

            </div>

          </div>

          {/* Footer */}

          <div className="flex justify-end gap-4 border-t border-zinc-200 px-8 py-6">

            <button
              onClick={onClose}
              className="rounded-2xl border border-zinc-200 px-6 py-3 transition hover:bg-zinc-100"
            >
              Cancel
            </button>

            <button className="rounded-2xl bg-black px-6 py-3 text-white transition hover:bg-zinc-800">

              Create Booking

            </button>

          </div>

        </div>
      </aside>
    </>
  );
}
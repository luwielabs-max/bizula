import { useState } from "react";
import { X } from "lucide-react";

export default function CreateBookingDrawer({
  open,
  onClose,
  onCreate,
}) {
  const [form, setForm] = useState({
    customer: "",
    service: "",
    date: "",
    time: "",
    amount: "",
    notes: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !form.customer ||
      !form.service ||
      !form.date ||
      !form.time
    ) {
      alert(
        "Please fill in customer, service, date and time."
      );

      return;
    }

    try {
      setLoading(true);

      await onCreate({
        customer: form.customer,
        service: form.service,
        date: form.date,
        time: form.time,
        amount: Number(form.amount) || 0,
        notes: form.notes,
        status: "pending",
      });

      // Reset form after successful creation

      setForm({
        customer: "",
        service: "",
        date: "",
        time: "",
        amount: "",
        notes: "",
      });

    } catch (error) {
      console.error(
        "Create booking error:",
        error
      );
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <>
      {/* Backdrop */}

      <div
        onClick={onClose}
        className="
          fixed
          inset-0
          z-40
          bg-black/30
          transition-all
          duration-300
        "
      />

      {/* Drawer */}

      <aside
        className="
          fixed
          top-0
          right-0
          z-50
          h-screen
          w-full
          max-w-lg
          bg-white
          shadow-2xl
        "
      >
        <form
          onSubmit={handleSubmit}
          className="flex h-full flex-col"
        >

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
              type="button"
              onClick={onClose}
              className="rounded-xl p-2 transition hover:bg-zinc-100"
            >
              <X size={22} />
            </button>

          </div>


          {/* Body */}

          <div className="flex-1 space-y-6 overflow-y-auto px-8 py-8">

            {/* Customer */}

            <div>

              <label className="mb-2 block text-sm font-medium">
                Customer Name
              </label>

              <input
                type="text"
                name="customer"
                value={form.customer}
                onChange={handleChange}
                placeholder="John Doe"
                className="
                  w-full
                  rounded-2xl
                  border
                  border-zinc-200
                  px-4
                  py-3
                  outline-none
                  focus:border-black
                "
              />

            </div>


            {/* Service */}

            <div>

              <label className="mb-2 block text-sm font-medium">
                Service
              </label>

              <input
                type="text"
                name="service"
                value={form.service}
                onChange={handleChange}
                placeholder="Haircut"
                className="
                  w-full
                  rounded-2xl
                  border
                  border-zinc-200
                  px-4
                  py-3
                  outline-none
                  focus:border-black
                "
              />

            </div>


            {/* Date + Time */}

            <div className="grid grid-cols-2 gap-4">

              <div>

                <label className="mb-2 block text-sm font-medium">
                  Date
                </label>

                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  className="
                    w-full
                    rounded-2xl
                    border
                    border-zinc-200
                    px-4
                    py-3
                    outline-none
                    focus:border-black
                  "
                />

              </div>


              <div>

                <label className="mb-2 block text-sm font-medium">
                  Time
                </label>

                <input
                  type="time"
                  name="time"
                  value={form.time}
                  onChange={handleChange}
                  className="
                    w-full
                    rounded-2xl
                    border
                    border-zinc-200
                    px-4
                    py-3
                    outline-none
                    focus:border-black
                  "
                />

              </div>

            </div>


            {/* Amount */}

            <div>

              <label className="mb-2 block text-sm font-medium">
                Amount
              </label>

              <input
                type="number"
                name="amount"
                value={form.amount}
                onChange={handleChange}
                placeholder="5000"
                min="0"
                className="
                  w-full
                  rounded-2xl
                  border
                  border-zinc-200
                  px-4
                  py-3
                  outline-none
                  focus:border-black
                "
              />

            </div>


            {/* Notes */}

            <div>

              <label className="mb-2 block text-sm font-medium">
                Notes
              </label>

              <textarea
                name="notes"
                value={form.notes}
                onChange={handleChange}
                rows={5}
                placeholder="Additional information..."
                className="
                  w-full
                  resize-none
                  rounded-2xl
                  border
                  border-zinc-200
                  px-4
                  py-3
                  outline-none
                  focus:border-black
                "
              />

            </div>

          </div>


          {/* Footer */}

          <div className="flex justify-end gap-4 border-t border-zinc-200 px-8 py-6">

            <button
              type="button"
              onClick={onClose}
              disabled={loading}
              className="
                rounded-2xl
                border
                border-zinc-200
                px-6
                py-3
                transition
                hover:bg-zinc-100
                disabled:opacity-50
              "
            >
              Cancel
            </button>


            <button
              type="submit"
              disabled={loading}
              className="
                rounded-2xl
                bg-black
                px-6
                py-3
                text-white
                transition
                hover:bg-zinc-800
                disabled:cursor-not-allowed
                disabled:opacity-50
              "
            >
              {loading
                ? "Creating..."
                : "Create Booking"}
            </button>

          </div>

        </form>
      </aside>
    </>
  );
}
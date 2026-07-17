import { useState } from "react";
import { X } from "lucide-react";

import { LButton } from "../../luwie-ui/src";

export default function CreateServiceDrawer({
    open,
    onClose,
    onCreate,
}) {
    const handleSubmit = () => {
    onCreate(form);

    setForm({
        name: "",
        description: "",
        category: "",
        duration: "",
        price: "",
        reservationFee: "",
        status: "Active",
    });

    onClose();
};

  const [form, setForm] = useState({
    name: "",
    description: "",
    category: "",
    duration: "",
    price: "",
    reservationFee: "",
    status: "Active",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  if (!open) return null;

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className="fixed inset-0 z-40 bg-black/40"
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 z-50 h-screen w-full max-w-xl overflow-y-auto bg-white shadow-2xl">

        {/* Header */}
        <div className="flex items-center justify-between border-b border-zinc-200 px-6 py-5">

          <div>
            <h2 className="text-2xl font-bold">
              Create Service
            </h2>

            <p className="mt-1 text-sm text-zinc-500">
              Add a service customers can book.
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-2 hover:bg-zinc-100"
          >
            <X size={20} />
          </button>

        </div>

        {/* Form */}
        <div className="space-y-5 p-6">

          <div>
            <label className="mb-2 block text-sm font-medium">
              Service Name
            </label>

            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-xl border border-zinc-200 px-4 py-3 outline-none focus:border-black"
              placeholder="Website Consultation"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Description
            </label>

            <textarea
              rows="4"
              name="description"
              value={form.description}
              onChange={handleChange}
              className="w-full rounded-xl border border-zinc-200 px-4 py-3 outline-none focus:border-black"
              placeholder="Describe your service..."
            />
          </div>

          <div className="grid gap-5 md:grid-cols-2">

            <div>
              <label className="mb-2 block text-sm font-medium">
                Category
              </label>

              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                className="w-full rounded-xl border border-zinc-200 px-4 py-3 outline-none focus:border-black"
              >
                <option value="">Select Category</option>
                <option>Consultation</option>
                <option>Branding</option>
                <option>Design</option>
                <option>Audit</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Duration
              </label>

              <input
                name="duration"
                value={form.duration}
                onChange={handleChange}
                className="w-full rounded-xl border border-zinc-200 px-4 py-3 outline-none focus:border-black"
                placeholder="60 mins"
              />
            </div>

          </div>

          <div className="grid gap-5 md:grid-cols-2">

            <div>
              <label className="mb-2 block text-sm font-medium">
                Price
              </label>

              <input
                name="price"
                value={form.price}
                onChange={handleChange}
                className="w-full rounded-xl border border-zinc-200 px-4 py-3 outline-none focus:border-black"
                placeholder="₦15,000"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Reservation Fee
              </label>

              <input
                name="reservationFee"
                value={form.reservationFee}
                onChange={handleChange}
                className="w-full rounded-xl border border-zinc-200 px-4 py-3 outline-none focus:border-black"
                placeholder="₦5,000"
              />
            </div>

          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Status
            </label>

            <select
              name="status"
              value={form.status}
              onChange={handleChange}
              className="w-full rounded-xl border border-zinc-200 px-4 py-3 outline-none focus:border-black"
            >
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>

        </div>

        {/* Footer */}
        <div className="sticky bottom-0 flex justify-end gap-3 border-t border-zinc-200 bg-white px-6 py-5">

          <LButton
            variant="secondary"
            onClick={onClose}
          >
            Cancel
          </LButton>

<LButton onClick={handleSubmit}>
    Create Service
</LButton>

        </div>

      </div>
    </>
  );
}
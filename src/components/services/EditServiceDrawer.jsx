import { useEffect, useState } from "react";
import { X, Trash2 } from "lucide-react";

import { LButton } from "../../luwie-ui/src";
import DeleteServiceModal from "./DeleteServiceModal";

export default function EditServiceDrawer({
  open,
  service,
  onClose,
  onUpdate,
  onDelete,
}) {
  const [form, setForm] = useState({
    name: "",
    description: "",
    category: "",
    duration: "",
    price: "",
    reservationFee: "",
    status: "Active",
  });

  const [showDelete, setShowDelete] = useState(false);

  useEffect(() => {
    if (service) {
      setForm(service);
    }
  }, [service]);

  if (!open || !service) return null;

  const handleSave = () => {
    onUpdate(service.id, form);
    onClose();
  };

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-40 bg-black/40"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 z-50 h-screen w-full max-w-xl overflow-y-auto bg-white shadow-2xl">

        {/* Header */}
        <div className="flex items-center justify-between border-b border-zinc-200 p-6">

          <div>
            <h2 className="text-2xl font-bold">
              Edit Service
            </h2>

            <p className="mt-1 text-sm text-zinc-500">
              Update your service details.
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
              value={form.name}
              onChange={(e) =>
                setForm({
                  ...form,
                  name: e.target.value,
                })
              }
              className="w-full rounded-xl border border-zinc-200 px-4 py-3 outline-none focus:border-black"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Description
            </label>

            <textarea
              rows={4}
              value={form.description}
              onChange={(e) =>
                setForm({
                  ...form,
                  description: e.target.value,
                })
              }
              className="w-full rounded-xl border border-zinc-200 px-4 py-3 outline-none focus:border-black"
            />
          </div>

          <div className="grid gap-5 md:grid-cols-2">

            <div>
              <label className="mb-2 block text-sm font-medium">
                Category
              </label>

              <input
                value={form.category}
                onChange={(e) =>
                  setForm({
                    ...form,
                    category: e.target.value,
                  })
                }
                className="w-full rounded-xl border border-zinc-200 px-4 py-3 outline-none focus:border-black"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Duration
              </label>

              <input
                value={form.duration}
                onChange={(e) =>
                  setForm({
                    ...form,
                    duration: e.target.value,
                  })
                }
                className="w-full rounded-xl border border-zinc-200 px-4 py-3 outline-none focus:border-black"
              />
            </div>

          </div>

          <div className="grid gap-5 md:grid-cols-2">

            <div>
              <label className="mb-2 block text-sm font-medium">
                Price
              </label>

              <input
                value={form.price}
                onChange={(e) =>
                  setForm({
                    ...form,
                    price: e.target.value,
                  })
                }
                className="w-full rounded-xl border border-zinc-200 px-4 py-3 outline-none focus:border-black"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Reservation Fee
              </label>

              <input
                value={form.reservationFee}
                onChange={(e) =>
                  setForm({
                    ...form,
                    reservationFee: e.target.value,
                  })
                }
                className="w-full rounded-xl border border-zinc-200 px-4 py-3 outline-none focus:border-black"
              />
            </div>

          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Status
            </label>

            <select
              value={form.status}
              onChange={(e) =>
                setForm({
                  ...form,
                  status: e.target.value,
                })
              }
              className="w-full rounded-xl border border-zinc-200 px-4 py-3 outline-none focus:border-black"
            >
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>

        </div>

        {/* Footer */}
        <div className="sticky bottom-0 flex items-center justify-between border-t border-zinc-200 bg-white p-6">

          <button
            onClick={() => setShowDelete(true)}
            className="flex items-center gap-2 rounded-xl border border-red-200 px-4 py-3 text-red-600 transition hover:bg-red-50"
          >
            <Trash2 size={18} />
            Delete Service
          </button>

          <div className="flex gap-3">

            <LButton
              variant="secondary"
              onClick={onClose}
            >
              Cancel
            </LButton>

            <LButton onClick={handleSave}>
              Save Changes
            </LButton>

          </div>

        </div>

      </div>

      <DeleteServiceModal
        open={showDelete}
        service={service}
        onClose={() => setShowDelete(false)}
        onConfirm={onDelete}
      />
    </>
  );
}
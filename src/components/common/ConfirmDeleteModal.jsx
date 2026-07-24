import { AlertTriangle } from "lucide-react";
import { LButton } from "../../luwie-ui/src";

export default function ConfirmDeleteModal({
  open,
  title = "Delete Item",
  message = "Are you sure you want to delete this item? This action cannot be undone.",
  onClose,
  onConfirm,
}) {
  if (!open) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-40 bg-black/40"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white shadow-2xl">

        <div className="p-8">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-100">

            <AlertTriangle
              size={32}
              className="text-red-600"
            />

          </div>

          <h2 className="mt-6 text-center text-2xl font-bold">
            {title}
          </h2>

          <p className="mt-3 text-center text-zinc-500">
            {message}
          </p>

          <div className="mt-8 flex justify-end gap-3">

            <LButton
              variant="secondary"
              onClick={onClose}
            >
              Cancel
            </LButton>

            <LButton
              onClick={onConfirm}
            >
              Delete
            </LButton>

          </div>

        </div>

      </div>
    </>
  );
}
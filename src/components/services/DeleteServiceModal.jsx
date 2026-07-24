import { LButton } from "../../luwie-ui/src";

export default function DeleteServiceModal({
  open,
  service,
  onClose,
  onConfirm,
}) {
  if (!open || !service) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-50 bg-black/40"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed left-1/2 top-1/2 z-[60] w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white shadow-2xl">

        {/* Header */}
        <div className="border-b border-zinc-200 px-6 py-5">

          <h2 className="text-xl font-bold text-zinc-900">
            Delete Service
          </h2>

          <p className="mt-2 text-sm text-zinc-500">
            Are you sure you want to delete{" "}
            <span className="font-semibold text-zinc-900">
              {service.name}
            </span>
            ?
          </p>

          <p className="mt-2 text-sm text-red-500">
            This action cannot be undone.
          </p>

        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 px-6 py-5">

          <LButton
            variant="secondary"
            onClick={onClose}
          >
            Cancel
          </LButton>

          <LButton
            onClick={() => {
              onConfirm(service.id);
              onClose();
            }}
            className="bg-red-600 hover:bg-red-700"
          >
            Delete Service
          </LButton>

        </div>

      </div>
    </>
  );
}
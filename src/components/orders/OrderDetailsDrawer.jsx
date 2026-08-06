import { X } from "lucide-react";

import { LButton } from "../../luwie-ui/src";
import ConfirmDeleteModal from "../common/ConfirmDeleteModal";

export default function OrderDetailsDrawer({
  order,
  open,
  onClose,
  onConfirm,
  onComplete,
  onCancel,
  onRequestDelete,
  deleteConfirmOpen,
  onDelete,
  onCloseDeleteConfirm,
  error,
}) {
  if (!open || !order) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 flex justify-end bg-black/30">
        <div className="h-full w-full max-w-xl border-l border-zinc-200 bg-white p-6 shadow-2xl">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-zinc-900">Order Details</h2>
              <p className="mt-1 text-sm text-zinc-500">
                Review the selected order and take lifecycle actions.
              </p>
            </div>

            <button
              onClick={onClose}
              className="rounded-full p-2 transition hover:bg-zinc-100"
            >
              <X size={20} className="text-zinc-600" />
            </button>
          </div>

          <div className="mt-8 space-y-4 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <p className="text-sm text-zinc-500">Customer</p>
                <p className="mt-2 font-medium text-zinc-900">{order.customerName}</p>
              </div>

              <div>
                <p className="text-sm text-zinc-500">Product</p>
                <p className="mt-2 font-medium text-zinc-900">{order.productName}</p>
              </div>

              <div>
                <p className="text-sm text-zinc-500">Quantity</p>
                <p className="mt-2 font-medium text-zinc-900">{order.quantity}</p>
              </div>

              <div>
                <p className="text-sm text-zinc-500">Unit Price</p>
                <p className="mt-2 font-medium text-zinc-900">
                  {order.amount && order.quantity
                    ? `₦${(Number(order.amount) / order.quantity).toLocaleString()}`
                    : "—"}
                </p>
              </div>

              <div>
                <p className="text-sm text-zinc-500">Total Amount</p>
                <p className="mt-2 font-medium text-zinc-900">{order.amount}</p>
              </div>

              <div>
                <p className="text-sm text-zinc-500">Commitment Fee</p>
                <p className="mt-2 font-medium text-zinc-900">{order.commitmentFee}</p>
              </div>

              <div>
                <p className="text-sm text-zinc-500">Remaining Balance</p>
                <p className="mt-2 font-medium text-zinc-900">{order.balance}</p>
              </div>

              <div>
                <p className="text-sm text-zinc-500">Order Status</p>
                <p className="mt-2 font-medium text-zinc-900">{order.status}</p>
              </div>

              <div>
                <p className="text-sm text-zinc-500">Payment Status</p>
                <p className="mt-2 font-medium text-zinc-900">{order.paymentStatus}</p>
              </div>

              <div>
                <p className="text-sm text-zinc-500">Created Date</p>
                <p className="mt-2 font-medium text-zinc-900">{order.createdAt}</p>
              </div>
            </div>
          </div>

          {error ? (
            <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {error}
            </div>
          ) : null}

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-between">
            <button
              type="button"
              onClick={onRequestDelete}
              className="rounded-xl border border-red-200 px-4 py-3 text-red-600 transition hover:bg-red-50"
            >
              Delete Order
            </button>

            <div className="flex flex-col gap-3 sm:flex-row">
              <LButton variant="secondary" onClick={onClose}>
                Close
              </LButton>

              <LButton onClick={onCancel} disabled={order.status === "Completed"}>
                Cancel
              </LButton>

              <LButton onClick={onConfirm} disabled={order.status !== "Pending"}>
                Confirm
              </LButton>

              <LButton onClick={onComplete} disabled={order.status !== "Confirmed"}>
                Complete
              </LButton>
            </div>
          </div>
        </div>
      </div>

      <ConfirmDeleteModal
        open={deleteConfirmOpen}
        title="Delete Order"
        message={`Are you sure you want to delete this order? This action cannot be undone.`}
        onClose={onCloseDeleteConfirm}
        onConfirm={onDelete}
      />
    </>
  );
}
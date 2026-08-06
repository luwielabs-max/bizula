import { X } from "lucide-react";

import { LButton } from "../../luwie-ui/src";

export default function SaleDetailsDrawer({
  sale,
  open,
  onClose,
  onRefund,
  error,
}) {
  if (!open || !sale) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/30">
      <div className="h-full w-full max-w-xl border-l border-zinc-200 bg-white p-6 shadow-2xl">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-zinc-900">Sale Details</h2>
            <p className="mt-1 text-sm text-zinc-500">
              Review the transaction and refund it if needed.
            </p>
          </div>

          <button
            type="button"
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
              <p className="mt-2 font-medium text-zinc-900">{sale.customerName}</p>
            </div>
            <div>
              <p className="text-sm text-zinc-500">Product</p>
              <p className="mt-2 font-medium text-zinc-900">{sale.productName}</p>
            </div>
            <div>
              <p className="text-sm text-zinc-500">Quantity</p>
              <p className="mt-2 font-medium text-zinc-900">{sale.quantity}</p>
            </div>
            <div>
              <p className="text-sm text-zinc-500">Total</p>
              <p className="mt-2 font-medium text-zinc-900">₦{Number(sale.total || 0).toLocaleString()}</p>
            </div>
            <div>
              <p className="text-sm text-zinc-500">Payment method</p>
              <p className="mt-2 font-medium text-zinc-900">{sale.paymentMethod || "—"}</p>
            </div>
            <div>
              <p className="text-sm text-zinc-500">Status</p>
              <p className="mt-2 font-medium text-zinc-900">{sale.status}</p>
            </div>
            <div>
              <p className="text-sm text-zinc-500">Source</p>
              <p className="mt-2 font-medium text-zinc-900">{sale.source || "—"}</p>
            </div>
            <div>
              <p className="text-sm text-zinc-500">Created</p>
              <p className="mt-2 font-medium text-zinc-900">{sale.createdAt}</p>
            </div>
          </div>
        </div>

        {error ? (
          <div className="mt-4 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        ) : null}

        <div className="mt-8 flex justify-end gap-3">
          <LButton variant="secondary" onClick={onClose}>
            Close
          </LButton>
          <LButton onClick={onRefund} disabled={sale.status === "Refunded"}>
            Refund Sale
          </LButton>
        </div>
      </div>
    </div>
  );
}

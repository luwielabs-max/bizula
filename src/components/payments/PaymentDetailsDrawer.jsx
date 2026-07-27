import { X } from "lucide-react";

import { LButton } from "../../luwie-ui/src";
import { formatCurrencyValue } from "../../utils/formatters";

export default function PaymentDetailsDrawer({ payment, open, onClose }) {
  if (!open || !payment) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/30">
      <div className="h-full w-full max-w-xl border-l border-zinc-200 bg-white p-6 shadow-2xl">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-zinc-900">Payment Details</h2>
            <p className="mt-1 text-sm text-zinc-500">
              Review the selected payment record and its related context.
            </p>
          </div>

          <button onClick={onClose} className="rounded-full p-2 transition hover:bg-zinc-100">
            <X size={20} className="text-zinc-600" />
          </button>
        </div>

        <div className="mt-8 space-y-4 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-sm text-zinc-500">Customer</p>
              <p className="mt-2 font-medium text-zinc-900">{payment.customerName}</p>
            </div>

            <div>
              <p className="text-sm text-zinc-500">Source</p>
              <p className="mt-2 font-medium text-zinc-900">{payment.source}</p>
            </div>

            <div>
              <p className="text-sm text-zinc-500">Related</p>
              <p className="mt-2 font-medium text-zinc-900">{payment.relatedReference}</p>
            </div>

            <div>
              <p className="text-sm text-zinc-500">Amount</p>
              <p className="mt-2 font-medium text-zinc-900">{formatCurrencyValue(payment.amount)}</p>
            </div>

            <div>
              <p className="text-sm text-zinc-500">Payment Method</p>
              <p className="mt-2 font-medium text-zinc-900">{payment.paymentMethod}</p>
            </div>

            <div>
              <p className="text-sm text-zinc-500">Status</p>
              <p className="mt-2 font-medium text-zinc-900">{payment.status}</p>
            </div>

            <div>
              <p className="text-sm text-zinc-500">Reference</p>
              <p className="mt-2 font-medium text-zinc-900">{payment.reference}</p>
            </div>

            <div>
              <p className="text-sm text-zinc-500">Date</p>
              <p className="mt-2 font-medium text-zinc-900">{payment.date}</p>
            </div>
          </div>

          <div>
            <p className="text-sm text-zinc-500">Notes</p>
            <p className="mt-2 text-sm leading-6 text-zinc-700">{payment.notes}</p>
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <LButton variant="secondary" onClick={onClose}>
            Close
          </LButton>
        </div>
      </div>
    </div>
  );
}

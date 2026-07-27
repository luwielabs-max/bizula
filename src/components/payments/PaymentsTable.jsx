import { Eye } from "lucide-react";

import { LBadge } from "../../luwie-ui/src";
import { formatCurrencyValue } from "../../utils/formatters";

const statusVariant = {
  Completed: "success",
  Pending: "warning",
  "Partially Paid": "info",
  Refunded: "danger",
};

export default function PaymentsTable({ payments, onSelect }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-[980px] w-full text-sm">
          <thead className="border-b border-zinc-200 bg-zinc-50 text-left text-zinc-600">
            <tr>
              <th className="px-4 py-4">Date</th>
              <th className="px-4 py-4">Customer</th>
              <th className="px-4 py-4">Source</th>
              <th className="px-4 py-4">Amount</th>
              <th className="px-4 py-4">Payment Method</th>
              <th className="px-4 py-4">Status</th>
              <th className="px-4 py-4">Reference</th>
              <th className="px-4 py-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {payments.map((payment) => (
              <tr key={payment.id} className="border-b border-zinc-100 transition hover:bg-zinc-50">
                <td className="px-4 py-5 whitespace-nowrap text-zinc-600">{payment.date}</td>
                <td className="px-4 py-5 font-medium text-zinc-900">{payment.customerName}</td>
                <td className="px-4 py-5 whitespace-nowrap text-zinc-600">{payment.source}</td>
                <td className="px-4 py-5 whitespace-nowrap font-semibold text-zinc-900">{formatCurrencyValue(payment.amount)}</td>
                <td className="px-4 py-5 whitespace-nowrap text-zinc-600">{payment.paymentMethod}</td>
                <td className="px-4 py-5 whitespace-nowrap">
                  <LBadge variant={statusVariant[payment.status] || "default"}>{payment.status}</LBadge>
                </td>
                <td className="px-4 py-5 whitespace-nowrap text-zinc-600">{payment.reference}</td>
                <td className="px-4 py-5 whitespace-nowrap">
                  <button
                    type="button"
                    onClick={() => onSelect(payment)}
                    className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-3 py-2 text-sm text-zinc-700 transition hover:bg-zinc-100"
                  >
                    <Eye size={16} />
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

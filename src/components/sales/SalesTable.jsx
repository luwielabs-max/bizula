import { ArrowRight } from "lucide-react";

export default function SalesTable({ sales, onSelect }) {
  if (!sales.length) {
    return (
      <div className="rounded-2xl border border-dashed border-zinc-300 bg-white p-10 text-center text-sm text-zinc-500">
        No sales yet.
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
      <table className="min-w-[760px] w-full divide-y divide-zinc-200 text-sm">
        <thead className="bg-zinc-50">
          <tr>
            <th className="px-4 py-3 text-left font-medium text-zinc-600">Customer</th>
            <th className="px-4 py-3 text-left font-medium text-zinc-600">Product</th>
            <th className="px-4 py-3 text-left font-medium text-zinc-600">Qty</th>
            <th className="px-4 py-3 text-left font-medium text-zinc-600">Total</th>
            <th className="px-4 py-3 text-left font-medium text-zinc-600">Method</th>
            <th className="px-4 py-3 text-left font-medium text-zinc-600">Status</th>
            <th className="px-4 py-3 text-left font-medium text-zinc-600" />
          </tr>
        </thead>
        <tbody className="divide-y divide-zinc-200 bg-white">
          {sales.map((sale) => (
            <tr key={sale.id} className="hover:bg-zinc-50">
              <td className="px-4 py-3 font-medium text-zinc-900">{sale.customerName}</td>
              <td className="px-4 py-3 text-zinc-600">{sale.productName}</td>
              <td className="px-4 py-3 text-zinc-600">{sale.quantity}</td>
              <td className="px-4 py-3 whitespace-nowrap text-zinc-600">₦{Number(sale.total || 0).toLocaleString()}</td>
              <td className="px-4 py-3 whitespace-nowrap text-zinc-600">{sale.paymentMethod || "—"}</td>
              <td className="px-4 py-3 whitespace-nowrap text-zinc-600">
                <span className="inline-flex items-center justify-center whitespace-nowrap rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-700">
                  {sale.status}
                </span>
              </td>
              <td className="px-4 py-3">
                <button
                  type="button"
                  onClick={() => onSelect(sale)}
                  className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-zinc-200 px-3 py-2 text-sm text-zinc-700 transition hover:bg-zinc-100"
                >
                  View
                  <ArrowRight size={14} />
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

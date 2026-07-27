export default function OrderTable({ orders, onSelect }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-[720px] w-full">
          <thead className="border-b border-zinc-200 bg-zinc-50">
            <tr className="text-left text-sm font-semibold text-zinc-600">
              <th className="px-6 py-4">Customer</th>
              <th className="px-6 py-4">Product</th>
              <th className="px-6 py-4">Quantity</th>
              <th className="px-6 py-4">Amount</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Created</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr
                key={order.id}
                onClick={() => onSelect(order)}
                className="cursor-pointer border-b border-zinc-100 transition hover:bg-zinc-50"
              >
                <td className="px-6 py-5 font-medium text-zinc-900">
                  {order.customerName}
                </td>
                <td className="px-6 py-5 text-zinc-600">{order.productName}</td>
                <td className="px-6 py-5 whitespace-nowrap">{order.quantity}</td>
                <td className="px-6 py-5 whitespace-nowrap">{order.amount}</td>
                <td className="px-6 py-5 whitespace-nowrap">
                  <span
                    className={`inline-flex items-center justify-center whitespace-nowrap rounded-full px-3 py-1 text-xs font-medium ${
                      order.status === "Completed"
                        ? "bg-green-100 text-green-700"
                        : order.status === "Confirmed"
                        ? "bg-blue-100 text-blue-700"
                        : order.status === "Cancelled"
                        ? "bg-red-100 text-red-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-5 text-zinc-600">{order.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
import { formatCurrencyValue, formatCompactNumber } from "../../utils/formatters";

export default function SalesStats({ sales }) {
  const totalRevenue = sales.reduce((sum, sale) => sum + Number(sale.total || 0), 0);
  const completed = sales.filter((sale) => sale.status === "Completed").length;
  const refunded = sales.filter((sale) => sale.status === "Refunded").length;
  const bestSale = sales.reduce((best, sale) => {
    if (!best) return sale;
    return Number(sale.total || 0) > Number(best.total || 0) ? sale : best;
  }, null);

  return (
    <div className="grid gap-4 md:grid-cols-3">
      <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
        <p className="text-sm text-zinc-500">Total revenue</p>
        <p className="mt-3 overflow-hidden text-ellipsis whitespace-nowrap text-2xl font-semibold text-zinc-900" title={totalRevenue.toLocaleString()}>
          {formatCurrencyValue(totalRevenue)}
        </p>
      </div>

      <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
        <p className="text-sm text-zinc-500">Completed sales</p>
        <p className="mt-3 overflow-hidden text-ellipsis whitespace-nowrap text-2xl font-semibold text-zinc-900" title={String(completed)}>
          {formatCompactNumber(completed)}
        </p>
      </div>

      <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
        <p className="text-sm text-zinc-500">Refunds</p>
        <p className="mt-3 overflow-hidden text-ellipsis whitespace-nowrap text-2xl font-semibold text-zinc-900" title={String(refunded)}>
          {formatCompactNumber(refunded)}
        </p>
      </div>

      {bestSale ? (
        <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 shadow-sm md:col-span-3">
          <p className="text-sm text-zinc-500">Largest sale</p>
          <p className="mt-2 overflow-hidden text-ellipsis whitespace-nowrap font-medium text-zinc-900" title={`${bestSale.productName} • ${bestSale.customerName} • ${Number(bestSale.total || 0).toLocaleString()}`}>
            {bestSale.productName} • {bestSale.customerName} • {formatCurrencyValue(Number(bestSale.total || 0))}
          </p>
        </div>
      ) : null}
    </div>
  );
}

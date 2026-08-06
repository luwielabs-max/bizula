import { LInput } from "../../luwie-ui/src";

export default function SalesFilters({
  sales,
  search,
  setSearch,
  status,
  setStatus,
  paymentMethod,
  setPaymentMethod,
}) {
  const statuses = ["All Status", "Completed", "Refunded"];
  const paymentOptions = ["All Payment Methods", "Cash", "Card", "Transfer"];

  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm sm:p-5">
      <div className="flex flex-wrap gap-3 md:grid md:grid-cols-3">
        <div className="min-w-[220px] flex-1 basis-full md:basis-auto">
          <LInput
          label="Search"
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search customer or product"
          />
        </div>

        <div className="min-w-[180px] flex-1 basis-[calc(50%-0.75rem)] md:basis-auto">
          <label className="mb-2 block text-sm font-medium text-zinc-700">Status</label>
          <select
            value={status}
            onChange={(event) => setStatus(event.target.value)}
            className="w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 outline-none focus:border-zinc-400"
          >
            {statuses.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div className="min-w-[180px] flex-1 basis-[calc(50%-0.75rem)] md:basis-auto">
          <label className="mb-2 block text-sm font-medium text-zinc-700">Payment method</label>
          <select
            value={paymentMethod}
            onChange={(event) => setPaymentMethod(event.target.value)}
            className="w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 outline-none focus:border-zinc-400"
          >
            {paymentOptions.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>

      <p className="mt-4 text-sm text-zinc-500">{sales.length} sales in view</p>
    </div>
  );
}

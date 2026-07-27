import { Plus } from "lucide-react";

import { LButton } from "../../luwie-ui/src";

export default function SalesHeader({ onCreateSale }) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900">Sales</h1>
        <p className="mt-1 text-sm text-zinc-500">
          Track completed transactions, manual walk-in sales, and refunds.
        </p>
      </div>

      <LButton onClick={onCreateSale}>
        <span className="flex items-center gap-2">
          <Plus size={16} />
          Create Sale
        </span>
      </LButton>
    </div>
  );
}

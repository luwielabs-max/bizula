import { CreditCard, RefreshCw } from "lucide-react";

import { LButton } from "../../luwie-ui/src";

export default function PaymentsHeader({ onRefresh }) {
  return (
    <div className="flex flex-col gap-6 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm lg:flex-row lg:items-center lg:justify-between">
      <div className="flex items-start gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-100">
          <CreditCard size={22} className="text-zinc-800" />
        </div>

        <div>
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900">Payments</h1>
          <p className="mt-1 text-sm text-zinc-500">
            Track payment activity, balances, and transaction status across orders, sales, and bookings.
          </p>
        </div>
      </div>

      <LButton onClick={onRefresh} variant="ghost" className="flex items-center gap-2 self-start lg:self-auto">
        <RefreshCw size={16} />
        Refresh
      </LButton>
    </div>
  );
}

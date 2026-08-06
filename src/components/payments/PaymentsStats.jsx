import { formatCurrencyValue, formatCompactNumber } from "../../utils/formatters";

export default function PaymentsStats({ payments }) {
  const totalRevenue = payments.reduce((sum, payment) => sum + Number(payment.amount || 0), 0);
  const outstandingBalance = payments.reduce((sum, payment) => sum + Number(payment.balance || 0), 0);
  const commitmentFees = payments.reduce((sum, payment) => sum + Number(payment.commitmentFee || 0), 0);
  const refundedAmount = payments.reduce((sum, payment) => {
    return payment.status === "Refunded" ? sum + Number(payment.amount || 0) : sum;
  }, 0);

  const stats = [
    {
      title: "Total Revenue",
      value: totalRevenue,
      money: true,
    },
    {
      title: "Outstanding Balance",
      value: outstandingBalance,
      money: true,
    },
    {
      title: "Commitment Fees",
      value: commitmentFees,
      money: true,
    },
    {
      title: "Refunded Amount",
      value: refundedAmount,
      money: true,
    },
  ];

  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="flex h-full flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm sm:p-6"
        >
          <p className="text-sm text-zinc-500">{stat.title}</p>

          <h2
            className="mt-3 overflow-hidden text-ellipsis whitespace-nowrap text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl"
            title={stat.value.toLocaleString()}
          >
            {formatCurrencyValue(stat.value)}
          </h2>
        </div>
      ))}
    </div>
  );
}

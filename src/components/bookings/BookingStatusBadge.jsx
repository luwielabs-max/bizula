export default function BookingStatusBadge({ status }) {

  const styles = {
    Pending:
      "bg-yellow-100 text-yellow-700",

    Confirmed:
      "bg-green-100 text-green-700",

    Completed:
      "bg-blue-100 text-blue-700",

    Cancelled:
      "bg-red-100 text-red-700",

    "No Show":
      "bg-zinc-200 text-zinc-700",
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-medium ${styles[status]}`}
    >
      {status}
    </span>
  );
}
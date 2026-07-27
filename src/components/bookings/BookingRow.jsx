import BookingStatusBadge from "./BookingStatusBadge";

export default function BookingRow({
  booking,
  onClick,
}) {
  return (
    <tr
  onClick={onClick}
  className="cursor-pointer border-b border-zinc-100 transition hover:bg-zinc-50"
>

      <td className="px-4 py-5 font-medium text-zinc-900">
        {booking.customer}
      </td>

      <td className="px-4 py-5 text-zinc-600">
        {booking.service}
      </td>

      <td className="px-4 py-5 whitespace-nowrap text-zinc-600">
        {booking.date}
      </td>

      <td className="px-4 py-5 whitespace-nowrap text-zinc-600">
        {booking.time}
      </td>

      <td className="px-4 py-5 whitespace-nowrap text-zinc-600">
        {booking.amount}
      </td>

      <td className="px-4 py-5 whitespace-nowrap">
        <BookingStatusBadge
          status={booking.status}
        />
      </td>

    </tr>
  );
}
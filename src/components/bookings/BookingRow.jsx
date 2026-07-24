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

      <td className="py-5 font-medium">
        {booking.customer}
      </td>

      <td>
        {booking.service}
      </td>

      <td>
        {booking.date}
      </td>

      <td>
        {booking.time}
      </td>

      <td>
        {booking.amount}
      </td>

      <td>
        <BookingStatusBadge
          status={booking.status}
        />
      </td>

    </tr>
  );
}
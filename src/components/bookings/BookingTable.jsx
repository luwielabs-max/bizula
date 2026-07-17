import bookings from "../../data/bookings";
import BookingRow from "./BookingRow";

export default function BookingTable({
  bookings,
  onSelect,
}) {
  return (
    <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-white">

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b border-zinc-200 bg-zinc-50 text-left">

              <th className="px-6 py-4">Customer</th>

              <th>Service</th>

              <th>Date</th>

              <th>Time</th>

              <th>Amount</th>

              <th>Status</th>

            </tr>

          </thead>

          <tbody>

           {bookings.map((booking) => (
  <BookingRow
    key={booking.id}
    booking={booking}
    onClick={() => onSelect(booking)}
  />
))}

          </tbody>

        </table>

      </div>

    </div>
  );
}
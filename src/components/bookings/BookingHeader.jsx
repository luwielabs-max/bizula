import { CalendarPlus } from "lucide-react";
import { LButton } from "../../luwie-ui/src";

export default function BookingHeader({
    onCreateBooking,
    onOpenBookingLink,

}) {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

      <div>

        <h1 className="text-4xl font-semibold tracking-tight text-zinc-900">
          Bookings
        </h1>

        <p className="mt-2 text-zinc-500">
          Manage appointments, bookings and customer schedules.
        </p>

      </div>

    <LButton
        variant="secondary"
        onClick={onOpenBookingLink}
    >
        Booking Link
    </LButton>

      <LButton
    size="lg"
    className="w-full md:w-auto"
    onClick={onCreateBooking}
>
    <CalendarPlus size={18} />
    New Booking
</LButton>


    </div>
  );
}
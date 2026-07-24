import { CalendarDays } from "lucide-react";
import WidgetCard from "../../../components/dashboard/WidgetCard";

export default function BookingsWidget() {
  return (
    <WidgetCard
      title="Bookings"
      value="0"
      description="No bookings have been scheduled."
      icon={CalendarDays}
      action="View Bookings"
      path="/bookings"
    />
  );
}
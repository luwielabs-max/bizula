import { CalendarRange } from "lucide-react";
import WidgetCard from "../../../components/dashboard/WidgetCard";

export default function CalendarWidget() {
  return (
    <WidgetCard
      title="Today's Schedule"
      value="No Events"
      description="Your upcoming appointments and events will appear here."
      icon={CalendarRange}
      action="Open Calendar"
      path="/calendar"
    />
  );
}
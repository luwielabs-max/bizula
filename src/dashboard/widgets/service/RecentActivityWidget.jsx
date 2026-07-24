import { History } from "lucide-react";
import WidgetCard from "../../../components/dashboard/WidgetCard";

export default function RecentActivityWidget() {
  return (
    <WidgetCard
      title="Recent Activity"
      value="No Activity"
      description="Bookings, customer actions and payments will appear here."
      icon={History}
      action="View Activity"
      path="/activity"
    />
  );
}
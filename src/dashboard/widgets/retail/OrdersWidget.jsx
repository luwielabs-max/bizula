import { ClipboardList } from "lucide-react";
import WidgetCard from "../../../components/dashboard/WidgetCard";

export default function OrdersWidget() {
  return (
    <WidgetCard
      title="Orders"
      value="0"
      description="No orders have been created."
      icon={ClipboardList}
      action="View Orders"
      path="/orders"
    />
  );
}
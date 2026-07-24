import { DollarSign } from "lucide-react";
import WidgetCard from "../../../components/dashboard/WidgetCard";

export default function RevenueWidget() {
  return (
    <WidgetCard
      title="Today's Revenue"
      value="₦0.00"
      description="No sales have been recorded today."
      icon={DollarSign}
      action="View Sales"
      path="/sales"
    />
  );
}
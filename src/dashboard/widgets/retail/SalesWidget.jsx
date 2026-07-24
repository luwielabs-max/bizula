import { BarChart3 } from "lucide-react";
import WidgetCard from "../../../components/dashboard/WidgetCard";

export default function SalesWidget() {
  return (
    <WidgetCard
      title="Sales Analytics"
      value="No Data"
      description="Your sales trends and performance will appear here once you make your first sale."
      icon={BarChart3}
      action="View Sales"
      path="/sales"
    />
  );
}
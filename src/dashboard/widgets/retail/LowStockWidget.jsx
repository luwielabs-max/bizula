import { PackageX } from "lucide-react";
import WidgetCard from "../../../components/dashboard/WidgetCard";

export default function LowStockWidget() {
  return (
    <WidgetCard
      title="Low Stock"
      value="All Good"
      description="No products are running low on stock."
      icon={PackageX}
      action="View Inventory"
      path="/inventory"
    />
  );
}
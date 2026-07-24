import { Package } from "lucide-react";
import WidgetCard from "../../../components/dashboard/WidgetCard";

export default function InventoryWidget() {
  return (
    <WidgetCard
      title="Inventory"
      value="0"
      description="Your inventory is currently empty."
      icon={Package}
      action="View Inventory"
      path="/inventory"
    />
  );
}
import { Wallet } from "lucide-react";
import WidgetCard from "../../../components/dashboard/WidgetCard";

export default function OutstandingPaymentsWidget() {
  return (
    <WidgetCard
      title="Outstanding Payments"
      value="₦0.00"
      description="No outstanding customer payments."
      icon={Wallet}
      action="View Payments"
      path="/payments"
    />
  );
}
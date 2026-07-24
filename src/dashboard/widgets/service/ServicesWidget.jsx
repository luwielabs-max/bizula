import { BriefcaseBusiness } from "lucide-react";
import WidgetCard from "../../../components/dashboard/WidgetCard";

export default function ServicesWidget() {
  return (
    <WidgetCard
      title="Services"
      value="0"
      description="You haven't created any services yet."
      icon={BriefcaseBusiness}
      action="View Services"
      path="/services"
    />
  );
}
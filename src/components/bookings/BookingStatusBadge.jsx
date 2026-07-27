import { LBadge } from "../../luwie-ui/src";

export default function BookingStatusBadge({ status }) {
  const variant = {
    Pending: "warning",
    Confirmed: "success",
    Completed: "info",
    Cancelled: "danger",
    "No Show": "default",
  }[status] || "default";

  return <LBadge variant={variant} className="whitespace-nowrap">{status}</LBadge>;
}
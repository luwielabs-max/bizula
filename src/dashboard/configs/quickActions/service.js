import {
  CalendarPlus,
  BriefcaseBusiness,
  UserPlus,
  ReceiptText,
} from "lucide-react";

export default [
  {
    title: "New Booking",
    description: "Create a customer booking.",
    icon: CalendarPlus,
    path: "/bookings/new",
  },
  {
    title: "Add Service",
    description: "Create a new service.",
    icon: BriefcaseBusiness,
    path: "/services/new",
  },
  {
    title: "Add Customer",
    description: "Save a customer profile.",
    icon: UserPlus,
    path: "/customers/new",
  },
  {
    title: "Create Invoice",
    description: "Generate an invoice.",
    icon: ReceiptText,
    path: "/payments/new",
  },
];
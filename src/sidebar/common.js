import {
  LayoutDashboard,
  Users,
  CreditCard,
  Settings,
} from "lucide-react";

export default [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Customers",
    path: "/dashboard/customers",
    icon: Users,
  },
  {
    label: "Payments",
    path: "/dashboard/payments",
    icon: CreditCard,
  },
  {
    label: "Settings",
    path: "/dashboard/settings",
    icon: Settings,
  },
];
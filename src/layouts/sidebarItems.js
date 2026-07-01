import {
  LayoutDashboard,
  Calendar,
  Briefcase,
  Package,
  TrendingUp,
  Users,
  CreditCard,
  Settings,
} from "lucide-react";

export const sidebarItems = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Bookings",
    path: "/dashboard/bookings",
    icon: Calendar,
  },
  {
    label: "Services",
    path: "/dashboard/services",
    icon: Briefcase,
  },
  {
    label: "Inventory",
    path: "/dashboard/inventory",
    icon: Package,
  },
  {
    label: "Sales",
    path: "/dashboard/sales",
    icon: TrendingUp,
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
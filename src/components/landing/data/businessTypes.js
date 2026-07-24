import {
  ShoppingBag,
  CalendarDays,
 Layers3,
  Check,
} from "lucide-react";

export const businessTypes = [
  {
    id: "retail",
    icon: ShoppingBag,
    title: "Retail Businesses",
    description:
      "Everything you need to sell products, track inventory and grow your business.",

    features: [
      "Inventory Management",
      "Order Tracking",
      "Sales Analytics",
      "Customer Management",
    ],
  },

  {
    id: "services",
    icon: CalendarDays,
    title: "Service Businesses",
    description:
      "Manage appointments, clients and payments from one beautiful workspace.",

    features: [
      "Bookings",
      "Calendar",
      "Invoices",
      "Client Records",
    ],
  },

  {
    id: "hybrid",
    icon: Layers3,
    title: "Hybrid Businesses",
    description:
      "Sell products and offer services together without switching platforms.",

    features: [
      "Products",
      "Services",
      "Bookings",
      "Business Insights",
    ],
  },
];
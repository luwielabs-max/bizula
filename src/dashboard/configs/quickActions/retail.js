import {
  PackagePlus,
  ShoppingCart,
  UserPlus,
  ClipboardPlus,
} from "lucide-react";

export default [
  {
    title: "Add Product",
    description: "Create a new inventory item.",
    icon: PackagePlus,
    path: "/inventory/new",
  },
  {
    title: "New Sale",
    description: "Record a customer sale.",
    icon: ShoppingCart,
    path: "/sales/new",
  },
  {
    title: "Add Customer",
    description: "Save a customer profile.",
    icon: UserPlus,
    path: "/customers/new",
  },
  {
    title: "Create Order",
    description: "Start a customer order.",
    icon: ClipboardPlus,
    path: "/orders/new",
  },
];
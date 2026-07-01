import RevenueWidget from "../widgets/common/RevenueWidget";
import CustomersWidget from "../widgets/common/CustomersWidget";

import InventoryWidget from "../widgets/retail/InventoryWidget";
import OrdersWidget from "../widgets/retail/OrdersWidget";
import SalesWidget from "../widgets/retail/SalesWidget";

import RecentActivityWidget from "../widgets/retail/RecentActivityWidget";
import LowStockWidget from "../widgets/retail/LowStockWidget";

export default [
  {
    id: "stats",
    columns: 4,
    widgets: [
      RevenueWidget,
      OrdersWidget,
      CustomersWidget,
      InventoryWidget,
    ],
  },

  {
    id: "analytics",
    columns: 2,
    widgets: [
      SalesWidget,
    ],
  },

  {
    id: "activity",
    columns: 2,
    widgets: [
      RecentActivityWidget,
      LowStockWidget,
    ],
  },
];
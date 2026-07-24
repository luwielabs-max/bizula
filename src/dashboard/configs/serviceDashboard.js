import RevenueWidget from "../widgets/common/RevenueWidget";
import CustomersWidget from "../widgets/common/CustomersWidget";

import BookingsWidget from "../widgets/service/BookingsWidget";
import ServicesWidget from "../widgets/service/ServicesWidget";
import CalendarWidget from "../widgets/service/CalendarWidget";
import RecentActivityWidget from "../widgets/service/RecentActivityWidget";
import OutstandingPaymentsWidget from "../widgets/service/OutstandingPaymentsWidget";

export default [
  {
    id: "stats",
    columns: 4,

    widgets: [
      RevenueWidget,
      BookingsWidget,
      CustomersWidget,
      ServicesWidget,
    ],
  },

  {
    id: "calendar",
    columns: 2,

    widgets: [
      CalendarWidget,
    ],
  },

  {
    id: "activity",
    columns: 2,

    widgets: [
      RecentActivityWidget,
      OutstandingPaymentsWidget,
    ],
  },
];
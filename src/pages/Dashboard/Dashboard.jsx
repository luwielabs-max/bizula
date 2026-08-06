import DashboardHeader from "../../components/dashboard/DashboardHeader";
import QuickActions from "../../components/dashboard/QuickActions";

import retailDashboard from "../../dashboard/configs/retailDashboard";
import serviceDashboard from "../../dashboard/configs/serviceDashboard";



export default function Dashboard() {
  const dashboard =
    currentUser.business.type === "retail"
      ? retailDashboard
      : serviceDashboard;

  return (
    <div className="space-y-12">
      <DashboardHeader />

      <QuickActions />

      <section className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold tracking-tight">
            Business Overview
          </h2>

          <p className="text-sm text-zinc-500 mt-1">
            Monitor your business performance at a glance.
          </p>
        </div>

        {dashboard.map((section) => (
          <div
            key={section.id}
            className={`grid gap-6 ${
              section.columns === 4
                ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4"
                : "grid grid-cols-1 xl:grid-cols-2"
            }`}
          >
            {section.widgets.map((Widget, index) => (
              <Widget key={index} />
            ))}
          </div>
        ))}
      </section>
    </div>
  );
}
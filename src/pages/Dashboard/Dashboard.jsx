
import DashboardHeader from "../../components/dashboard/DashboardHeader";
import QuickActions from "../../components/dashboard/QuickActions";

import retailDashboard from "../../dashboard/configs/retailDashboard";
import serviceDashboard from "../../dashboard/configs/serviceDashboard";



export default function Dashboard() {
  const businessType = currentUser?.business?.type;

  const dashboard =
    businessType === "retail"
      ? retailDashboard
      : serviceDashboard;

  return (
    <div className="mx-auto w-full max-w-[1600px] space-y-8">

      {/* Dashboard welcome and business summary */}

      <DashboardHeader />

      {/* Primary actions */}

      <QuickActions />

      {/* Business overview */}

      <section className="pt-2">

        <div className="mb-7 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">

          <div>

            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-600">

              Business performance

            </p>

            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl">

              Business overview

            </h2>

            <p className="mt-2 text-sm leading-6 text-zinc-500 sm:text-base">

              Monitor your business activity, sales,
              customers, and performance at a glance.

            </p>

          </div>

          <p
            className="
              hidden
              rounded-full
              border
              border-zinc-200
              bg-white
              px-4
              py-2
              text-xs
              font-medium
              text-zinc-500
              sm:block
            "
          >

            Live business snapshot

          </p>

        </div>

        {/* Dashboard widget sections */}

        <div className="space-y-6">

          {dashboard.map((section) => (

            <div
              key={section.id}
              className="
                rounded-[28px]
                border
                border-zinc-200
                bg-white
                p-4
                shadow-sm
                shadow-zinc-950/[0.02]
                sm:p-5
                lg:p-6
              "
            >

              {section.columns === 4 ? (

                <div
                  className="
                    grid
                    grid-cols-1
                    gap-4
                    sm:grid-cols-2
                    xl:grid-cols-4
                  "
                >

                  {section.widgets.map((Widget, index) => (

                    <Widget
                      key={`${section.id}-${index}`}
                    />

                  ))}

                </div>

              ) : (

                <div
                  className="
                    grid
                    grid-cols-1
                    gap-5
                    xl:grid-cols-2
                  "
                >

                  {section.widgets.map((Widget, index) => (

                    <Widget
                      key={`${section.id}-${index}`}
                    />

                  ))}

                </div>

              )}

            </div>

          ))}

        </div>

      </section>

    </div>
  );
}

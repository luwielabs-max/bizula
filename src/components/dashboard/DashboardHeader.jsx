import { Building2 } from "lucide-react";

export default function DashboardHeader({ profile }) {
  const hour = new Date().getHours();

  let greeting = "Good Morning";

  if (hour >= 12 && hour < 17) {
    greeting = "Good Afternoon";
  }

  if (hour >= 17) {
    greeting = "Good Evening";
  }

  const userName = profile?.name || "there";

  const businessName =
    profile?.business?.name || "Your Business";

  return (
    <div className="mb-10">

      <p className="text-sm text-zinc-500">
        {greeting}, {userName}
      </p>

      <div className="mt-2 flex items-center gap-3">

        <div
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-2xl
            bg-zinc-100
          "
        >
          <Building2 size={22} />
        </div>

        <div>

          <h1 className="text-3xl font-bold tracking-tight">
            {businessName}
          </h1>

          <p className="mt-1 text-zinc-500">
            Manage your business from one place.
          </p>

        </div>

      </div>

    </div>
  );
}
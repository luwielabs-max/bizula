import { Building2 } from "lucide-react";
import { currentUser } from "../../services/auth";

export default function DashboardHeader() {
  const hour = new Date().getHours();

  let greeting = "Good Morning";

  if (hour >= 12 && hour < 17) {
    greeting = "Good Afternoon";
  }

  if (hour >= 17) {
    greeting = "Good Evening";
  }

  return (
    <div className="mb-10">
      <p className="text-sm text-zinc-500">
        {greeting}
      </p>

      <div className="flex items-center gap-3 mt-2">
        <div className="w-12 h-12 rounded-2xl bg-zinc-100 flex items-center justify-center">
          <Building2 size={22} />
        </div>

        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            {currentUser.business.name}
          </h1>

          <p className="text-zinc-500 mt-1">
            Manage your business from one place.
          </p>
        </div>
      </div>
    </div>
  );
}
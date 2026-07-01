import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  LDock,
  LDockItem,
} from "../../lib/luwie-ui";

import retailActions from "../../dashboard/configs/quickActions/retail";
import serviceActions from "../../dashboard/configs/quickActions/service";

import { currentUser } from "../../services/auth";

import QuickActionCard from "./QuickActionCard";

export default function QuickActions() {
  const navigate = useNavigate();

  const actions =
    currentUser.business.type === "retail"
      ? retailActions
      : serviceActions;

  const [isMobile, setIsMobile] = useState(
    window.innerWidth < 768
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="space-y-6">

      <div>

        <h2 className="text-xl font-semibold tracking-tight">
          Quick Actions
        </h2>

        <p className="text-sm text-zinc-500 mt-1">
          Frequently used actions for your business.
        </p>

      </div>

      {isMobile ? (

        <div className="flex justify-center">

          <LDock>

            {actions.map((action) => (

              <button
                key={action.title}
                onClick={() => navigate(action.path)}
                aria-label={action.title}
                title={action.title}
              >
                <LDockItem
                  icon={action.icon}
                />
              </button>

            ))}

          </LDock>

        </div>

      ) : (

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

          {actions.map((action) => (

            <QuickActionCard
              key={action.title}
              {...action}
            />

          ))}

        </div>

      )}

    </section>
  );
}
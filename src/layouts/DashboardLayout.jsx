import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Menu, Handshake } from "lucide-react";

import { getSidebar } from "../sidebar";
import { currentUser } from "../services/auth";

import LSidebar from "../luwie-ui/src/lib/ui/LSidebar";
import LNavbar from "../luwie-ui/src/lib/ui/LNavbar";
import LCard from "../luwie-ui/src/lib/ui/LCard";
import LAvatar from "../luwie-ui/src/lib/ui/LAvatar";

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const sidebarItems = getSidebar(
  currentUser.business.type
);

  return (
    <div className="min-h-screen bg-zinc-50 flex">
      {/* Overlay */}

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}

      <aside
        className={`
          fixed
          top-0
          left-0
          h-full
          w-72
          bg-white
          border-r
          border-zinc-200
          z-50
          transform
          transition-transform
          duration-300
          lg:hidden
          ${
            sidebarOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }
        `}
      >
        <LSidebar className="h-full">
          <div className="mb-10">
            <h1 className="text-2xl font-bold">
              Bizula
            </h1>

            <p className="text-sm text-zinc-500">
              Business Operating System
            </p>
          </div>

          <div className="space-y-2">
            {sidebarItems.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setSidebarOpen(false)}
                  className={({ isActive }) =>
                    `
                    flex
                    items-center
                    gap-3
                    px-4
                    py-3
                    rounded-xl
                    transition-all
                    ${
                      isActive
                        ? "bg-black text-white"
                        : "hover:bg-zinc-100"
                    }
                  `
                  }
                >
                  <Icon size={18} />
                  {item.label}
                </NavLink>
              );
            })}
          </div>
        </LSidebar>
      </aside>

      {/* Desktop Sidebar */}

      <aside className="hidden lg:block w-72 border-r border-zinc-200">
        <LSidebar className="h-full">
          <div className="mb-10">
            <h1 className="text-2xl font-bold">
              Bizula
            </h1>

            <p className="text-sm text-zinc-500">
              Business Operating System
            </p>
          </div>

          <div className="space-y-2">
            {sidebarItems.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `
                    flex
                    items-center
                    gap-3
                    px-4
                    py-3
                    rounded-xl
                    transition-all
                    ${
                      isActive
                        ? "bg-black text-white"
                        : "hover:bg-zinc-100"
                    }
                  `
                  }
                >
                  <Icon size={18} />
                  {item.label}
                </NavLink>
              );
            })}
          </div>
        </LSidebar>
      </aside>

      {/* Main */}

      <div className="flex-1 flex flex-col min-w-0">
        <LNavbar>
          <div className="flex items-center justify-between w-full">
            {/* Left */}

            <div className="flex items-center gap-3">
              <button
                className="lg:hidden p-2 rounded-lg hover:bg-zinc-100 transition"
                onClick={() => setSidebarOpen(true)}
              >
                <Menu size={22} />
              </button>

              <div className="flex items-center gap-2">
                <Handshake size={20} />

                <h2 className="font-semibold text-lg">
                  Welcome back
                </h2>
              </div>
            </div>

            {/* Right */}

            <LAvatar
              initials="FL"
              size="md"
            />
          </div>
        </LNavbar>

        <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-auto">
          <LCard className="min-h-full">
            <Outlet />
          </LCard>
        </main>
      </div>
    </div>
  );
}
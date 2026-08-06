<<<<<<< HEAD
import { useEffect, useState } from "react";
=======

import { useState } from "react";
>>>>>>> ef664cdb6ce857b85ccb30f50e2767c5b714da71
import { NavLink, Outlet } from "react-router-dom";
import {
  Menu,
  X,
  Bell,
  ChevronDown,
} from "lucide-react";

import { auth } from "../firebase/config";
import { getSidebar } from "../sidebar";

import LSidebar from "../luwie-ui/src/lib/ui/LSidebar";
import LAvatar from "../luwie-ui/src/lib/ui/LAvatar";

import {
  bizulaLogoDark,
  bizulaIcon,
} from "../assets/brand/brand";

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [user, setUser] = useState(null);

<<<<<<< HEAD
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      setUser(firebaseUser);
    });

    return () => unsubscribe();
  }, []);

  // Temporary until we load the Firestore profile
  const businessType = "retail";

  const sidebarItems = getSidebar(businessType);

  return (
    <div className="min-h-screen flex bg-zinc-50">
      <LSidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      >
        {sidebarItems.map((item) => (
          <NavLink
            key={item.title}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                isActive
                  ? "bg-black text-white"
                  : "hover:bg-zinc-100"
              }`
            }
          >
            <item.icon size={20} />
            <span>{item.title}</span>
          </NavLink>
        ))}
      </LSidebar>

      <div className="flex-1 flex flex-col">
        <LNavbar>
          <button
            onClick={() => setSidebarOpen(true)}
            className="md:hidden"
          >
            <Menu />
          </button>

          <div className="flex items-center gap-3 ml-auto">
            <Handshake />

            <LAvatar
              name={user?.displayName || "User"}
              src={user?.photoURL || ""}
            />
=======
  const sidebarItems = getSidebar(
    currentUser.business.type
  );

  const userName = currentUser?.name || "Bizula User";
  const businessName =
    currentUser?.business?.name || "Your Business";

  return (
    <div className="min-h-screen bg-zinc-50">

      {/* Mobile overlay */}

      {sidebarOpen && (
        <button
          type="button"
          aria-label="Close sidebar"
          className="
            fixed
            inset-0
            z-40
            bg-zinc-950/40
            backdrop-blur-sm
            lg:hidden
          "
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}

      <aside
        className={`
          fixed
          inset-y-0
          left-0
          z-50
          flex
          w-[280px]
          flex-col
          border-r
          border-zinc-200
          bg-white
          transition-transform
          duration-300
          lg:translate-x-0
          ${
            sidebarOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }
        `}
      >

        <LSidebar className="flex h-full flex-col p-5">

          {/* Brand */}

          <div className="flex items-center justify-between">

            <NavLink
              to="/dashboard"
              onClick={() => setSidebarOpen(false)}
              className="flex items-center"
              aria-label="Bizula dashboard"
            >

              <img
                src={bizulaLogoDark}
                alt="Bizula"
                className="h-9 w-auto"
              />

            </NavLink>

            <button
              type="button"
              aria-label="Close sidebar"
              onClick={() => setSidebarOpen(false)}
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                text-zinc-500
                transition
                hover:bg-zinc-100
                hover:text-zinc-950
                lg:hidden
              "
            >

              <X size={20} />

            </button>

          </div>

          {/* Business switcher */}

          <button
            type="button"
            className="
              mt-8
              flex
              w-full
              items-center
              gap-3
              rounded-2xl
              border
              border-zinc-200
              bg-zinc-50
              p-3
              text-left
              transition
              hover:border-violet-200
              hover:bg-violet-50/50
            "
          >

            <div
              className="
                flex
                h-11
                w-11
                shrink-0
                items-center
                justify-center
                rounded-xl
                bg-violet-600
                p-2
              "
            >

              <img
                src={bizulaIcon}
                alt=""
                className="h-full w-full"
              />

            </div>

            <div className="min-w-0 flex-1">

              <p className="truncate text-sm font-semibold text-zinc-950">

                {businessName}

              </p>

              <p className="mt-0.5 truncate text-xs text-zinc-500">

                Manage your business

              </p>

            </div>

            <ChevronDown
              size={17}
              className="shrink-0 text-zinc-400"
            />

          </button>

          {/* Navigation */}

          <nav className="mt-8 flex-1">

            <p
              className="
                mb-3
                px-3
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-zinc-400
              "
            >

              Workspace

            </p>

            <div className="space-y-1.5">

              {sidebarItems.map((item) => {

                const Icon = item.icon;

                return (

                  <NavLink
                    key={item.path}
                    to={item.path}
                    end={item.path === "/dashboard"}
                    onClick={() => setSidebarOpen(false)}
                    className={({ isActive }) =>
                      `
                        group
                        flex
                        items-center
                        gap-3
                        rounded-xl
                        px-3.5
                        py-3
                        text-sm
                        font-medium
                        transition-all
                        duration-200
                        ${
                          isActive
                            ? `
                              bg-violet-600
                              text-white
                              shadow-sm
                              shadow-violet-600/20
                            `
                            : `
                              text-zinc-600
                              hover:bg-zinc-100
                              hover:text-zinc-950
                            `
                        }
                      `
                    }
                  >

                    <Icon
                      size={19}
                      strokeWidth={2}
                    />

                    <span>

                      {item.label}

                    </span>

                  </NavLink>

                );

              })}

            </div>

          </nav>

          {/* Sidebar footer */}

          <div
            className="
              mt-6
              rounded-2xl
              border
              border-violet-100
              bg-violet-50
              p-4
            "
          >

            <p className="text-sm font-semibold text-zinc-950">

              Bizula is free to start

            </p>

            <p className="mt-2 text-xs leading-5 text-zinc-500">

              You only pay small transaction charges
              when your business earns.

            </p>

          </div>

        </LSidebar>

      </aside>

      {/* Main application */}

      <div className="min-h-screen lg:pl-[280px]">

        {/* Top navigation */}

        <header
          className="
            sticky
            top-0
            z-30
            border-b
            border-zinc-200/80
            bg-white/85
            backdrop-blur-xl
          "
        >

          <div
            className="
              flex
              h-[76px]
              items-center
              justify-between
              gap-4
              px-4
              sm:px-6
              lg:px-8
            "
          >

            {/* Left */}

            <div className="flex min-w-0 items-center gap-3">

              <button
                type="button"
                aria-label="Open sidebar"
                onClick={() => setSidebarOpen(true)}
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-zinc-200
                  bg-white
                  text-zinc-700
                  transition
                  hover:bg-zinc-100
                  lg:hidden
                "
              >

                <Menu size={21} />

              </button>

              <div className="min-w-0">

                <p className="text-xs font-medium text-zinc-500">

                  Welcome back

                </p>

                <h1 className="truncate text-base font-semibold text-zinc-950 sm:text-lg">

                  {userName}

                </h1>

              </div>

            </div>

            {/* Right */}

            <div className="flex items-center gap-2 sm:gap-3">

              <button
                type="button"
                aria-label="Notifications"
                className="
                  relative
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-zinc-200
                  bg-white
                  text-zinc-600
                  transition
                  hover:bg-zinc-100
                  hover:text-zinc-950
                "
              >

                <Bell size={19} />

                <span
                  className="
                    absolute
                    right-2.5
                    top-2.5
                    h-2
                    w-2
                    rounded-full
                    border-2
                    border-white
                    bg-violet-600
                  "
                />

              </button>

              <button
                type="button"
                className="
                  flex
                  items-center
                  gap-3
                  rounded-xl
                  p-1.5
                  transition
                  hover:bg-zinc-100
                "
              >

                <LAvatar
                  initials="FL"
                  size="md"
                />

                <div className="hidden text-left sm:block">

                  <p className="max-w-[130px] truncate text-sm font-semibold text-zinc-900">

                    {userName}

                  </p>

                  <p className="text-xs text-zinc-500">

                    Business owner

                  </p>

                </div>

                <ChevronDown
                  size={16}
                  className="hidden text-zinc-400 sm:block"
                />

              </button>

            </div>

>>>>>>> ef664cdb6ce857b85ccb30f50e2767c5b714da71
          </div>

        </header>

        {/* Page content */}

        <main
          className="
            min-h-[calc(100vh-76px)]
            overflow-x-hidden
            p-4
            sm:p-6
            lg:p-8
          "
        >

          <Outlet />

<<<<<<< HEAD
        <main className="flex-1 p-6">
          <Outlet />
=======
>>>>>>> ef664cdb6ce857b85ccb30f50e2767c5b714da71
        </main>

      </div>

    </div>
  );
}

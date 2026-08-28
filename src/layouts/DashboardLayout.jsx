import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

import {
  Menu,
  X,
  Bell,
  ChevronDown,
  Handshake,
} from "lucide-react";

import { auth } from "../firebase/config";
import { getSidebar } from "../sidebar";

import LSidebar from "../luwie-ui/src/lib/ui/LSidebar";
import LNavbar from "../luwie-ui/src/lib/ui/LNavbar";
import LAvatar from "../luwie-ui/src/lib/ui/LAvatar";

import {
  bizulaLogoDark,
  bizulaIcon,
} from "../assets/brand/brand";

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [user, setUser] = useState(null);

  /*
   * Listen for Firebase authentication state
   */
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(
      (firebaseUser) => {
        setUser(firebaseUser);
      }
    );

    return () => unsubscribe();
  }, []);

  /*
   * Temporary business type.
   *
   * Later we will load this from the user's
   * Firestore profile.
   */
  const businessType = "service";

  const sidebarItems = getSidebar(businessType);

  /*
   * User information
   */
  const userName =
    user?.displayName ||
    user?.email?.split("@")[0] ||
    "Bizula User";

  const userPhoto = user?.photoURL || "";

  /*
   * Temporary business name.
   *
   * Later this will come from Firestore.
   */
  const businessName = "Your Business";

  return (
    <div className="min-h-screen bg-zinc-50">

      {/* =========================================
          MOBILE SIDEBAR OVERLAY
      ========================================= */}

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

      {/* =========================================
          SIDEBAR
      ========================================= */}

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

          {/* =====================================
              BRAND
          ===================================== */}

          <div className="flex items-center justify-between">

            <NavLink
              to="/dashboard"
              onClick={() => setSidebarOpen(false)}
              className="flex items-center"
              aria-label="Bizula Dashboard"
            >
              <img
                src={bizulaLogoDark}
                alt="Bizula"
                className="h-9 w-auto"
              />
            </NavLink>

            {/* Mobile close button */}

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

          {/* =====================================
              BUSINESS SWITCHER
          ===================================== */}

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

            {/* Business icon */}

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

            {/* Business information */}

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

          {/* =====================================
              SIDEBAR NAVIGATION
          ===================================== */}

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
                      {item.label || item.title}
                    </span>

                  </NavLink>
                );

              })}

            </div>

          </nav>

          {/* =====================================
              SIDEBAR FOOTER
          ===================================== */}

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

      {/* =========================================
          MAIN APPLICATION
      ========================================= */}

      <div className="min-h-screen lg:pl-[280px]">

        {/* =======================================
            TOP NAVIGATION
        ======================================= */}

        <LNavbar
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

            {/* ===================================
                NAVBAR LEFT
            =================================== */}

            <div className="flex min-w-0 items-center gap-3">

              {/* Mobile menu */}

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

              {/* Welcome text */}

              <div className="min-w-0">

                <p className="text-xs font-medium text-zinc-500">
                  Welcome back
                </p>

                <h1 className="truncate text-base font-semibold text-zinc-950 sm:text-lg">
                  {userName}
                </h1>

              </div>

            </div>

            {/* ===================================
                NAVBAR RIGHT
            =================================== */}

            <div className="flex items-center gap-2 sm:gap-3">

              {/* Handshake */}

              <Handshake
                size={20}
                className="hidden sm:block"
              />

              {/* Notifications */}

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

                {/* Notification indicator */}

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

              {/* =================================
                  USER PROFILE
              ================================= */}

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
                  name={userName}
                  src={userPhoto}
                  initials={userName
                    .slice(0, 2)
                    .toUpperCase()}
                  size="md"
                />

                {/* User details */}

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

          </div>

        </LNavbar>

        {/* =========================================
            PAGE CONTENT
        ========================================= */}

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
        </main>

      </div>

    </div>
  );
}
import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Menu, Handshake } from "lucide-react";

import { auth } from "../firebase/config";
import { getSidebar } from "../sidebar";

import LSidebar from "../luwie-ui/src/lib/ui/LSidebar";
import LNavbar from "../luwie-ui/src/lib/ui/LNavbar";
import LCard from "../luwie-ui/src/lib/ui/LCard";
import LAvatar from "../luwie-ui/src/lib/ui/LAvatar";

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [user, setUser] = useState(null);

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
          </div>
        </LNavbar>

        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
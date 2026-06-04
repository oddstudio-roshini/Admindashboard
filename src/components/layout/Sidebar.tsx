import { Link, useRouterState } from "@tanstack/react-router";
import {
  LayoutDashboard,
  UserRound,
  Users,
  Building2,
  Dumbbell,
  BarChart3,
  Bell,
  Settings,
} from "lucide-react";

const menuItems = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Doctors",
    path: "/doctors",
    icon: UserRound,
  },
  {
    label: "Patients",
    path: "/patients",
    icon: Users,
  },
  {
    label: "Clinics",
    path: "/clinics",
    icon: Building2,
  },
  {
    label: "Exercise Library",
    path: "/exercise-library",
    icon: Dumbbell,
  },
  {
    label: "Analytics",
    path: "/analytics",
    icon: BarChart3,
  },
  {
    label: "Notifications",
    path: "/notifications",
    icon: Bell,
  },
  {
    label: "Settings",
    path: "/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });

  return (
    <aside className="w-64 min-h-screen bg-[#134C58] text-white">
      <div className="p-6 border-b border-white/10">
        <h1 className="text-3xl font-bold">ARtho Move</h1>
        <p className="text-sm text-[#A7BFB0]">
          Admin Portal
        </p>
      </div>

      <nav className="mt-6">
        {menuItems.map((item) => {
          const Icon = item.icon;

          const active = pathname === item.path;

          return (
            <Link
              key={item.path}
              to={item.path}
            >
              <div
                className="flex items-center gap-4 px-6 py-4 transition-all"
                style={{
                  backgroundColor: active
                    ? "rgba(255,255,255,0.12)"
                    : "transparent",

                  borderLeft: active
                    ? "4px solid #CF8A4E"
                    : "4px solid transparent",

                  color: active
                    ? "#F1EAD8"
                    : "#A7BFB0",
                }}
              >
                <Icon size={22} />

                <span>{item.label}</span>
              </div>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
import { createFileRoute } from "@tanstack/react-router";
import DashboardLayout from "@/components/layout/DashboardLayout";

const QUICK_ACCESS = [
  {
    id: "doctors",
    title: "Doctors",
    desc: "Manage doctor accounts, clinics, and patient assignments",
    emoji: "🩺",
    accent: "var(--primary)",
  },
  {
    id: "patients",
    title: "Patients",
    desc: "View patient profiles, plans, and recovery progress",
    emoji: "🧑‍🦽",
    accent: "#2E7D5B",
  },
  {
    id: "clinics",
    title: "Clinics",
    desc: "Add and manage clinic accounts and associations",
    emoji: "🏥",
    accent: "var(--accent)",
  },
  {
    id: "exercises",
    title: "Exercise Library",
    desc: "Browse and publish exercises for therapy plans",
    emoji: "📚",
    accent: "#CAA12F",
  },
];

function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <h1
              className="text-5xl font-bold text-[var(--primary)]"
              style={{ fontFamily: "Fraunces, serif" }}
            >
              Good afternoon, Admin 👋
            </h1>
            <p className="mt-2 text-[var(--ink-mid)]">
              Here's an overview of the ARtho Move admin portal.
            </p>
          </div>

          <div className="flex items-center gap-2 font-medium">
            <div className="h-2 w-2 rounded-full bg-[#2E7D5B]" />
            <span className="text-[#2E7D5B]">System Online</span>
          </div>
        </div>

        {/* Top Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-5 flex items-center gap-4">
            <div className="p-2 text-xl shrink-0">⚡</div>
            <div>
              <h3 className="font-semibold text-base">Real-time updates</h3>
              <p className="text-[var(--ink-mid)] text-sm mt-0.5">Live patient activity monitoring</p>
            </div>
          </div>

          <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-5 flex items-center gap-4">
            <div className=" p-2 text-xl shrink-0">🔒</div>
            <div>
              <h3 className="font-semibold text-base">Secure access</h3>
              <p className="text-[var(--ink-mid)] text-sm mt-0.5">Role-based permissions enforced</p>
            </div>
          </div>

          <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-5 flex items-center gap-4">
            <div className="p-2 text-xl shrink-0">📊</div>
            <div>
              <h3 className="font-semibold text-base">Analytics</h3>
              <p className="text-[var(--ink-mid)] text-sm mt-0.5">Track recovery progress trends</p>
            </div>
          </div>
        </div>

        {/* Quick Access */}
        <div>
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-2xl font-bold text-[var(--primary)]">
              Quick Access
            </h2>
            <span className="text-[var(--ink-mid)]">4 sections</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {QUICK_ACCESS.map((item) => (
              <div
                key={item.id}
                className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-6"
              >
                <div className="text-3xl mb-4">{item.emoji}</div>
                <h3 className="text-xl font-semibold text-[var(--primary)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--ink-mid)] leading-6 min-h-[60px]">
                  {item.desc}
                </p>
                <button
                  className="mt-4 font-semibold"
                  style={{ color: item.accent }}
                >
                  Open →
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export const Route = createFileRoute("/dashboard")({
  component: DashboardPage,
});
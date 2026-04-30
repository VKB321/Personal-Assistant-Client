import { NavLink, Outlet } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";
import ParticlesBackground from "../components/Particles";

const itemClass = ({ isActive }: { isActive: boolean }) =>
  `block px-3 py-2 rounded text-sm transition-colors ${
    isActive ? "bg-indigo-600 text-white" : "text-gray-200 hover:bg-slate-800"
  }`;

export default function DashboardLayout() {
  const { logout, userId } = useAuth();
  return (
    <div className="min-h-screen text-white">
      <ParticlesBackground />
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-4 px-4 py-4">
        <aside className="col-span-12 md:col-span-2 bg-slate-900/70 border border-slate-700 rounded-md p-3 flex flex-col">
          <div className="text-xs text-gray-400 mb-2 truncate" title={userId}>
            {userId}
          </div>
          <nav className="flex flex-col gap-1">
            <NavLink to="/dashboard" end className={itemClass}>Overview</NavLink>
            <NavLink to="/dashboard/agent" className={itemClass}>Owner Chat</NavLink>
            <NavLink to="/dashboard/notifications" className={itemClass}>Notifications</NavLink>
            <NavLink to="/dashboard/trading" className={itemClass}>Trading</NavLink>
            <NavLink to="/dashboard/jobs" className={itemClass}>Jobs</NavLink>
          </nav>
          <div className="mt-auto pt-4 flex flex-col gap-2">
            <NavLink to="/" className="text-xs text-gray-400 hover:text-white">← Back to site</NavLink>
            <button
              onClick={logout}
              className="px-3 py-2 rounded bg-red-600 hover:bg-red-700 text-white text-sm"
            >
              Logout
            </button>
          </div>
        </aside>
        <section className="col-span-12 md:col-span-10 bg-slate-900/70 border border-slate-700 rounded-md min-h-[80vh]">
          <Outlet />
        </section>
      </div>
    </div>
  );
}

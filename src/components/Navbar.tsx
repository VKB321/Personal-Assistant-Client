import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `px-3 py-2 rounded text-sm transition-colors ${
    isActive ? "text-indigo-400" : "text-gray-200 hover:text-white"
  }`;

export default function Navbar() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <header className="sticky top-0 z-10 backdrop-blur bg-slate-900/70 border-b border-slate-700">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-white text-lg font-semibold tracking-tight">
          Vijay <span className="text-indigo-400">Bhukya</span>
        </Link>
        <div className="flex items-center gap-1">
          <NavLink to="/" end className={linkClass}>Home</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/skills" className={linkClass}>Skills</NavLink>
          <NavLink to="/experience" className={linkClass}>Experience</NavLink>
          <NavLink to="/projects" className={linkClass}>Projects</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
          <NavLink to="/chat" className={linkClass}>Ask AI</NavLink>
          {isAuthenticated ? (
            <>
              <NavLink to="/dashboard" className={linkClass}>Dashboard</NavLink>
              <button
                onClick={logout}
                className="ml-2 px-3 py-2 rounded bg-red-600 hover:bg-red-700 text-white text-sm"
              >
                Logout
              </button>
            </>
          ) : (
            <NavLink
              to="/login"
              className="ml-2 px-3 py-2 rounded bg-indigo-600 hover:bg-indigo-700 text-white text-sm"
            >
              Login
            </NavLink>
          )}
        </div>
      </nav>
    </header>
  );
}

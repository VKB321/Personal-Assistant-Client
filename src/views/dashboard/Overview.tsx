import { Link } from "react-router-dom";
import { useAuth } from "../../auth/AuthProvider";

const tiles = [
  {
    title: "Owner Chat",
    to: "/dashboard/agent",
    description: "Full assistant with tool access — create notification rules, query stocks, draft cover letters.",
  },
  {
    title: "Notifications",
    to: "/dashboard/notifications",
    description: "Schedule emails: time reminders or stock summaries. Powered by Resend + APScheduler.",
  },
  {
    title: "Trading",
    to: "/dashboard/trading",
    description: "Live (delayed) quotes + RSI/MACD/MA indicators. Educational analysis only — not investment advice.",
  },
  {
    title: "Jobs",
    to: "/dashboard/jobs",
    description: "Listings ingested from LinkedIn/Naukri email alerts + RSS. Kanban tracker, AI cover letters, apply assist.",
  },
];

export default function Overview() {
  const { userId } = useAuth();
  return (
    <div className="p-6 text-white">
      <h1 className="text-2xl font-bold mb-1">Dashboard</h1>
      <p className="text-gray-400 mb-6">Signed in as {userId}.</p>

      <div className="grid sm:grid-cols-2 gap-4">
        {tiles.map((t) => (
          <Link
            key={t.to}
            to={t.to}
            className="block bg-slate-800/60 hover:bg-slate-800 border border-slate-700 rounded-lg p-5 transition-colors"
          >
            <h2 className="text-lg font-semibold mb-1 text-indigo-300">{t.title}</h2>
            <p className="text-gray-400 text-sm">{t.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

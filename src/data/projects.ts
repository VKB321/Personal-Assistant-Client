export interface ProjectItem {
  title: string;
  status?: "in-progress" | "shipped" | "archived";
  description: string;
  bullets?: string[];
  tech: string[];
  link?: string;
  repo?: string;
}

export const projects: ProjectItem[] = [
  {
    title: "Personal AI Assistant",
    status: "in-progress",
    description:
      "This site. A portfolio + AI assistant that answers recruiter questions about my experience, manages scheduled email notifications, runs a stock-analysis dashboard, and tracks my job applications from LinkedIn/Naukri email alerts.",
    bullets: [
      "Public recruiter chat with rate-limiting",
      "APScheduler-driven notification rules with Resend email",
      "yfinance + RSI/MACD/MA signal dashboard (analysis only, not advice)",
      "Job-listing ingestion via Gmail IMAP + RSS, Kanban tracker, AI cover-letter drafts",
    ],
    tech: ["React", "TypeScript", "FastAPI", "MongoDB", "OpenRouter", "Tailwind"],
  },
  {
    title: "prismGPT",
    description:
      "AI-based multipage chat application with conversational database operations and performance tracking.",
    tech: ["React", "Node.js", "MySQL", "Tailwind"],
  },
  {
    title: "Consumption Hub",
    description:
      "Report generation and customization platform with rule-based automation and scheduling.",
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Prism Enrich",
    description:
      "Data verification and analytics application with secure data integration and role-based access.",
    tech: ["React", "Node.js", "MongoDB"],
  },
];

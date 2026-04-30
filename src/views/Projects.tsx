import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12 text-white">
      <h1 className="text-3xl font-bold mb-2">Projects</h1>
      <p className="text-gray-400 mb-8">Things I've built or am currently building.</p>

      <div className="grid gap-5">
        {projects.map((p) => (
          <article
            key={p.title}
            className="bg-slate-800/60 border border-slate-700 rounded-lg p-5"
          >
            <header className="flex flex-wrap items-baseline gap-3 mb-2">
              <h2 className="text-xl font-semibold">{p.title}</h2>
              {p.status && (
                <span className="text-xs px-2 py-0.5 rounded bg-indigo-600/30 text-indigo-300 uppercase tracking-wide">
                  {p.status}
                </span>
              )}
            </header>

            <p className="text-gray-300">{p.description}</p>

            {p.bullets && p.bullets.length > 0 && (
              <ul className="list-disc ml-5 text-gray-400 mt-3 space-y-1">
                {p.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            )}

            <div className="flex flex-wrap gap-2 mt-4">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 rounded bg-slate-700/70 text-xs text-gray-200"
                >
                  {t}
                </span>
              ))}
            </div>

            {(p.link || p.repo) && (
              <div className="flex gap-4 mt-4 text-sm">
                {p.link && (
                  <a
                    className="text-indigo-400 hover:underline"
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live →
                  </a>
                )}
                {p.repo && (
                  <a
                    className="text-indigo-400 hover:underline"
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Repo →
                  </a>
                )}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

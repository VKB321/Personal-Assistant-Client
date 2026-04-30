import { resume } from "../data/resume";

export default function Experience() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12 text-white">
      <h1 className="text-3xl font-bold mb-2">Experience</h1>
      <p className="text-gray-400 mb-8">Roles, projects, and impact.</p>

      <div className="relative border-l border-slate-700 pl-6 space-y-10">
        {resume.experience.map((exp) => (
          <div key={`${exp.company}-${exp.start}`} className="relative">
            <span className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-indigo-500 border-2 border-slate-900" />
            <div className="bg-slate-800/60 border border-slate-700 rounded-lg p-5">
              <div className="flex flex-wrap items-baseline gap-2 mb-2">
                <h2 className="text-lg font-semibold">{exp.role}</h2>
                <span className="text-indigo-400">@ {exp.company}</span>
                <span className="text-gray-400 text-sm ml-auto">
                  {exp.start} — {exp.end}
                </span>
              </div>
              {exp.location && <p className="text-gray-400 text-sm mb-3">{exp.location}</p>}
              <ul className="list-disc ml-5 text-gray-300 space-y-1">
                {exp.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-3">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded bg-slate-700/70 text-xs text-gray-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

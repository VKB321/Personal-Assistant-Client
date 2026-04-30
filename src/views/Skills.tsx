import { resume } from "../data/resume";

export default function Skills() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12 text-white">
      <h1 className="text-3xl font-bold mb-2">Skills & Tech Stack</h1>
      <p className="text-gray-400 mb-8">A snapshot of the technologies I use day-to-day.</p>

      <div className="grid md:grid-cols-2 gap-6">
        {resume.skills.map((cat) => (
          <div key={cat.name} className="bg-slate-800/60 border border-slate-700 rounded-lg p-5">
            <h2 className="text-lg font-semibold mb-3 text-indigo-400">{cat.name}</h2>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((s) => (
                <span
                  key={s}
                  className="px-2.5 py-1 rounded bg-slate-700/70 text-sm text-gray-100"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

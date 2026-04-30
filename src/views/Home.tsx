import { Link } from "react-router-dom";
import { resume } from "../data/resume";

export default function Home() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row items-start gap-10">
        <div className="flex-1">
          <p className="text-indigo-400 text-sm uppercase tracking-widest mb-3">{resume.title}</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Hi, I'm <span className="text-indigo-400">{resume.name.split(" ")[0]}</span>.
          </h1>
          <p className="mt-5 text-lg text-gray-300 max-w-2xl">{resume.tagline}</p>
          <p className="mt-4 text-gray-400 max-w-2xl">{resume.summary}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/chat"
              className="px-5 py-2.5 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white font-medium"
            >
              Ask the AI about me
            </Link>
            <Link
              to="/projects"
              className="px-5 py-2.5 rounded-md border border-slate-600 hover:bg-slate-800 text-white"
            >
              See my work
            </Link>
            <a
              href={resume.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-md border border-slate-600 hover:bg-slate-800 text-white"
            >
              LinkedIn
            </a>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 gap-3 max-w-2xl">
            {resume.highlights.map((h) => (
              <div key={h} className="bg-slate-800/60 border border-slate-700 rounded-md p-3 text-sm text-gray-200">
                {h}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

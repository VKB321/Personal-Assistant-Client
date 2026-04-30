import { resume } from "../data/resume";

export default function About() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12 text-white">
      <h1 className="text-3xl font-bold mb-6">About Me</h1>

      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-3">Professional Summary</h2>
        <p className="text-gray-300 leading-relaxed">{resume.summary}</p>
      </div>

      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-3">Highlights</h2>
        <ul className="list-disc ml-6 text-gray-300 space-y-1">
          {resume.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-3">Currently</h2>
        <p className="text-gray-300">
          {resume.experience[0]?.role} — {resume.experience[0]?.company} ({resume.experience[0]?.start} –{" "}
          {resume.experience[0]?.end})
        </p>
      </div>
    </section>
  );
}

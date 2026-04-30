import { resume } from "../data/resume";

export default function Contact() {
  const phoneDigits = resume.phone.replace(/[^0-9+]/g, "");
  return (
    <section className="max-w-3xl mx-auto px-6 py-12 text-white">
      <h1 className="text-3xl font-bold mb-2">Contact</h1>
      <p className="text-gray-400 mb-8">
        Open to opportunities, collaboration, and technical conversations.
      </p>

      <div className="bg-slate-800/60 border border-slate-700 p-6 rounded-lg space-y-5">
        <Field label="Name" value={resume.name} />
        <Field
          label="Email"
          value={
            <a href={`mailto:${resume.email}`} className="text-blue-400 hover:underline">
              {resume.email}
            </a>
          }
        />
        <Field
          label="Phone"
          value={
            <span className="space-x-3">
              <span>{resume.phone}</span>
              <a className="text-blue-400 hover:underline" href={`tel:${phoneDigits}`}>
                Call
              </a>
              <a
                className="text-green-400 hover:underline"
                href={`https://wa.me/${phoneDigits.replace("+", "")}`}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
            </span>
          }
        />
        <Field
          label="LinkedIn"
          value={
            <a
              href={resume.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:underline"
            >
              {resume.links.linkedin}
            </a>
          }
        />
        <Field
          label="GitHub"
          value={
            <a
              href={resume.links.github}
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:underline"
            >
              {resume.links.github}
            </a>
          }
        />
      </div>
    </section>
  );
}

function Field({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div>
      <p className="text-gray-400 text-sm">{label}</p>
      <p className="text-gray-100">{value}</p>
    </div>
  );
}

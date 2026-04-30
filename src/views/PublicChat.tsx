import ChatWindow from "../components/chat/ChatWindow";
import { resume } from "../data/resume";

export default function PublicChat() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-8 text-white">
      <h1 className="text-3xl font-bold mb-2">Ask the AI about {resume.name.split(" ")[0]}</h1>
      <p className="text-gray-400 mb-6">
        This assistant knows my professional background, projects, and skills. Try
        questions like "What's Vijay's React experience?" or "Has he worked with
        FastAPI?". Rate-limited to keep costs reasonable.
      </p>

      <div className="bg-slate-900/70 border border-slate-700 rounded-lg overflow-hidden">
        <ChatWindow
          mode="public"
          placeholder={`Ask about ${resume.name.split(" ")[0]}'s experience…`}
          emptyState={
            <div>
              <p>👋 I'm {resume.name.split(" ")[0]}'s portfolio assistant.</p>
              <p className="mt-2 text-sm">Try: "Tell me about his recent projects" or "What stack does he use?"</p>
            </div>
          }
        />
      </div>
    </section>
  );
}

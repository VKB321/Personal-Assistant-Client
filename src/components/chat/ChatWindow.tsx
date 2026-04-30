import React, { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { api } from "../../lib/api";

export type ChatMode = "public" | "owner";

interface ChatWindowProps {
  mode: ChatMode;
  userId?: string;
  session?: string;
  placeholder?: string;
  emptyState?: React.ReactNode;
}

interface ChatTurn {
  query: string;
  task: string;
}

export default function ChatWindow({
  mode,
  userId = "",
  session = "1",
  placeholder = "Ask anything…",
  emptyState,
}: ChatWindowProps) {
  const [message, setMessage] = useState("");
  const [history, setHistory] = useState<ChatTurn[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  const isOwner = mode === "owner";

  const fetchHistory = async () => {
    if (!isOwner || !userId) return;
    try {
      const res = await api.get("/tasks", { params: { session, user_id: userId } });
      if (res.data?.status === -1) {
        setError(res.data?.error || "Could not fetch history");
        return;
      }
      setHistory(res.data?.tasks ?? []);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not fetch history");
    }
  };

  const sendMessage = async () => {
    const trimmed = message.trim();
    if (!trimmed || loading) return;

    setError("");
    setLoading(true);
    const myMessage = trimmed;
    setMessage("");

    try {
      if (isOwner) {
        const res = await api.post("/ai", { message: myMessage, session, user_id: userId });
        if (res.data?.status === -1) {
          setError(res.data?.error || "Assistant error");
          return;
        }
        const reply: string = res.data?.reply ?? "";
        await api.post("/task", { message: reply, query: myMessage, session, user_id: userId });
        setHistory((h) => [...h, { query: myMessage, task: reply }]);
      } else {
        const res = await api.post("/chat/public", { message: myMessage });
        if (res.data?.status === -1) {
          setError(res.data?.error || "Assistant error");
          return;
        }
        setHistory((h) => [...h, { query: myMessage, task: res.data?.reply ?? "" }]);
      }
    } catch (err: unknown) {
      const e = err as { response?: { status?: number; data?: { detail?: string } } };
      if (e?.response?.status === 429) {
        setError("Rate limit reached. Try again in a bit.");
      } else {
        setError(e?.response?.data?.detail || (err instanceof Error ? err.message : "Request failed"));
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHistory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId, isOwner]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history, loading]);

  return (
    <div className="chat-wrapper">
      <div className="chat-messages">
        {history.length === 0 && !loading && emptyState && (
          <div className="text-center text-gray-400 mt-10">{emptyState}</div>
        )}

        {history.map((msg, i) => (
          <React.Fragment key={i}>
            <div className="chat-message user mr-1">
              <div className="bg-blue-500 py-2 px-4 rounded-tl-2xl rounded-br-2xl max-w-[90%]">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{msg.query}</ReactMarkdown>
              </div>
            </div>
            <div className="chat-message assistant">
              <div className="bg-zinc-100 text-black py-2 px-4 rounded-tl-3xl rounded-br-3xl max-w-[90%]">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{msg.task}</ReactMarkdown>
              </div>
            </div>
          </React.Fragment>
        ))}

        {loading && (
          <>
            <div className="chat-message user mr-1">
              <div className="bg-blue-500 py-2 px-4 rounded-tl-2xl rounded-br-2xl">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{message || "…"}</ReactMarkdown>
              </div>
            </div>
            <div className="chat-message assistant">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-500 border-t-transparent" />
            </div>
          </>
        )}

        <div ref={bottomRef} />
      </div>

      {error && (
        <div className="px-4 pb-2 text-sm text-red-400">{error}</div>
      )}

      <div className="chat-input rounded-md">
        <input
          value={loading ? "" : message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={placeholder}
          onKeyDown={(e) => {
            if (e.key === "Enter") sendMessage();
          }}
        />
        <button
          className={loading ? "disabled:bg-gray-400 cursor-not-allowed disabled:opacity-70" : ""}
          onClick={sendMessage}
          disabled={loading}
        >
          Send
        </button>
      </div>
    </div>
  );
}

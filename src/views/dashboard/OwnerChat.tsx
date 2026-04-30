import ChatWindow from "../../components/chat/ChatWindow";
import { useAuth } from "../../auth/AuthProvider";

export default function OwnerChat() {
  const { userId } = useAuth();
  return (
    <div className="p-4 h-full flex flex-col text-white">
      <h1 className="text-xl font-semibold mb-2">Owner Chat</h1>
      <p className="text-gray-400 text-sm mb-3">
        Full assistant with persistent memory. From here you can ask it to schedule notifications,
        check market signals, or draft cover letters for tracked jobs.
      </p>
      <div className="flex-1 bg-slate-900/70 border border-slate-700 rounded-lg overflow-hidden">
        <ChatWindow mode="owner" userId={userId} />
      </div>
    </div>
  );
}

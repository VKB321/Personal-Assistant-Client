import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../lib/api";

export default function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      const res = await api.post("/signup", { email, password });
      if (res.data?.status !== 1) {
        setError(res.data?.error || "Signup failed");
        return;
      }
      navigate("/login", { replace: true });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Signup failed");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <form
        onSubmit={onSubmit}
        className="bg-slate-800/80 border border-slate-700 p-8 rounded-lg w-full max-w-sm"
      >
        <h2 className="text-white text-2xl font-semibold mb-6">Sign up</h2>

        <label className="block text-sm text-gray-300 mb-1">Email</label>
        <input
          type="email"
          required
          value={email}
          className="w-full p-2 mb-4 bg-slate-700 text-white rounded"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="block text-sm text-gray-300 mb-1">Password</label>
        <input
          type="password"
          required
          value={password}
          className="w-full p-2 mb-4 bg-slate-700 text-white rounded"
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="text-red-400 text-sm mb-3">{error}</p>}

        <button
          type="submit"
          disabled={submitting}
          className="w-full bg-green-600 hover:bg-green-700 disabled:opacity-60 p-2 text-white rounded font-medium"
        >
          {submitting ? "Creating…" : "Sign up"}
        </button>

        <p className="mt-4 text-sm text-gray-400">
          Have an account?{" "}
          <Link to="/login" className="text-indigo-400 hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

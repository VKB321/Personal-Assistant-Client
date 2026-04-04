import { useState } from "react";
import axios from "axios";

const Signup = ({ setSignUp }: { setSignUp: (val: boolean) => void }) => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const signup = async () => {

    const register = await axios.post("https://personal-assistant-server-3.onrender.com/signup", {
      email,
      password
    })
    if (register.data.status === -1) {
      alert("Issue with Signup: " + register?.data?.error || "Unknown error");
      return;
    }
    setSignUp(false);
    alert("User created")

  }

  return (
    <div className="h-screen flex items-center justify-center bg-slate-900">

      <div className="bg-slate-800 p-8 rounded-lg w-96">

        <h2 className="text-white text-2xl mb-4">
          Signup
        </h2>

        <input
          placeholder="Email"
          className="w-full p-2 mb-3 bg-slate-700 text-white"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-3 bg-slate-700 text-white"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="w-full bg-green-600 p-2 text-white"
          onClick={signup}
        >
          Signup
        </button>
        <p className="mt-2 text-blue-400" onClick={() => setSignUp(false)}>Login</p>

      </div>

    </div>
  )
}

export default Signup

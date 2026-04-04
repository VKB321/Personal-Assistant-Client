import { useState } from "react";
import axios from "axios";

const Login = ({ setSignUp, reload, setReload }: { 
  setSignUp: (val: boolean) => void,
  reload: boolean,
  setReload: (val: boolean) => void
 }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {

    const res = await axios.post("https://personal-assistant-server-3.onrender.com/login", {
      email,
      password
    })
    if (!res?.data?.status) {
      alert(res?.data?.error || "Login failed")
      return;
    }
    localStorage.setItem("token", res?.data?.token)
    localStorage.setItem("user_id", res?.data?.user_id)

    setReload(!reload);
    // window.location.href = "/"
  }

  return (

    <div className="h-screen flex items-center justify-center bg-slate-900">

      <div className="bg-slate-800 p-8 rounded-lg w-96">

        <h2 className="text-white text-2xl mb-4">
          Login
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
          className="w-full bg-blue-600 p-2 text-white"
          onClick={login}
        >
          Login
        </button>
        <p className="mt-2 text-blue-400 cursor-pointer" onClick={() => setSignUp(true)}>SignUp</p>
      </div>

    </div>

  )
}

export default Login

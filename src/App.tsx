import React from "react";
import AIChat from "./views/AIchat";
// import ParticlesBackground from "./components/Modals/ParticlesBackground";
import Login from "./views/Login";
import Signup from "./views/Signup";
import About from "./views/About";
import Projects from "./views/Project";
import Contacts from "./views/Contacts";

export default function App() {
  const [token, setToken] = React.useState('');
  const [user_id, setUser_id] = React.useState('');
  const [showSignUp, setSignUp] = React.useState(false);
  const [reload, setReload] = React.useState(false);
  const [page, setPage] = React.useState('about');

  // const handleLogout = () => {
  //   localStorage.removeItem('token');
  //   localStorage.removeItem('user_id');
  //   setReload(!reload);
  // };

  React.useEffect(() => {

    setToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InZpamF5a3VtYXJiaHVreWEwMDlAZ21haWwuY29tIiwiZXhwIjoxNzc1MjIzODQ5fQ.Ln9U6Kmgup4MkH-W_I5UMe9wNt2oeUWSMpJ8_53FZxY');
    setUser_id('vijaykumarbhukya009@gmail.com');
    // setToken(localStorage.getItem("token") || '');
    // setUser_id(localStorage.getItem("user_id") || '');

    console.log("Token from localStorage:");
  }, [reload])
  return (
    <div className='bg-slate-900'>
      {!token && !showSignUp && <Login setSignUp={setSignUp} reload={reload} setReload={setReload} />}
      {showSignUp && <Signup setSignUp={setSignUp} />}
      {/* <ParticlesBackground /> */}
      {
        token &&
        <div className="grid grid-cols-12 gap-2 m-1">
          <div className="col-span-2 flex flex-col border-1 border-gray-400 rounded-md">
            <a href="#" onClick={() => setPage('about')} className={(page == 'about' ? "text-indigo-500 hover:text-white" : " text-white") + " p-2 hover:bg-blue-600 rounded"}>
              About
            </a>
            <a href="#" onClick={() => setPage('contact')} className={(page == 'contact' ? "text-indigo-500 hover:text-white" : " text-white") + " p-2 hover:bg-blue-600 rounded"}>
              Contact
            </a>
            <a href="#" onClick={() => setPage('projects')} className={(page == 'projects' ? "text-indigo-500 hover:text-white" : " text-white") + " p-2 hover:bg-blue-600 rounded"}>
              Projects
            </a>
            <a href="#" onClick={() => setPage('agent')} className={(page == 'agent' ? " text-indigo-500 hover:text-white" : " text-white") + " p-2 hover:bg-blue-600 rounded"}>
              Assistance
            </a>
            {/* <button onClick={handleLogout} className="mt-auto mb-9 p-2 bg-red-600 hover:bg-red-700 rounded text-white">
              Logout
            </button> */}
          </div>

          <div className="col-span-10 ">
            {page == 'about' && <div className="chat-wrapper"><About /> </div>}
            {page == 'agent' && <AIChat token={token} user_id={user_id} />}
            {page == 'contact' && <div className="chat-wrapper"><Contacts /></div>}
            {page == 'projects' && <div className="chat-wrapper"><Projects /></div>}
          </div>
        </div>

      }
    </div>
  )
}

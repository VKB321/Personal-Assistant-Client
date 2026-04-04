


import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const AIChat = ({ token, user_id }: { token: string, user_id: string }) => {
    const [message, setMessage] = useState("");
    const [response, setResponse] = useState<
        { query: string; task: string }[]
    >([]);
    // const token = localStorage.getItem("token");
    // const user_id = localStorage.getItem("user_id");

    const [loading, setLoading] = useState(false);

    const bottomRef = useRef<HTMLDivElement>(null);

    const fetchMessages = async () => {

        const resp = await axios.get("https://personal-assistant-server-3.onrender.com/tasks", {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                session: "1",
                user_id
            }
        });
        if (resp.data.status === -1) {
            alert("Issue with Fetch: " + resp?.data?.error || "Unknown error");
            return;
        }
        setResponse(resp.data.tasks);
    };

    const sendMessage = async () => {
        if (!message.trim()) return;

        setLoading(true);
        // const token = localStorage.getItem("token")

        try {
            const res = await axios.post("https://personal-assistant-server-3.onrender.com/ai", {
                message,
                session: "1",
                user_id
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (res.data.status === -1) {
                alert("Issue with Agent: " + res?.data?.error || "Unknown error");
                setLoading(false);
                return;
            }
            const postData = await axios.post("https://personal-assistant-server-3.onrender.com/task", {
                message: res.data.reply,
                query: message,
                session: "1",
                user_id
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (postData.data.status === -1) {
                alert("Issue with Upload: " + postData?.data?.error || "Unknown error");
                setLoading(false);
                return;
            }
            setMessage("");
            await fetchMessages();
        } catch (error) {
            console.error(error);
        }

        setLoading(false);
    };

    useEffect(() => {
        (() => fetchMessages())();
    }, [token]);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [response, loading]);

    return (

        <div className="chat-wrapper">
            <div className="chat-messages">
                {response.map((msg, index) => (
                    <React.Fragment key={index}>

                        {/* User Message */}
                        <div className="chat-message user mr-1">
                            <div className="bg-blue-500 py-2 px-4 rounded-tl-2xl rounded-br-2xl max-w-[90%]">
                                {/* <span className="text-black-600 font-bold">user</span> */}

                                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                    {msg.query}
                                </ReactMarkdown>
                            </div>
                        </div>

                        {/* AI Message */}
                        <div className="chat-message assistant">
                            <div className="bg-zinc-100 text-black py-2 px-4 rounded-tl-3xl rounded-br-3xl  max-w-[90%]">
                                {/* <span className="text-indigo-600 font-bold">Assistant</span> */}
                                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                    {msg.task}
                                </ReactMarkdown>
                            </div>
                        </div>

                    </React.Fragment>
                ))}

                {loading && (<>
                    <div className="chat-message user mr-1">
                        <div className="bg-blue-500 py-2 px-4 rounded-tl-2xl rounded-br-2xl ">
                            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                {message}
                            </ReactMarkdown>
                        </div>
                    </div>
                    <div className="chat-message assistant">
                        <div className="bg-zinc-100 text-black h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-500 border-t-transparent">

                        </div>
                    </div>
                </>
                )}

                <div ref={bottomRef} />

            </div>

            <div className="chat-input rounded-md">
                <input
                    value={loading ? "" : message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Ask anything..."
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            sendMessage();
                        }
                    }}
                />

                <button className={loading ? "disabled:bg-gray-400 cursor-not-allowed disabled:opacity-70" : ""} onClick={sendMessage}>
                    Send
                </button>
            </div>

        </div>
    );
};

export default AIChat;

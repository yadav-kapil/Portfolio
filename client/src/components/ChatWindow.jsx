import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import { Player } from "@lottiefiles/react-lottie-player";
import chatbotAnim from "../assets/videos/chatbot.json";
import {
  LuSend,
  LuX,
  LuBot,
  LuUser,
  LuFolder,
  LuDownload,
  LuCalendar,
  LuPaperclip,
  LuFileText,
  LuCpu,
  LuLayers,
  LuCode,
  LuDatabase,
  LuArrowRight,
} from "react-icons/lu";
import { FaReact, FaNodeJs, FaJs, FaLinkedinIn } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

export default function ChatWindow({ onClose }) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      text: "Hi there! 👋 I'm Kapil Bot. How can I help you today?",
      time: "10:30 AM",
      type: "text",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (textToSend) => {
    const text = textToSend || input;
    if (!text.trim()) return;

    const userMessage = {
      id: Date.now(),
      sender: "user",
      text: text.trim(),
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      type: "text",
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!textToSend) setInput("");
    setIsTyping(true);

    const apiUri = import.meta.env.VITE_SERVER_URI || "http://localhost:3001";

    fetch(`${apiUri}/api/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: text.trim() }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to contact chat API");
        }
        return res.json();
      })
      .then((data) => {
        const botMessage = {
          id: Date.now() + 1,
          sender: "bot",
          text: data.text || "Sorry, I received an empty response from the server.",
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          type: "text",
        };
        setMessages((prev) => [...prev, botMessage]);
        setIsTyping(false);
      })
      .catch((err) => {
        console.error(err);
        const errorMessage = {
          id: Date.now() + 1,
          sender: "bot",
          text: "Oops! ⚠️ Connection error. Please verify the backend is running and try again.",
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          type: "text",
        };
        setMessages((prev) => [...prev, errorMessage]);
        setIsTyping(false);
      });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSend();
  };

  const handleReset = () => {
    setMessages([
      {
        id: 1,
        sender: "bot",
        text: "Hi there! 👋 I'm Kapil Bot. How can I help you today?",
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        type: "text",
      },
    ]);
    setIsTyping(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 50, scale: 0.9 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed bottom-6 right-6 z-50 w-[350px] sm:w-[380px] h-[520px] bg-white/95 dark:bg-[#07081A]/95 border border-slate-200/80 dark:border-white/[0.08] shadow-2xl rounded-[2rem] overflow-hidden flex flex-col font-inter backdrop-blur-md"
    >
      {/* Header */}
      <div className="px-5 py-4 border-b border-slate-200/60 dark:border-white/[0.06] flex items-center justify-between text-slate-800 dark:text-white shadow-sm select-none shrink-0 bg-white/80 dark:bg-[#07081A]/80">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-white/[0.03] overflow-hidden flex items-center justify-center shrink-0">
            <Player
              autoplay
              loop
              src={chatbotAnim}
              className="w-12 h-12 scale-125 pointer-events-none"
            />
          </div>
          <div>
            <div className="text-sm font-black font-manrope tracking-tight flex items-center gap-1">
              <span>Kapil Bot</span>
              <span className="text-indigo-500 text-xs">✦</span>
            </div>
            <div className="text-[10px] text-slate-400 dark:text-slate-500 font-semibold flex items-center gap-1 mt-0.5">
              <span>Your AI Assistant</span>
              <span className="text-slate-300 dark:text-slate-700 font-normal">
                •
              </span>
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse inline-block"></span>
                <span>Online</span>
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1 text-slate-400 dark:text-slate-500">
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-slate-50 dark:hover:bg-white/[0.04] transition-all cursor-pointer text-slate-550 dark:text-slate-400"
          >
            <LuX className="w-4.5 h-4.5" />
          </button>
        </div>
      </div>

      {/* Message List Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/20 dark:bg-[#030308]/10 relative">
        {/* Soft background sparkles */}
        <div className="absolute top-[25%] right-[15%] text-indigo-400/10 dark:text-indigo-400/5 select-none pointer-events-none">
          <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
            <path d="M12 0l3.09 8.91L24 12l-8.91 3.09L12 24l-3.09-8.91L0 12l8.91-3.09z" />
          </svg>
        </div>
        <div className="absolute bottom-[25%] left-[15%] text-purple-400/10 dark:text-purple-400/5 select-none pointer-events-none">
          <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
            <path d="M12 0l3.09 8.91L24 12l-8.91 3.09L12 24l-3.09-8.91L0 12l8.91-3.09z" />
          </svg>
        </div>

        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex items-start gap-2.5 max-w-[90%] ${
              msg.sender === "user" ? "ml-auto flex-row-reverse" : ""
            }`}
          >
            {msg.sender === "bot" && (
              <div className="w-7 h-7 rounded-full bg-slate-100 dark:bg-white/[0.04] overflow-hidden flex items-center justify-center shrink-0 border border-slate-200/50 dark:border-transparent">
                <Player
                  autoplay
                  loop
                  src={chatbotAnim}
                  className="w-9 h-9 scale-125"
                />
              </div>
            )}

            <div className="flex flex-col gap-1 w-full min-w-0">
              <div
                className={`px-4 py-3 rounded-2xl text-[12.5px] leading-relaxed font-semibold shadow-sm w-fit ${
                  msg.sender === "user"
                    ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 text-white rounded-tr-none ml-auto"
                    : "bg-white dark:bg-white/[0.03] border border-slate-100 dark:border-white/[0.02] text-slate-800 dark:text-slate-200 rounded-tl-none mr-auto"
                }`}
              >
                {/* Standard text message */}
                {msg.text}

                {/* Structured Tech Skills response (matches mockup exactly) */}
                {msg.type === "skills" && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4 mt-4 pt-3.5 border-t border-slate-100 dark:border-white/[0.04]">
                    {/* Frontend */}
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0">
                        <FaReact className="w-4.5 h-4.5" />
                      </div>
                      <div>
                        <div className="text-[10px] font-bold text-slate-800 dark:text-slate-200 leading-none mb-0.5">
                          Frontend
                        </div>
                        <div className="text-[8.5px] font-bold text-slate-400 dark:text-slate-600 leading-none">
                          React, JS, Tailwind
                        </div>
                      </div>
                    </div>

                    {/* Tools */}
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500 shrink-0">
                        <LuCpu className="w-4.5 h-4.5" />
                      </div>
                      <div>
                        <div className="text-[10px] font-bold text-slate-800 dark:text-slate-200 leading-none mb-0.5">
                          Tools
                        </div>
                        <div className="text-[8.5px] font-bold text-slate-400 dark:text-slate-600 leading-none">
                          Git, Docker, AWS
                        </div>
                      </div>
                    </div>

                    {/* Backend */}
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-xl bg-green-500/10 flex items-center justify-center text-green-500 shrink-0">
                        <FaNodeJs className="w-4.5 h-4.5" />
                      </div>
                      <div>
                        <div className="text-[10px] font-bold text-slate-800 dark:text-slate-200 leading-none mb-0.5">
                          Backend
                        </div>
                        <div className="text-[8.5px] font-bold text-slate-400 dark:text-slate-600 leading-none">
                          Node, Express, Spring
                        </div>
                      </div>
                    </div>

                    {/* Languages */}
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-xl bg-yellow-500/10 flex items-center justify-center text-yellow-600 shrink-0">
                        <FaJs className="w-4.5 h-4.5" />
                      </div>
                      <div>
                        <div className="text-[10px] font-bold text-slate-800 dark:text-slate-200 leading-none mb-0.5">
                          Languages
                        </div>
                        <div className="text-[8.5px] font-bold text-slate-400 dark:text-slate-600 leading-none">
                          JS, Java, SQL
                        </div>
                      </div>
                    </div>

                    {/* Database */}
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-650 shrink-0">
                        <LuDatabase className="w-4.5 h-4.5" />
                      </div>
                      <div>
                        <div className="text-[10px] font-bold text-slate-800 dark:text-slate-200 leading-none mb-0.5">
                          Database
                        </div>
                        <div className="text-[8.5px] font-bold text-slate-400 dark:text-slate-600 leading-none">
                          MongoDB, MySQL
                        </div>
                      </div>
                    </div>

                    {/* Other */}
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-550 shrink-0">
                        <LuLayers className="w-4.5 h-4.5" />
                      </div>
                      <div>
                        <div className="text-[10px] font-bold text-slate-800 dark:text-slate-200 leading-none mb-0.5">
                          Other
                        </div>
                        <div className="text-[8.5px] font-bold text-slate-400 dark:text-slate-600 leading-none">
                          REST APIs, JWT, Postman
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Structured Projects response */}
                {msg.type === "projects" && (
                  <div className="flex flex-col gap-3 mt-4 pt-3.5 border-t border-slate-100 dark:border-white/[0.04]">
                    {msg.projects.map((proj, idx) => (
                      <a
                        key={idx}
                        href={proj.link}
                        className="flex flex-col gap-1.5 p-3 rounded-2xl bg-slate-50/50 dark:bg-white/[0.02] border border-slate-100 dark:border-white/[0.03] hover:border-indigo-500/30 transition-all block text-left"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-[11.5px] font-extrabold text-indigo-650 dark:text-indigo-400 flex items-center gap-1.5">
                            <LuCode className="w-3.5 h-3.5" /> {proj.name}
                          </span>
                          <span className="text-[9px] font-bold text-slate-400 dark:text-slate-600 font-mono">
                            View
                          </span>
                        </div>
                        <p className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold">
                          {proj.desc}
                        </p>
                        <span className="text-[8px] font-bold text-slate-400 dark:text-slate-550 font-mono tracking-wider">
                          {proj.tech}
                        </span>
                      </a>
                    ))}
                  </div>
                )}

                {/* Download resume CTA */}
                {msg.type === "resume" && (
                  <div className="mt-3.5 pt-3.5 border-t border-slate-100 dark:border-white/[0.04]">
                    <a
                      href="https://drive.google.com/file/d/1QGK9XuHoT_tlNwpXFXTBgfFbzr1gg2fI/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:opacity-95 text-white font-bold text-[10px] font-mono uppercase tracking-wider shadow-sm transition-all"
                    >
                      <LuDownload className="w-3.5 h-3.5" /> Download Resume
                    </a>
                  </div>
                )}

                {/* Contact / Work with me response with LinkedIn Redirect button */}
                {msg.type === "contact" && (
                  <div className="mt-3.5 pt-3.5 border-t border-slate-100 dark:border-white/[0.04] w-full">
                    <a
                      href="https://www.linkedin.com/in/kapilyadav9560/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:opacity-95 text-white font-bold text-[10px] font-mono uppercase tracking-wider shadow-sm hover:scale-[1.01] transition-all w-full text-center"
                    >
                      <FaLinkedinIn className="w-3.5 h-3.5" /> Let's Connect on
                      LinkedIn
                    </a>
                  </div>
                )}
              </div>
              <span
                className={`text-[8px] font-mono font-bold text-slate-400 dark:text-slate-655 flex items-center gap-1.5 ${
                  msg.sender === "user" ? "ml-auto" : "mr-auto pl-9"
                }`}
              >
                <span>{msg.time}</span>
                {msg.sender === "user" && (
                  <span className="text-indigo-500 font-bold select-none">
                    ✓✓
                  </span>
                )}
              </span>
            </div>
          </div>
        ))}

        {/* Typing Simulator */}
        {isTyping && (
          <div className="flex items-start gap-2.5 max-w-[85%] animate-pulse">
            <div className="w-7 h-7 rounded-full bg-slate-100 dark:bg-white/[0.04] overflow-hidden flex items-center justify-center shrink-0 border border-slate-200/50 dark:border-transparent">
              <Player
                autoplay
                loop
                src={chatbotAnim}
                className="w-9 h-9 scale-125"
              />
            </div>
            <div className="px-3.5 py-3 rounded-2xl rounded-tl-none bg-white dark:bg-white/[0.03] border border-slate-100 dark:border-white/[0.02] flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-600 animate-bounce"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-600 animate-bounce delay-150"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-600 animate-bounce delay-300"></span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Actions Action Pills (matches mockup) */}
      <div className="px-3.5 py-2.5 flex items-center gap-2 overflow-x-auto shrink-0 bg-white/70 dark:bg-[#07081A]/70 border-t border-slate-200/40 dark:border-white/[0.04] select-none scrollbar-none">
        {/* Project Pill */}
        <button
          onClick={() => handleSend("Tell me about your projects")}
          className="flex items-center gap-1 px-3 py-1.5 rounded-full border border-slate-200 dark:border-white/[0.06] bg-white dark:bg-white/[0.02] hover:border-indigo-500/30 text-[10px] font-bold text-indigo-650 dark:text-indigo-400 shrink-0 shadow-sm cursor-pointer hover:bg-slate-50 transition-all font-manrope"
        >
          <LuFolder className="w-3.5 h-3.5" />
          <span>Tell me about your projects</span>
        </button>

        {/* Resume Pill */}
        <button
          onClick={() => handleSend("Download Resume")}
          className="flex items-center gap-1 px-3 py-1.5 rounded-full border border-slate-200 dark:border-white/[0.06] bg-white dark:bg-white/[0.02] hover:border-indigo-500/30 text-[10px] font-bold text-indigo-650 dark:text-indigo-400 shrink-0 shadow-sm cursor-pointer hover:bg-slate-50 transition-all font-manrope"
        >
          <LuDownload className="w-3.5 h-3.5" />
          <span>Download Resume</span>
        </button>

        {/* Work with me Pill */}
        <button
          onClick={() => handleSend("Work with me")}
          className="flex items-center gap-1 px-3 py-1.5 rounded-full border border-slate-200 dark:border-white/[0.06] bg-white dark:bg-white/[0.02] hover:border-indigo-500/30 text-[10px] font-bold text-indigo-650 dark:text-indigo-400 shrink-0 shadow-sm cursor-pointer hover:bg-slate-50 transition-all font-manrope"
        >
          <LuCalendar className="w-3.5 h-3.5" />
          <span>Work with me</span>
        </button>
      </div>

      {/* Input Message Form */}
      <div className="p-3 bg-white dark:bg-[#07081A] border-t border-slate-200/80 dark:border-white/[0.08] shrink-0">
        <form
          onSubmit={handleFormSubmit}
          className="flex items-center gap-2 bg-slate-50/50 dark:bg-white/[0.01] border border-slate-200/80 dark:border-white/[0.06] rounded-full p-1.5 pl-3.5 pr-1.5 shadow-sm"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 px-1 bg-transparent text-xs font-semibold text-slate-800 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-655 focus:outline-none"
          />

          <button
            type="submit"
            disabled={!input.trim()}
            className="w-8.5 h-8.5 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-650 text-white flex items-center justify-center shadow-md hover:opacity-95 active:scale-95 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
          >
            <LuSend className="w-3.5 h-3.5" />
          </button>
        </form>

        {/* Small footer author tag */}
        <div className="text-[8.5px] font-bold text-slate-400 dark:text-slate-600 text-center mt-2 font-mono flex items-center justify-center gap-1 select-none">
          <span className="text-indigo-500 font-bold">✦</span>
          <span>Built with 💜 by Kapil Yadav</span>
        </div>
      </div>
    </motion.div>
  );
}

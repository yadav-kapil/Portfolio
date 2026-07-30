import { useRef, useEffect } from "react";
import { motion } from "motion/react";
import { useChatbot } from "../hooks/useChatbot";
import {
  LuSend,
  LuX,
  LuFolder,
  LuDownload,
  LuCalendar,
  LuRotateCcw,
  LuUser,
  LuCpu,
  LuGraduationCap,
  LuMonitor,
  LuMail,
  LuBot,
} from "react-icons/lu";

export default function ChatWindow({ onClose }) {
  const {
    messages,
    input,
    setInput,
    isTyping,
    handleSend,
    handleFormSubmit,
    handleReset,
  } = useChatbot();

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 50, scale: 0.9 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed bottom-4 right-4 left-4 sm:left-auto sm:right-6 sm:bottom-6 z-50 w-auto sm:w-[380px] h-[78vh] sm:h-[520px] max-h-[520px] bg-white/95 dark:bg-[#07081A]/95 border border-slate-200/80 dark:border-white/[0.08] shadow-2xl rounded-[2rem] overflow-hidden flex flex-col font-inter backdrop-blur-md"
    >
      
      <div className="px-5 py-4 border-b border-slate-200/60 dark:border-white/[0.06] flex items-center justify-between text-slate-800 dark:text-white shadow-sm select-none shrink-0 bg-white/80 dark:bg-[#07081A]/80">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0 border border-indigo-100/50 dark:border-indigo-500/10">
            <LuBot className="w-5.5 h-5.5" strokeWidth={2} />
          </div>
          <div>
            <div className="text-sm font-black font-manrope tracking-tight flex items-center gap-1">
              <span>Kapil Yadav</span>
              <span className="text-indigo-500 text-xs">✦</span>
            </div>
            <div className="text-[10px] text-slate-400 dark:text-slate-500 font-semibold flex items-center gap-1 mt-0.5">
              <span>AI Assistant Chatbot</span>
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
        <div className="flex items-center gap-1.5 text-slate-400 dark:text-slate-500">
          <button
            onClick={handleReset}
            title="Reset Chat"
            className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-slate-50 dark:hover:bg-white/[0.04] transition-all cursor-pointer text-slate-550 dark:text-slate-400"
          >
            <LuRotateCcw className="w-4.5 h-4.5" />
          </button>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-slate-50 dark:hover:bg-white/[0.04] transition-all cursor-pointer text-slate-550 dark:text-slate-400"
          >
            <LuX className="w-4.5 h-4.5" />
          </button>
        </div>
      </div>

      
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/20 dark:bg-[#030308]/10 relative">
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
              <div className="w-7 h-7 rounded-full bg-indigo-50 dark:bg-indigo-950/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0 border border-indigo-100/30 dark:border-indigo-500/10">
                <LuBot className="w-4 h-4" strokeWidth={2} />
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
                {msg.component || msg.text}
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

        
        {isTyping && (
          <div className="flex items-start gap-2.5 max-w-[85%] animate-pulse">
            <div className="w-7 h-7 rounded-full bg-indigo-50 dark:bg-indigo-950/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0 border border-indigo-100/30 dark:border-indigo-500/10">
              <LuBot className="w-4 h-4" strokeWidth={2} />
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

      
      <div className="px-3.5 py-2.5 flex items-center gap-2 overflow-x-auto shrink-0 bg-white/70 dark:bg-[#07081A]/70 border-t border-slate-200/40 dark:border-white/[0.04] select-none scrollbar-none">
        
        <button
          onClick={() => handleSend("Who is Kapil?")}
          className="flex items-center gap-1 px-3 py-1.5 rounded-full border border-slate-200 dark:border-white/[0.06] bg-white dark:bg-white/[0.02] hover:border-indigo-500/30 text-[10px] font-bold text-indigo-650 dark:text-indigo-400 shrink-0 shadow-sm cursor-pointer hover:bg-slate-50 transition-all font-manrope"
        >
          <LuUser size={13} />
          <span>Who is Kapil?</span>
        </button>

        
        <button
          onClick={() => handleSend("What are your skills?")}
          className="flex items-center gap-1 px-3 py-1.5 rounded-full border border-slate-200 dark:border-white/[0.06] bg-white dark:bg-white/[0.02] hover:border-indigo-500/30 text-[10px] font-bold text-indigo-650 dark:text-indigo-400 shrink-0 shadow-sm cursor-pointer hover:bg-slate-50 transition-all font-manrope"
        >
          <LuCpu size={13} />
          <span>What are your skills?</span>
        </button>

        
        <button
          onClick={() => handleSend("Show me your projects")}
          className="flex items-center gap-1 px-3 py-1.5 rounded-full border border-slate-200 dark:border-white/[0.06] bg-white dark:bg-white/[0.02] hover:border-indigo-500/30 text-[10px] font-bold text-indigo-650 dark:text-indigo-400 shrink-0 shadow-sm cursor-pointer hover:bg-slate-50 transition-all font-manrope"
        >
          <LuFolder size={13} />
          <span>Show me your projects</span>
        </button>

        
        <button
          onClick={() => handleSend("Where did you study?")}
          className="flex items-center gap-1 px-3 py-1.5 rounded-full border border-slate-200 dark:border-white/[0.06] bg-white dark:bg-white/[0.02] hover:border-indigo-500/30 text-[10px] font-bold text-indigo-650 dark:text-indigo-400 shrink-0 shadow-sm cursor-pointer hover:bg-slate-50 transition-all font-manrope"
        >
          <LuGraduationCap size={13} />
          <span>Where did you study?</span>
        </button>

        
        <button
          onClick={() => handleSend("What services do you provide?")}
          className="flex items-center gap-1 px-3 py-1.5 rounded-full border border-slate-200 dark:border-white/[0.06] bg-white dark:bg-white/[0.02] hover:border-indigo-500/30 text-[10px] font-bold text-indigo-650 dark:text-indigo-400 shrink-0 shadow-sm cursor-pointer hover:bg-slate-50 transition-all font-manrope"
        >
          <LuMonitor size={13} />
          <span>What services do you provide?</span>
        </button>

        
        <button
          onClick={() => handleSend("Download Resume")}
          className="flex items-center gap-1 px-3 py-1.5 rounded-full border border-slate-200 dark:border-white/[0.06] bg-white dark:bg-white/[0.02] hover:border-indigo-500/30 text-[10px] font-bold text-indigo-650 dark:text-indigo-400 shrink-0 shadow-sm cursor-pointer hover:bg-slate-50 transition-all font-manrope"
        >
          <LuDownload size={13} />
          <span>Download Resume</span>
        </button>

        
        <button
          onClick={() => handleSend("How can I hire you?")}
          className="flex items-center gap-1 px-3 py-1.5 rounded-full border border-slate-200 dark:border-white/[0.06] bg-white dark:bg-white/[0.02] hover:border-indigo-500/30 text-[10px] font-bold text-indigo-650 dark:text-indigo-400 shrink-0 shadow-sm cursor-pointer hover:bg-slate-50 transition-all font-manrope"
        >
          <LuMail size={13} />
          <span>How can I hire you?</span>
        </button>
      </div>

      
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

        
        <div className="text-[8.5px] font-bold text-slate-400 dark:text-slate-600 text-center mt-2 font-mono flex items-center justify-center gap-1 select-none">
          <span className="text-indigo-500 font-bold">✦</span>
          <span>Built with 💜 by Kapil Yadav</span>
        </div>
      </div>
    </motion.div>
  );
}

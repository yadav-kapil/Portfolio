import { useState } from "react";
import {
  BotIntroResponse,
  AboutKapilResponse,
  EducationResponse,
  SkillsResponse,
  ProjectsResponse,
  ServicesResponse,
  ResumeResponse,
  ContactResponse,
  FallbackResponse,
} from "../components/ChatbotAnswers";

export const useChatbot = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      component: <BotIntroResponse />,
    },
  ]);
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = (textToSend) => {
    const text = textToSend || input;
    if (!text.trim()) return;

    const userMessage = {
      id: Date.now(),
      sender: "user",
      text: text.trim(),
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMessage]);
    
    
    const currentHistory = [...history];
    
    
    setHistory((prev) => [...prev, { role: "user", text: text.trim() }]);

    if (!textToSend) setInput("");
    setIsTyping(true);

    
    setTimeout(async () => {
      const lowerText = text.toLowerCase();
      
      
      const wordMatch = (keywords) => {
        const pattern = new RegExp(`\\b(${keywords.join("|")})\\b`, "i");
        return pattern.test(lowerText);
      };

      let responseComponent = null;
      let predefinedText = "";

      if (wordMatch(["project", "projects"])) {
        responseComponent = <ProjectsResponse />;
        predefinedText = "Kapil's key projects include: 1) Fine-Tuned T5 Dialogue Summarizer (Seq2Seq NLP on SAMSum dialogues, FastAPI, Docker, EC2, live at fine-tunned-t5transformer-summarizer.duckdns.org), 2) Queue Cure (real-time clinic queues with Socket.IO, Express, Docker), 3) Rentora (vacation rental marketplace with Cloudinary & role-based dashboards), 4) Lumora AI (generative media platform with Fal.ai), and 5) Learnify (AI doubt-solving assistant with Gemini API & voice input).";
      } else if (wordMatch(["skill", "skills", "tech", "stack", "technologies"])) {
        responseComponent = <SkillsResponse />;
        predefinedText = "Kapil's technical skills include: AI/ML & NLP (PyTorch, Hugging Face, Transformers, Fine-Tuning, Seq2Seq, LLMs, Scikit-Learn, NumPy, Pandas, Ollama, Fal.ai), Backend (FastAPI, Node.js, Express.js, REST APIs, Socket.io, JWT, Mongoose, Cloudinary), Frontend (HTML, CSS, React.js, Vite, Redux, Tailwind CSS, Framer Motion), DevOps/Cloud (Docker, AWS EC2, Nginx, CI/CD, Git LFS, Linux), and Databases (MongoDB, MySQL).";
      } else if (wordMatch(["resume", "cv"])) {
        responseComponent = <ResumeResponse />;
        predefinedText = "You can download Kapil's resume using this Google Drive link: https://drive.google.com/file/d/1UnXPRgETb4L85TAyKut17dse7LmGutqI/view?usp=drive_link";
      } else if (wordMatch(["contact", "hire", "email", "social", "socials", "linkedin", "github"])) {
        responseComponent = <ContactResponse />;
        predefinedText = "You can reach out or connect with Kapil via: Email (ky843622@gmail.com), Phone ((+91) 9560340701), LinkedIn (https://www.linkedin.com/in/kapilyadav9560/), and GitHub (https://github.com/yadav-kapil).";
      } else if (wordMatch(["about", "bio", "profile", "kapil"])) {
        responseComponent = <AboutKapilResponse />;
        predefinedText = "Kapil Yadav is a Full Stack Developer & AI Engineer studying Computer Science & Technology at IIEST Shibpur. He specializes in building scalable web applications, intelligent AI systems, and production cloud architectures.";
      } else if (wordMatch(["education", "college", "degree", "university"])) {
        responseComponent = <EducationResponse />;
        predefinedText = "Kapil's educational timeline: B.Tech in Computer Science & Technology at IIEST Shibpur (2025 - Present), Class 12 CBSE Board at Nehru International Public School (2025, Grade: 92%), Class 10 CBSE Board at Nehru International Public School (2023, Grade: 92.4%).";
      } else if (wordMatch(["service", "services", "offer", "offers"])) {
        responseComponent = <ServicesResponse />;
        predefinedText = "Kapil provides services in: Full Stack Web App development (MERN, REST APIs), AI & Machine Learning solutions (intelligent AI integrations, ML modeling, FastAPI microservices), Scalable & Responsive layouts (Tailwind CSS, Framer Motion), and Cloud Deployment (AWS, Docker, CI/CD).";
      } else if (wordMatch(["hi","hii", "hello", "hey", "help", "bot"])) {
        responseComponent = <BotIntroResponse />;
        predefinedText = "Hi there! I'm Kapil's AI Assistant. I can answer questions about Kapil's biography, skills, projects, education, services, and how you can contact or hire him.";
      }

      if (responseComponent) {
        const botMessage = {
          id: Date.now() + 1,
          sender: "bot",
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          component: responseComponent,
        };
        setMessages((prev) => [...prev, botMessage]);
        setHistory((prev) => [...prev, { role: "chatbot", text: predefinedText }]);
        setIsTyping(false);
      } else {
        
        try {
          const response = await fetch(
            `${import.meta.env.VITE_SERVER_URI}/api/chat`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ 
                message: text.trim(),
                history: currentHistory
              }),
            }
          );

          if (!response.ok) {
            throw new Error("Backend API response was not OK");
          }

          const data = await response.json();
          const botMessage = {
            id: Date.now() + 1,
            sender: "bot",
            time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
            text: data.text || "Hello! Thanks for reaching out.",
          };
          setMessages((prev) => [...prev, botMessage]);
          setHistory((prev) => [...prev, { role: "chatbot", text: data.text || "Hello! Thanks for reaching out." }]);
        } catch (error) {
          console.error("Chatbot API Error:", error);
          
          const botMessage = {
            id: Date.now() + 1,
            sender: "bot",
            time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
            component: <FallbackResponse />,
          };
          setMessages((prev) => [...prev, botMessage]);
          setHistory((prev) => [...prev, { role: "chatbot", text: "Sorry, I encountered an error. Please try again." }]);
        } finally {
          setIsTyping(false);
        }
      }
    }, 900);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSend();
  };

  const handleReset = () => {
    setMessages([
      {
        id: Date.now(),
        sender: "bot",
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        component: <BotIntroResponse />,
      },
    ]);
    setHistory([]);
    setIsTyping(false);
  };

  return {
    messages,
    input,
    setInput,
    isTyping,
    handleSend,
    handleFormSubmit,
    handleReset,
  };
};

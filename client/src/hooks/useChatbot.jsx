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
        predefinedText = "Kapil's featured projects are Queue Cure (a real-time clinic queue management platform built with Socket.IO, Express, and Docker), Rentora (a peer-to-peer vacation rental marketplace with role-based guest/host dashboards, Wishlists, and Cloudinary media), and Learnify (an AI-powered learning assistant with Gemini API integration).";
      } else if (wordMatch(["skill", "skills", "tech", "stack", "technologies"])) {
        responseComponent = <SkillsResponse />;
        predefinedText = "Kapil's technical skills include: Programming Languages (Python, JavaScript, C, Java), Frontend (HTML, CSS, React.js, Redux, Bootstrap, Tailwind CSS, Framer Motion), Backend (Node.js, Express.js, REST APIs, Socket.io, JWT, Mongoose, Cloudinary), Databases (MongoDB, MySQL), DevOps/Cloud (Docker, AWS EC2, Nginx, CI/CD, Linux), AI/ML (NumPy, Pandas, Scikit-Learn, Ollama, LLMs).";
      } else if (wordMatch(["resume", "cv"])) {
        responseComponent = <ResumeResponse />;
        predefinedText = "You can download Kapil's resume using this Google Drive link: https://drive.google.com/file/d/1QGK9XuHoT_tlNwpXFXTBgfFbzr1gg2fI/view?usp=sharing";
      } else if (wordMatch(["contact", "hire", "email", "social", "socials", "linkedin", "github"])) {
        responseComponent = <ContactResponse />;
        predefinedText = "You can reach out or connect with Kapil via: Email (ky843622@gmail.com), Phone ((+91) 9560340701), LinkedIn (https://www.linkedin.com/in/kapilyadav9560/), and GitHub (https://github.com/yadav-kapil).";
      } else if (wordMatch(["about", "bio", "profile", "kapil"])) {
        responseComponent = <AboutKapilResponse />;
        predefinedText = "Kapil Yadav is a Full Stack Developer and IT undergraduate student at IIEST Shibpur. He is a Quick Learner, Problem Solver, Detail-Oriented, and a Team Player who loves turning ideas into clean, fast, and scalable web applications.";
      } else if (wordMatch(["education", "college", "degree", "university"])) {
        responseComponent = <EducationResponse />;
        predefinedText = "Kapil's educational timeline: B.Tech in Computer Science & Technology at IIEST Shibpur (2025 - Present), Class 12 CBSE Board at Nehru International Public School (2025, Grade: 92%), Class 10 CBSE Board at Nehru International Public School (2023, Grade: 92.4%).";
      } else if (wordMatch(["service", "services", "offer", "offers"])) {
        responseComponent = <ServicesResponse />;
        predefinedText = "Kapil provides services in: Full Stack Web App development (MERN, REST APIs), Scalable & Responsive layouts (Tailwind CSS, Framer Motion), Cloud Deployment (AWS, Docker, CI/CD), and AI-enabled sites (smart integrations & chatbots).";
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

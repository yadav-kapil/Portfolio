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
    if (!textToSend) setInput("");
    setIsTyping(true);

    // Simulate chatbot typing latency and client-side keyword matching
    setTimeout(() => {
      const lowerText = text.toLowerCase();
      let responseComponent;

      if (lowerText.includes("project")) {
        responseComponent = <ProjectsResponse />;
      } else if (
        lowerText.includes("skill") ||
        lowerText.includes("experience") ||
        lowerText.includes("tech") ||
        lowerText.includes("languages") ||
        lowerText.includes("frontend") ||
        lowerText.includes("backend")
      ) {
        responseComponent = <SkillsResponse />;
      } else if (
        lowerText.includes("resume") ||
        lowerText.includes("cv") ||
        lowerText.includes("download")
      ) {
        responseComponent = <ResumeResponse />;
      } else if (
        lowerText.includes("hire") ||
        lowerText.includes("job") ||
        lowerText.includes("email") ||
        lowerText.includes("social") ||
        lowerText.includes("github") ||
        lowerText.includes("linkedin") ||
        lowerText.includes("connect") ||
        lowerText.includes("contact") ||
        lowerText.includes("work")
      ) {
        responseComponent = <ContactResponse />;
      } else if (
        lowerText.includes("about") ||
        lowerText.includes("who is") ||
        lowerText.includes("bio") ||
        lowerText.includes("profile") ||
        lowerText.includes("kapil") ||
        lowerText.includes("location") ||
        lowerText.includes("live") ||
        lowerText.includes("where")
      ) {
        responseComponent = <AboutKapilResponse />;
      } else if (
        lowerText.includes("education") ||
        lowerText.includes("study") ||
        lowerText.includes("college") ||
        lowerText.includes("degree") ||
        lowerText.includes("university") ||
        lowerText.includes("course") ||
        lowerText.includes("qualification")
      ) {
        responseComponent = <EducationResponse />;
      } else if (
        lowerText.includes("service") ||
        lowerText.includes("build") ||
        lowerText.includes("provide") ||
        lowerText.includes("offer") ||
        lowerText.includes("freelance") ||
        lowerText.includes("do")
      ) {
        responseComponent = <ServicesResponse />;
      } else if (
        lowerText.includes("hi") ||
        lowerText.includes("hello") ||
        lowerText.includes("hey") ||
        lowerText.includes("yo") ||
        lowerText.includes("help") ||
        lowerText.includes("welcome") ||
        lowerText.includes("bot")
      ) {
        responseComponent = <BotIntroResponse />;
      } else {
        responseComponent = <FallbackResponse />;
      }

      const botMessage = {
        id: Date.now() + 1,
        sender: "bot",
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        component: responseComponent,
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
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

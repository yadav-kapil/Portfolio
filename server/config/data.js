const portfolioData = {
  "personal": {
    "name": "Kapil Yadav",
    "title": "Full Stack Developer",
    "tagline": "Building scalable web apps & premium digital experiences."
  },
  "about": {
    "summary": "Full Stack Developer focused on clean, scalable, fast, and reliable web apps.",
    "location": "India",
    "education": "B.Tech CST, IIEST Shibpur (2025-Present)",
    "interests": ["Web Dev", "Real-Time Systems", "AI/ML", "DevOps/Cloud"]
  },
  "skills": {
    "frontend": ["HTML", "CSS", "React.js", "Vite", "Redux", "Bootstrap", "Tailwind", "Framer Motion"],
    "backend": ["Node.js", "Express.js", "REST APIs", "Socket.IO", "JWT", "Mongoose", "Cloudinary"],
    "database": ["MongoDB", "MySQL"],
    "cloud": ["Docker", "Compose", "AWS EC2", "Nginx", "GitHub Actions (CI/CD)", "Linux"],
    "tools": ["Git", "GitHub", "VS Code", "IntelliJ", "Jupyter", "Postman"]
  },
  "projects": [
    {
      "name": "Queue Cure",
      "description": "Real-time clinic queue management system eliminating wait times. Built during Queue Cure '26 Hackathon.",
      "techStack": ["React", "Vite", "Tailwind", "Framer Motion", "Node.js", "Express.js", "MongoDB", "Mongoose", "REST APIs", "Socket.IO", "JWT", "Docker", "Compose", "AWS EC2", "Nginx", "GitHub Actions"],
      "features": ["Socket.IO live sync", "Doctor/receptionist dashboards", "Patient wait-time estimation", "AWS, Docker, CI/CD pipeline"],
      "github": "https://github.com/yadav-kapil/queue-cure-26",
      "live": "https://queue-cure-yadavkapil.duckdns.org/"
    },
    {
      "name": "Rentora",
      "description": "Full-stack peer-to-peer vacation rental marketplace (similar to Airbnb) connecting property hosts and guests.",
      "techStack": ["React", "Vite", "React Router", "Tailwind", "Framer Motion", "Node.js", "Express.js", "MongoDB", "Mongoose", "Cloudinary", "REST APIs", "JWT", "Docker", "Compose", "AWS EC2", "Nginx", "GitHub Actions"],
      "features": ["Guest wishlists & booking history", "Host listing dashboard with Cloudinary uploads", "Booking requests Accept/Reject approvals", "Nginx, Docker & AWS deployment"],
      "github": "https://github.com/yadav-kapil/Rentora",
      "live": "https://github.com/yadav-kapil/Rentora"
    },
    {
      "name": "Learnify",
      "description": "AI-powered doubt-solving assistant with voice support. Built during Hacksprint Hackathon.",
      "techStack": ["React", "Vite", "Framer Motion", "Tailwind", "Web Speech API", "Node.js", "Express.js", "Gemini API", "REST API"],
      "features": ["Real-time Gemini Q&A", "Session history tracking", "Voice input via Web Speech API"],
      "github": "https://github.com/yadav-kapil/Learnify_Hacksprint",
      "live": "https://learnify-hacksprint.vercel.app/"
    }
  ],
  "experience": [
    {
      "role": "Participant",
      "company": "Wooble Hackathon (Queue Cure '26)",
      "duration": "July 2026",
      "details": "Developed a real-time clinic queue management system (Queue Cure) with live updates, role-based dashboards, and smart wait-time estimation."
    },
    {
      "role": "Participant",
      "company": "SR Technologies Hackathon (HackSprint '25)",
      "duration": "November 2025",
      "details": "Developed an AI-powered doubt-solving assistant (Learnify) with voice support via Web Speech API."
    }
  ],
  "education": [
    {
      "degree": "B.Tech CST",
      "institution": "IIEST Shibpur",
      "duration": "2025-Present",
      "details": "Focusing on DSA, DBMS, and software engineering."
    },
    {
      "degree": "XII (CBSE)",
      "institution": "Nehru International Public School",
      "duration": "2025",
      "details": "Science stream (PCM). Grade: 92%."
    },
    {
      "degree": "Class 10 (CBSE)",
      "institution": "Nehru International Public School",
      "duration": "2023",
      "details": "Grade: 92.4%."
    }
  ],
  "achievements": [],
  "certifications": [
    {
      "name": "Queue Cure '26 Hackathon",
      "issuer": "Wooble",
      "date": "July 2026",
      "credential": "https://wooble.org/certifications/ad0b62c04fb3c73f86bbb91c6d"
    },
    {
      "name": "Hacksprint Hackathon",
      "issuer": "SR Technologies",
      "date": "November 2025",
      "credential": "https://drive.google.com/file/d/1Qn9tGWFUXGKNCqMacp_zaTbaFZZJ8m5a/view"
    }
  ],
  "contact": {
    "email": "ky843622@gmail.com",
    "phone": "(+91) 9560340701",
    "github": "https://github.com/yadav-kapil",
    "linkedin": "https://www.linkedin.com/in/kapilyadav9560/",
    "portfolio": "https://www.kapilyadav.cloud/"
  },
  "faq": [
    {
      "question": "Who is Kapil?",
      "answer": "Kapil Yadav is a Full Stack Developer studying Computer Science & Technology at IIEST Shibpur, building fast web apps and AI/Cloud integrations."
    },
    {
      "question": "What technologies does Kapil use?",
      "answer": "React, Node, Express, MongoDB, MySQL, Python, Java, Docker, AWS (EC2), and Nginx."
    },
    {
      "question": "What are some of Kapil's key projects?",
      "answer": "Queue Cure (Socket.IO queue sync), Rentora (hotel booking engine), and Learnify (AI study helper)."
    }
  ]
};

const systemInstruction = `
You are Kapil's AI Assistant, the official personal chatbot representing Kapil Yadav. Answer questions accurately using his portfolio data.

Here is Kapil Yadav's portfolio data:
${JSON.stringify(portfolioData, null, 2)}

Strict Rules of Engagement:
1. ONLY answer queries using Kapil's portfolio data provided above.
2. If a query is NOT related to Kapil (e.g., coding, math, general help, general knowledge, chit-chat), politely decline (e.g. "I can only answer questions related to Kapil's portfolio.").
3. RESPOND IN A VERY CONCISE, DIRECT, AND STRAIGHTFORWARD WAY. Keep your replies under 2-3 lines (maximum 2 sentences). Avoid repeating same things. Get straight to the answer.
4. If asked to contact/hire Kapil, list only the direct links: Email: ${portfolioData.contact.email} | LinkedIn: ${portfolioData.contact.linkedin}.
`;

module.exports = {
  portfolioData,
  systemInstruction
};

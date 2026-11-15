const portfolioData = {
  "personal": {
    "name": "Kapil Yadav",
    "title": "Full Stack Developer & AI Engineer",
    "tagline": "Building scalable web apps, intelligent AI systems & high-performance backend architectures."
  },
  "about": {
    "summary": "Full Stack Developer and AI Engineer focused on clean, scalable web apps, intelligent AI integrations, and production cloud systems.",
    "location": "India",
    "education": "B.Tech CST, IIEST Shibpur (2025-Present)",
    "interests": ["Full Stack Web Dev", "AI & Machine Learning", "Backend Engineering", "DevOps & Cloud"]
  },
  "skills": {
    "ai_ml": ["PyTorch", "Hugging Face", "Transformers", "Fine-Tuning", "Seq2Seq", "NLP", "LLMs", "Reinforcement Learning", "DQN", "Prompt Engineering", "Scikit-Learn", "NumPy", "Pandas", "Ollama", "Fal.ai"],
    "backend": ["FastAPI", "Node.js", "Express.js", "REST APIs", "Socket.IO", "JWT", "Mongoose", "Cloudinary"],
    "frontend": ["HTML", "CSS", "React.js", "Vite", "Redux", "Bootstrap", "Tailwind", "Framer Motion"],
    "database": ["MongoDB", "MySQL"],
    "cloud": ["Docker", "Compose", "AWS EC2", "Nginx", "GitHub Actions (CI/CD)", "Git LFS", "Linux"],
    "tools": ["Git", "GitHub", "VS Code", "Jupyter", "IntelliJ", "Postman"]
  },
  "projects": [
    {
      "name": "Fine-Tuned T5 Transformer Dialogue Summarizer",
      "description": "End-to-end Machine Learning project fine-tuning Google's T5-Small Seq2Seq transformer on 14,732 conversational dialogues (SAMSum corpus) for abstractive summarization. Deployed on AWS EC2 with FastAPI, Docker, and CI/CD.",
      "techStack": ["Python", "PyTorch", "Hugging Face Transformers", "Google T5-Small", "SentencePiece", "FastAPI", "Docker", "AWS EC2", "Nginx", "GitHub Actions", "Git LFS"],
      "features": [
        "Domain-specific fine-tuning on 14,732 SAMSum multi-turn dialogues",
        "Resolves multi-speaker coreference tracking & non-linear turn context",
        "4-beam search decoding achieving 0.315 validation loss",
        "FastAPI inference microservice with Swagger documentation and sub-2s CPU inference",
        "Production AWS EC2 deployment with Docker, Nginx reverse proxy, SSL, and GitHub Actions CI/CD"
      ],
      "github": "https://github.com/yadav-kapil/Fine-Tunned-T5-Transformer-Based-Text-Summarizer-",
      "live": "https://fine-tunned-t5transformer-summarizer.duckdns.org"
    },
    {
      "name": "Deep Q-Network (DQN) Flappy Bird Agent",
      "description": "Autonomous Reinforcement Learning agent trained from scratch using PyTorch and Gymnasium. Solved the gravity asymmetry problem with flap-biased exploration and stabilized learning with replay memory and target network freezing, achieving 80+ pipes cleared and +87.90 reward.",
      "techStack": ["Python", "PyTorch", "Reinforcement Learning", "Deep Q-Networks (DQN)", "Gymnasium", "Pygame", "Apple MPS"],
      "features": [
        "End-to-end DQN policy learning with zero environmental rules or prior domain knowledge",
        "Flap-biased ε-greedy exploration prior overcoming gravity and physical asymmetry",
        "Experience replay buffer (30,000 capacity) and frozen target network (C = 300 steps)",
        "Peak reward of +87.90 with 80+ consecutive pipes cleared and optimal 13.6% flap economy",
        "Headless simulation benchmarking reaching 2,350 FPS on Apple Silicon Metal Performance Shaders"
      ],
      "github": "https://github.com/yadav-kapil/flappybird-dqn-agent",
      "live": "https://github.com/yadav-kapil/flappybird-dqn-agent/raw/main/assets/agent_demo.mp4"
    },
    {
      "name": "Lumora AI",
      "description": "Full-stack Generative AI creative suite powered by Fal.ai neural models for text-to-image synthesis, image-to-image styling, super-resolution upscaling, and background removal.",
      "techStack": ["React 19", "Tailwind CSS v4", "Motion", "Lenis", "Node.js", "Express.js", "Fal.ai API", "MongoDB", "Cloudinary", "Docker"],
      "features": [
        "Text-to-Image & Image-to-Image generation powered by Fal.ai models",
        "AI background removal and super-resolution image upscaling",
        "Cloudinary cloud asset library and credit-based rate limiter",
        "Modern interface built with React 19, Tailwind CSS v4, Motion, and Lenis smooth scrolling"
      ],
      "github": "https://github.com/yadav-kapil/Lumora-ai",
      "live": ""
    },
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
      "live": "https://rentora-yadavkapil.duckdns.org/"
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
      "company": "Devlympics Hackathon (SHUNYA 2026) – GDG NSUT",
      "duration": "October 2026",
      "details": "Engineered high-performance web solutions with advanced animation architectures, React 19, and scalable frontend systems."
    },
    {
      "role": "Participant",
      "company": "TechTrix'26 Summit – E-CELL ITSEC & Navrachna Foundation",
      "duration": "October 2026",
      "details": "Presented technical engineering and cloud architecture solutions in competitive project showcases."
    },
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
      "details": "Focusing on DSA, DBMS, AI/ML, and software engineering."
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
      "name": "Devlympics Hackathon (SHUNYA 2026)",
      "issuer": "GDG NSUT",
      "date": "October 2026",
      "credential": "https://www.linkedin.com/in/kapilyadav9560/"
    },
    {
      "name": "TechTrix'26 Summit",
      "issuer": "E-CELL ITSEC & Navrachna Foundation",
      "date": "October 2026",
      "credential": "https://www.linkedin.com/in/kapilyadav9560/"
    },
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
    "portfolio": "https://www.kapilyadav.cloud/",
    "resume": "https://drive.google.com/file/d/1CsW9v-U8hCbndRnZMUxmwt34Z2lFhf3M/view?usp=sharing"
  },
  "faq": [
    {
      "question": "Who is Kapil?",
      "answer": "Kapil Yadav is a Full Stack Developer & AI Engineer studying Computer Science & Technology at IIEST Shibpur, building scalable web systems, intelligent AI applications, and robust cloud infrastructure."
    },
    {
      "question": "What technologies does Kapil use?",
      "answer": "PyTorch, Hugging Face Transformers, T5, Deep Q-Networks (DQN), FastAPI, React, Node.js, Express.js, MongoDB, MySQL, Docker, AWS EC2, Nginx, and GitHub Actions."
    },
    {
      "question": "What are some of Kapil's key projects?",
      "answer": "Fine-Tuned T5 Transformer Dialogue Summarizer (Seq2Seq NLP on SAMSum), Deep Q-Network Flappy Bird Agent (autonomous RL with PyTorch & Gymnasium), Queue Cure (real-time clinic queues with Socket.IO), Rentora (vacation rental platform), Lumora AI (generative media platform with Fal.ai), and Learnify (AI doubt solver)."
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
4. If asked to contact/hire Kapil or view/download his resume, list only the direct links: Email: ${portfolioData.contact.email} | LinkedIn: ${portfolioData.contact.linkedin} | Resume: ${portfolioData.contact.resume}.
`;

module.exports = {
  portfolioData,
  systemInstruction
};

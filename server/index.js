require("dotenv").config();
const express = require("express");
const cors = require("cors");
const ContactForm = require("./models/ContactForm");
const connectDB = require("./config/db");
const Subscribers = require("./models/Subscribers");
const { GoogleGenAI } = require("@google/genai");
const { systemInstruction } = require("./config/data");
const rateLimit = require("express-rate-limit");

const chatLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10, 
  message: { error: "Too many chat requests from this IP, please try again after 15 minutes." },
  standardHeaders: true,
  legacyHeaders: false,
});

const app = express();
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: process.env.FRONTEND_ORIGIN,
    methods: ["GET", "POST"],
  }),
);

app.post("/api/contactForm", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    console.log(req.body);
    const newContactData = new ContactForm({ name, email, message });
    await newContactData.save();
    console.log("saved");
    res.sendStatus(201);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to save data" });
  }
});

app.post("/api/subscribe", async (req, res) => {
  try {
    const { email } = req.body;
    console.log(req.body);
    const newSubscriber = new Subscribers({ email });
    await newSubscriber.save();
    console.log("saved");
    res.sendStatus(201);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to save data" });
  }
});

app.post("/api/chat", chatLimiter, async (req, res) => {
  try {
    const { message, history } = req.body;

    
    let promptContext = "";
    if (history && Array.isArray(history) && history.length > 0) {
      const lastTwo = history.slice(-2);
      promptContext += "Previous conversation history context:\n";
      lastTwo.forEach((turn) => {
        const speaker = turn.role === "user" ? "User" : "Chatbot";
        promptContext += `${speaker}: ${turn.text}\n`;
      });
      promptContext += "\n";
    }

    const finalPrompt = `${promptContext}User Query: ${message}`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash-lite",
      contents: finalPrompt,
      config: {
        systemInstruction: systemInstruction,
      },
    });
    console.log(response.text);
    res.status(200).send({
      text: response.text,
    });
  } catch (err) {
    console.error("Chat Error:", err);
    res.status(500).json({ error: "Something Went Wrong" });
  }
});

const port = process.env.PORT || 3001;

const startServer = async () => {
  try {
    await connectDB(); 
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (error) {
    console.error("DB failed. Server not started.");
    process.exit(1);
  }
};

startServer();

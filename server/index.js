const express = require("express");
const cors = require("cors");
const ContactForm = require("./models/ContactForm");
const connectDB = require("./config/db");
const Subscribers = require('./models/Subscribers');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: process.env.FRONTEND_ORIGIN,
    methods: ["GET", "POST"],
  }),
);

app.post("/api/postContactForm", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    console.log(req.body);
    const newContactData = new ContactForm({ name, email, message });
    await newContactData.save();
    console.log("saved");
    res.sendStatus(200); // 201 = created
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to save data" });
  }
});

app.post('/api/postSubscriber', async (req,res) => {
  try {
    const { email } = req.body;
    console.log(req.body);
    const newSubscriber = new Subscribers({ email });
    await newSubscriber.save();
    console.log("saved");
    res.sendStatus(200); // 201 = created
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to save data" });
  }
})

const port = process.env.PORT || 3001;

const startServer = async () => {
  try {
    await connectDB(); // Wait for DB first
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (error) {
    console.error("DB failed. Server not started.");
    process.exit(1);
  }
};

startServer();

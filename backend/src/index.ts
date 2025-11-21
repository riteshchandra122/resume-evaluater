console.log("🔥🔥 THIS IS THE REAL INDEX.TS RUNNING 🔥🔥");

import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import uploadRouter from "./routes/upload";
import chatRouter from "./routes/chat";

console.log("uploadRouter =", uploadRouter);
console.log("chatRouter =", chatRouter);

dotenv.config();


const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/upload", uploadRouter);
app.use("/api/chat", chatRouter);

app.get("/", (_req, res) => {
  res.send("Resume Evaluator backend is running");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
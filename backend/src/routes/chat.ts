import { Router } from "express";
import { answerQuestion } from "../services/rag";


const router = Router();

router.post("/", async (req, res) => {
  try {
    const { sessionId, question } = req.body;
    if (!sessionId || !question) {
      return res.status(400).json({ error: "sessionId and question are required" });
    }

    const answer = await answerQuestion(sessionId, question);
    return res.json({ answer });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;

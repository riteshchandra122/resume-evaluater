import { Router } from "express";
import multer from "multer";

import { parsePdf } from "../services/pdfParser";
import { analyzeMatch } from "../services/match";
import { getAtsScoreFromResume } from "../services/ats";
import { storeResumeEmbeddings } from "../services/rag";

const router = Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post(
  "/",
  upload.fields([
    { name: "resume", maxCount: 1 },
    { name: "jd", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      const resumeFile = req.files?.["resume"]?.[0];
      const jdFile = req.files?.["jd"]?.[0];

      if (!resumeFile) {
        return res
          .status(400)
          .json({ error: "Resume file is required" });
      }

      const resumeText = await parsePdf(resumeFile.buffer);

      // ATS-only mode
      if (!jdFile) {
        const result = await getAtsScoreFromResume(resumeText);
        return res.json({ mode: "ATS_ONLY", ...result });
      }

      // Resume + JD match mode
      const jdText = await parsePdf(jdFile.buffer);
      const matchResult = await analyzeMatch(resumeText, jdText);

      // Store embeddings for chat
      await storeResumeEmbeddings(resumeText, matchResult.sessionId);

      return res.json({ mode: "MATCH_WITH_JD", ...matchResult });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    }
  }
);

export default router;

// Placeholder RAG service: chunk, embed, store, and answer
import { embedText, askLLM } from "./vectorClient";

export async function storeResumeEmbeddings(resumeText: string, sessionId: string) {
  // Split resumeText into chunks (simple split by sentences for demo)
  const chunks = resumeText.split("\n").filter(line => line.trim().length > 20);

  for (const chunk of chunks) {
    await embedText(chunk, sessionId);
  }
}

export async function answerQuestion(sessionId: string, question: string): Promise<string> {
  // Retrieve relevant chunks based on sessionId & question
  // For demo: just echo
  return `Answer (session ${sessionId}): Based on the resume, I'd say ... `;
}

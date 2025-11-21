import { embedText } from "../vector/client";


export async function storeResumeEmbeddings(resumeText: string, sessionId: string) {
  const chunks = resumeText
    .split("\n")
    .filter((line) => line.trim().length > 20);

  for (const chunk of chunks) {
    await embedText(chunk, sessionId);
  }
}

export async function answerQuestion(sessionId: string, question: string): Promise<string> {
  return `Answer for session ${sessionId}: The resume likely contains information related to "${question}".`;
}

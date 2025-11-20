export interface AtsResult {
  score: number;
  strengths: string[];
  improvements: string[];
}

export async function getAtsScoreFromResume(resumeText: string): Promise<AtsResult> {
  // Dummy logic for demo
  const score = Math.floor(Math.random() * 41) + 60;  // 60-100

  const strengths = ["Clear summary section", "Relevant skills listed"];
  const improvements = ["Add certification section", "Use keywords from job description"];

  return { score, strengths, improvements };
}

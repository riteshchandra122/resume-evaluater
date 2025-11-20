// Simplified match logic. You can improve later.
export interface MatchResult {
  sessionId: string;
  matchScore: number;
  strengths: string[];
  gaps: string[];
}

export async function analyzeMatch(resumeText: string, jdText: string): Promise<MatchResult> {
  // For now: dummy scoring logic
  const matchScore = Math.floor(Math.random() * 51) + 50;  // 50-100 for demo

  const strengths = ["Listed required key skill X", "Has 5 years of experience"];
  const gaps = ["Missing Kubernetes experience", "No AWS Certification"];

  const sessionId = `sess_${Date.now()}`;

  return { sessionId, matchScore, strengths, gaps };
}

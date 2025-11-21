function MatchSummary({ mode, score, strengths, gaps }: any) {
  return (
    <div style={{ marginTop: "20px" }}>
      <h2>{mode === "ATS" ? "ATS Score" : "Match Score"}</h2>

      <h3>{score}%</h3>

      <h4>Strengths</h4>
      <ul>
        {strengths.map((s: string, i: number) => (
          <li key={i}>✅ {s}</li>
        ))}
      </ul>

      <h4>Gaps</h4>
      <ul>
        {gaps.map((g: string, i: number) => (
          <li key={i}>❌ {g}</li>
        ))}
      </ul>
    </div>
  );
}

export default MatchSummary;

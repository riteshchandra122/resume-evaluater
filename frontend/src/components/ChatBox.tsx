import { useState } from "react";

function ChatBox({ sessionId }: any) {
  const [messages, setMessages] = useState<any[]>([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const response = await fetch("http://localhost:5000/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sessionId, question: input }),
    });

    const data = await response.json();

    setMessages([...messages, { user: input, bot: data.answer }]);
    setInput("");
  };

  return (
    <div style={{ marginTop: "30px" }}>
      <h2>Ask Questions</h2>

      <div style={{ background: "#f4f4f4", padding: "10px", minHeight: "150px" }}>
        {messages.map((msg, i) => (
          <div key={i}>
            <p><strong>You:</strong> {msg.user}</p>
            <p><strong>AI:</strong> {msg.bot}</p>
          </div>
        ))}
      </div>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask something..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default ChatBox;

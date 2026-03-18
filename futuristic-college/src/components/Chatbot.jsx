import { useState } from "react";


export default function Chatbot() {

  const [open, setOpen] = useState(false);

  return (
    <div>

      {/* Floating AI Orb */}
      <div className="ai-orb" onClick={() => setOpen(!open)}>
        AI
      </div>

      {/* Chat Window */}
      {open && (
        <div className="chat-window">
          <h3>AI Campus Assistant</h3>
          <p>Hello 👋</p>
          <p>I can help you explore the college of 2050.</p>
          <p>Ask about labs, campus, or student life!</p>

          <input
            type="text"
            placeholder="Ask something..."
          />
        </div>
      )}

    </div>
  );
}
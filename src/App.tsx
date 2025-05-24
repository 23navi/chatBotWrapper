import { useState } from "react";
import { Chat } from "./components/Chat/Chat";
import styles from "./App.module.css";
import { Controls } from "./components/Controls/Controls";
import { type Message } from "./types/messages";
import { GoogleGenAI } from "@google/genai";

const GOOGLE_AI_API_KEY = import.meta.env.VITE_GOOGLE_AI_API_KEY;

const ai = new GoogleGenAI({ apiKey: GOOGLE_AI_API_KEY });

function App() {
  const chat = ai.chats.create({
    model: "gemini-2.0-flash",
    history: [],
  });

  const [messages, setMessages] = useState<Message[]>([]);

  async function handleContentSend(content: string) {
    setMessages((messages) => [...messages, { role: "user", content }]);
    const response = await chat.sendMessage({
      message: content,
    });

    setMessages((messages) => [
      ...messages,
      { role: "assistant", content: response.text || "NO RESPONSE FROM AI" },
    ]);
  }

  return (
    <div className={styles.App}>
      <header className={styles.Header}>
        <img className={styles.Logo} src="/chat-bot.png" />
        <h2 className={styles.Title}>AI Chatbot</h2>
      </header>
      <div className={styles.ChatContainer}>
        <Chat messages={messages} />
      </div>
      <Controls onSend={handleContentSend} />
    </div>
  );
}

export default App;

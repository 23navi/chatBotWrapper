import { useState } from "react";
import { Chat } from "./components/Chat/Chat";
import styles from "./App.module.css";
import { Controls } from "./components/Controls/Controls";
import { type Message } from "./types/messages";

function App() {
  const [messages, setMessages] = useState<Message[]>([]);

  function handleContentSend(content: string) {
    setMessages((messages) => [...messages, { role: "user", content }]);
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

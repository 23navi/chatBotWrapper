import styles from "./Controls.module.css";
import SendIcon from "../../icons/sendIcon";
import { useState } from "react";

export function Controls({ onSend }: { onSend: (content: string) => void }) {
  const [content, setContent] = useState("");

  function handleContentChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    const content = event.target.value;
    setContent(content);
  }

  function handleContentSend() {
    if (content.trim() === "") return;
    onSend(content);
    setContent("");
  }

  return (
    <div className={styles.Controls}>
      <div className={styles.TextAreaContainer}>
        <textarea
          className={styles.TextArea}
          placeholder="Message AI Chatbot"
          value={content}
          onChange={handleContentChange}
        />
      </div>
      <button className={styles.Button} onClick={handleContentSend}>
        <SendIcon />
      </button>
    </div>
  );
}

import { message } from "../../types/messages";
import styles from "./Chat.module.css";

export function Chat({ messages }: { messages: message[] }) {
  return (
    <div className={styles.Chat}>
      {messages.map(({ role, content }, index) => (
        <div key={index} className={styles.Message} data-role={role}>
          {content}
        </div>
      ))}
    </div>
  );
}

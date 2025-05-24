import { WELCOME_MESSAGE } from "../../dummyData";
import { type Message } from "../../types/messages";
import styles from "./Chat.module.css";

export function Chat({ messages }: { messages: Message[] }) {
  return (
    <div className={styles.Chat}>
      {[WELCOME_MESSAGE, ...messages].map(({ role, content }, index) => (
        <div key={index} className={styles.Message} data-role={role}>
          {content}
        </div>
      ))}
    </div>
  );
}

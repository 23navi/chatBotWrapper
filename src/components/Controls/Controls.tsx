import styles from "./Controls.module.css";
import SendIcon from "../../icons/sendIcon";

export function Controls() {
  return (
    <div className={styles.Controls}>
      <div className={styles.TextAreaContainer}>
        <textarea
          className={styles.TextArea}
          placeholder="Message AI Chatbot"
        />
      </div>
      <button className={styles.Button}>
        <SendIcon />
      </button>
    </div>
  );
}

import Button from "../button";
import TextInput from "../textInput";
import styles from "./chat.module.css";
import Image from "next/image";

type ChatProps = {
  onChange?: () => void;
};

export default function Chat({ onChange }: ChatProps) {
  return (
    <div className={styles.chat}>
      <section className={styles.chatHeader}>
        <div className={styles.chatReceived}>
          Oi, tudo bem?
        </div>

        <div className={styles.chatSent}>
          Tudo certo!
        </div>
      </section>
      <div className={styles.bottom}>
        <TextInput onChange={onChange} />
        <Button
          color={"primary"}
          onClick={() => {
            console.log("send");
          }}
        >
          <Image
            src={`/test.svg`}
            className={styles.send}
            alt=""
            width={24}
            height={24}
          />
        </Button>
      </div>
    </div>
  );
}

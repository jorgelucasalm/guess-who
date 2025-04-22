

import styles from "./textInput.module.css";

type TextInputProps = {
  onChange?: () => void;
};

export default function TextInput({ onChange }: TextInputProps) {
  return (
    <input type="text" className={styles.card} onChange={onChange} />
  );
}

'use client';
import styles from "./textfield.module.css";

export default function TextField() {
  return (
    <input
      type="text"
      onChange={(e) => {
        console.log(e.target.value)
      }}
      className={styles.TextField}
    />
  );
}

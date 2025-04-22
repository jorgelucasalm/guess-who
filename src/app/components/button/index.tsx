import styles from "./button.module.css";

type ButtonProps = {
  color: "primary" | "secondary";
  type?: "filled" | "outline";
  children: React.ReactNode;
  onClick?: () => void;
};

export default function Button({children, color, onClick}: ButtonProps) {
  return (
    <button onClick={onClick} className={`${styles.button} ${styles.filled} `} >{children}</button>
  );
}

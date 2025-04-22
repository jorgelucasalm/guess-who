

import styles from "./card.module.css";
import Image from "next/image";

type CardProps = {
  avatar: number;
  onClick?: () => void;
};

export default function Card({ avatar, onClick }: CardProps) {
  return (
    <div onClick={onClick} className={styles.card}>
      <Image src={`/avatars/${avatar}.svg`} alt="" width={64} height={64} />
    </div>
  );
}

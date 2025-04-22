import Image from "next/image";
import styles from "@/styles/page.module.css";
import Button from "./components/button";
import TextField from "./components/textfield";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Guess Who</h1>
        <div className={styles.layout}>
          <TextField />
          <Button>Entrar</Button>
          <Button>Criar</Button>
          <Button>Configurações</Button>
        </div>
      </main>
    </div>
  );
}

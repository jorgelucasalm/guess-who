"use client";

import styles from "./start.module.css";
import Card from "../components/card";
import Chat from "../components/chat";

export default function Test() {
  function randomNumbers(quantidade: number) {
    const numeros: Array<number> = [];
    while (numeros.length < quantidade) {
      const numeroAleatorio = Math.floor(Math.random() * quantidade) + 1; // Gera um número entre 1 e 100
      if (!numeros.includes(numeroAleatorio)) {
        numeros.push(numeroAleatorio);
      }
    }
    return numeros;
  }

  const array = randomNumbers(16);

  return (
    <div className={styles.page}>
      <header className={styles.header}>Guess Who?</header>
      <main className={styles.main}>
        {array.map((e, index) => {
          return (
            <Card
              avatar={e}
              key={index}
              onClick={() => {
                console.log("teste");
              }}
            />
          );
        })}
        <Chat />
      </main>
    </div>
  );
}

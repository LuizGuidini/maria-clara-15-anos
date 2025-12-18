import Link from "next/link";
import { useState } from "react";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Maria Clara 15 anos</div>

      <div className={styles.hamburger} onClick={() => setOpen(!open)}>
        ☰
      </div>

      <div className={`${styles.links} ${open ? styles.show : ""}`}>
        <Link href="/" className={styles.link}>Home</Link>
        <Link href="/curiosidades" className={styles.link}>Curiosidades</Link>
        <Link href="/linhaDoTempo" className={styles.link}>Minha Linha do Tempo</Link>
        <Link href="/galeria" className={styles.link}>Galeria</Link>
        <Link href="/recados" className={styles.link}>Recados</Link>
        <Link href="/quiz" className={styles.link}>Quiz</Link>
        <Link 
          href={process.env.NEXT_PUBLIC_CONFIRM_URL || "https://confirmarpresenca.com/e/jqw75jkd"} 
          className={styles.link}
          target="_blank" rel="noopener noreferrer"
        >
        Confirme sua Presença
        </Link>
        <Link href="/localizacao" className={styles.link}>Localização</Link>
      </div>
    </nav>
  );
}

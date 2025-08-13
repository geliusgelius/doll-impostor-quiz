import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to="/" className={styles.logo}>
          DOLL IMPOSTOR
        </Link>
        <div className={styles.links}>
          <Link to="/game" className={styles.link}>
            Игра
          </Link>
          <Link to="/leaders" className={styles.link}>
            Лидеры
          </Link>
        </div>
      </nav>
    </header>
  );
}

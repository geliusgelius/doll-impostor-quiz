import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.scss";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link
          to="/"
          className={styles.logo}
          onClick={closeMenu}
          aria-label="Home"
        >
          DOLL IMPOSTOR
        </Link>

        <button
          className={`${styles.burger} ${isMenuOpen ? styles.active : ""}`}
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          <span className={styles.burgerLine}></span>
          <span className={styles.burgerLine}></span>
          <span className={styles.burgerLine}></span>
        </button>

        <div className={`${styles.links} ${isMenuOpen ? styles.active : ""}`}>
          <Link
            to="/game"
            className={`${styles.link} ${
              location.pathname === "/game" ? styles.active : ""
            }`}
            onClick={closeMenu}
          >
            The game (all dolls)
          </Link>
          <Link
            to="/leaders"
            className={`${styles.link} ${
              location.pathname === "/leaders" ? styles.active : ""
            }`}
            onClick={closeMenu}
          >
            Leaderboard
          </Link>
        </div>

        {isMenuOpen && (
          <div
            className={`${styles.overlay} ${isMenuOpen ? styles.active : ""}`}
            onClick={closeMenu}
            role="button"
            aria-label="Close menu"
            tabIndex={0}
          />
        )}
      </nav>
    </header>
  );
}

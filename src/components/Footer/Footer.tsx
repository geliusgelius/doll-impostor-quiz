import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p>
          © 2025 Doll Impostor Quiz | A quiz about the universe of Doll Impostor
          and Doll INC games
        </p>
        <p className={styles.subtext}>
          Made with <span className={styles.heart}>❤️</span> for HeadArrow
          Studios
        </p>
      </div>
    </footer>
  );
}

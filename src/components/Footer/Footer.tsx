import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p>© 2024 Doll Impostor Quiz | Все куклы настоящие... или нет?</p>
        <p className={styles.subtext}>
          Создано с <span className={styles.heart}>❤️</span> для любителей
          хоррора
        </p>
      </div>
    </footer>
  );
}

import styles from "./Footer.module.scss";
import { FaDiscord } from "react-icons/fa";

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
          Studios | Developer: Angelina Smirnova
        </p>

        <div className={styles.bugReport}>
          <span className={styles.bugText}>
            <span role="img" aria-label="bug">
              🐛
            </span>{" "}
            Found a bug or have suggestions?
          </span>
          <a
            href="https://discord.gg/qXpny3cHkX"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.discordLink}
          >
            <FaDiscord className={styles.icon} />
            Contact me on Discord
          </a>
        </div>
      </div>
    </footer>
  );
}

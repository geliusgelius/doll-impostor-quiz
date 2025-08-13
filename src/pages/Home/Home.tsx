import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./Home.module.scss";

export default function Home() {
  const navigate = useNavigate();

  const startGame = (
    map: "house" | "circus" | "daycare" | "cabin" | "all" | "endless"
  ) => {
    navigate("/game", {
      state: { map },
      preventScrollReset: true,
    });
  };

  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={styles.content}
        >
          <motion.h1
            animate={{ scale: [1, 1.03, 1] }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: "easeInOut",
            }}
            className={styles.title}
            aria-label="Doll Impostor Game"
          >
            DOLL IMPOSTOR
          </motion.h1>

          <div className={styles.mapSelection}>
            <h2 className={styles.subtitle}>Choose location:</h2>

            <div
              className={styles.mapButtons}
              role="group"
              aria-label="Game location options"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={styles.mapButton}
                onClick={() => startGame("house")}
                aria-label="House location"
              >
                🏠 House
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={styles.mapButton}
                onClick={() => startGame("circus")}
                aria-label="Circus location"
              >
                🎪 Circus
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={styles.mapButton}
                onClick={() => startGame("daycare")}
                aria-label="Daycare location"
              >
                🏫 Daycare
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={styles.mapButton}
                onClick={() => startGame("cabin")}
                aria-label="Cabin location"
              >
                🌲 Cabin
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={styles.mapButton}
                onClick={() => startGame("all")}
                aria-label="All locations"
              >
                🌍 All Dolls
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`${styles.mapButton} ${styles.endlessButton}`}
                onClick={() => startGame("endless")}
                aria-label="Endless mode"
              >
                ∞ Endless Mode
              </motion.button>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}

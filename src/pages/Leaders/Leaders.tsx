import { motion } from "framer-motion";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./Leaders.module.scss";

const leaders = [
  { id: 1, name: "Alex", score: 580 },
  { id: 2, name: "Sam", score: 550 },
  { id: 3, name: "Jordan", score: 520 },
  { id: 4, name: "Taylor", score: 510 },
  { id: 5, name: "Casey", score: 490 },
  { id: 6, name: "Riley", score: 470 },
  { id: 7, name: "Jamie", score: 450 },
  { id: 8, name: "Morgan", score: 430 },
  { id: 9, name: "Drew", score: 410 },
  { id: 10, name: "You", score: 390 },
  { id: 11, name: "Pat", score: 380 },
  { id: 12, name: "Quinn", score: 370 },
  { id: 13, name: "Blake", score: 360 },
  { id: 14, name: "Avery", score: 350 },
  { id: 15, name: "Cameron", score: 340 },
];

export default function Leaders() {
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={styles.leaderboardContainer}
        >
          <h1 className={styles.title}>ТОП ИГРОКОВ</h1>

          <div className={styles.tableContainer}>
            <table className={styles.leaderboardTable}>
              <thead>
                <tr>
                  <th className={styles.th}>Место</th>
                  <th className={styles.th}>Игрок</th>
                  <th className={styles.th}>Очки</th>
                </tr>
              </thead>
              <tbody>
                {leaders.map((player, index) => (
                  <motion.tr
                    key={player.id}
                    whileHover={{ scale: 1.01 }}
                    className={`${styles.tr} ${
                      player.name === "You" ? styles.currentUser : ""
                    }`}
                  >
                    <td className={styles.td}>
                      <span className={styles.place}>{index + 1}</span>
                    </td>
                    <td className={styles.td}>{player.name}</td>
                    <td className={`${styles.td} ${styles.score}`}>
                      {player.score}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}

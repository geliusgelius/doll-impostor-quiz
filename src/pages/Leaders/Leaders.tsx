import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./Leaders.module.scss";
import { getLeaderboard } from "../../backend/api"; // Adjust the import path as necessary
import { useLocation } from "react-router-dom";

export default function Leaders() {
  const location = useLocation();
  const map = location.state?.map || "all";
  const [leaders, setLeaders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadLeaders = async () => {
      try {
        const data = await getLeaderboard(map);
        setLeaders(data);
      } catch (error) {
        console.error("Error loading leaderboard:", error);
      } finally {
        setLoading(false);
      }
    };

    loadLeaders();
  }, [map]);

  if (loading) {
    return <div className={styles.container}>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={styles.leaderboardContainer}
        >
          <h1 className={styles.title}>ТОП ИГРОКОВ ({map})</h1>

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
                    key={index}
                    whileHover={{ scale: 1.01 }}
                    className={styles.tr}
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

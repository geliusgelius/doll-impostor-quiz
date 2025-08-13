import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";
import styles from "./Leaders.module.scss";
import { useLocation } from "react-router-dom";

interface Leader {
  name: string;
  score: number;
  date: string;
}

export default function Leaders() {
  const location = useLocation();
  const map = location.state?.map || "all";
  const [leaders, setLeaders] = useState<Leader[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadLeaders = async () => {
      try {
        setLoading(true);
        setError("");
        const response = await fetch(`/api/leaderboard?map=${map}`);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();

        if (data && data.length > 0) {
          setLeaders(data);
        } else {
          setError("Нет данных для отображения");
        }
      } catch (error) {
        console.error("Error loading leaderboard:", error);
        setError("Ошибка загрузки таблицы лидеров");
      } finally {
        setLoading(false);
      }
    };

    loadLeaders();
  }, [map]);

  const getMapName = (map: string) => {
    switch (map) {
      case "house":
        return "🏠 House";
      case "circus":
        return "🎪 Circus";
      case "daycare":
        return "🏫 Daycare";
      case "cabin":
        return "🌲 Cabin";
      case "all":
        return "🌍 All Maps";
      default:
        return map;
    }
  };

  if (loading) {
    return (
      <div className={styles.container}>
        <Header />
        <div className={styles.loading}>Загрузка...</div>
        <Footer />
      </div>
    );
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
          <h1 className={styles.title}>ТОП ИГРОКОВ ({getMapName(map)})</h1>

          {error ? (
            <div className={styles.errorMessage}>{error}</div>
          ) : (
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
                      key={`${player.name}-${index}`}
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
          )}
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}

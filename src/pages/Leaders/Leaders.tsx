import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";
import styles from "./Leaders.module.scss";
import { useLocation, useNavigate } from "react-router-dom";

interface Leader {
  name: string;
  score: number;
  date: string;
}

const MAPS = [
  { id: "all", name: "🌍 All Maps" },
  { id: "house", name: "🏠 House" },
  { id: "circus", name: "🎪 Circus" },
  { id: "daycare", name: "🏫 Daycare" },
  { id: "cabin", name: "🌲 Cabin" },
  { id: "endless", name: "∞ Endless Mode" },
];

export default function Leaders() {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedMap, setSelectedMap] = useState(location.state?.map || "all");
  const [leaders, setLeaders] = useState<Leader[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchLeaders = async () => {
      try {
        setLoading(true);
        setError("");
        console.log(`Fetching leaderboard for ${selectedMap}`);

        const response = await fetch(`/api/leaderboard?map=${selectedMap}`);
        console.log("Response status:", response.status);

        if (!response.ok) {
          throw new Error(`Server returned ${response.status}`);
        }

        const data = await response.json();
        console.log("Received data:", data);

        if (!Array.isArray(data)) {
          throw new Error("Invalid data format received");
        }

        // Форматируем и сортируем данные
        const formattedData = data
          .map((item) => ({
            name: item.name || "Anonymous",
            score: Number(item.score) || 0,
            date: item.date || "Unknown",
          }))
          .filter((item) => item.name !== "Anonymous" && item.score > 0)
          .sort((a, b) => b.score - a.score);

        console.log("Formatted leaderboard:", formattedData);
        setLeaders(formattedData);
        setError(
          formattedData.length === 0 ? "No records found for this map" : ""
        );
      } catch (err) {
        console.error("Failed to load leaderboard:", err);
        setError("Failed to load leaderboard. Please try again later.");
        setLeaders([]);
      } finally {
        setLoading(false);
      }
    };

    fetchLeaders();
  }, [selectedMap]);

  const handleMapChange = (map: string) => {
    setSelectedMap(map);
    navigate("/leaders", { state: { map } });
  };

  if (loading) {
    return (
      <div className={styles.container}>
        <Header />
        <div className={styles.loading}>Loading leaderboard...</div>
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
          <h1 className={styles.title}>LEADERBOARD</h1>

          <div className={styles.mapSelector}>
            {MAPS.map((map) => (
              <button
                key={map.id}
                className={`${styles.mapButton} ${
                  selectedMap === map.id ? styles.active : ""
                }`}
                onClick={() => handleMapChange(map.id)}
              >
                {map.name}
              </button>
            ))}
          </div>

          {error ? (
            <div className={styles.errorMessage}>{error}</div>
          ) : (
            <div className={styles.tableContainer}>
              <table className={styles.leaderboardTable}>
                <thead>
                  <tr>
                    <th className={styles.th}>Rank</th>
                    <th className={styles.th}>Player</th>
                    <th className={styles.th}>Score</th>
                  </tr>
                </thead>
                <tbody>
                  {leaders.map((player, index) => (
                    <motion.tr
                      key={`${player.name}-${index}-${player.score}`}
                      whileHover={{ scale: 1.01 }}
                      className={styles.tr}
                    >
                      <td className={styles.td}>
                        <span className={styles.place}>{index + 1}</span>
                      </td>
                      <td className={styles.td}>{player.name}</td>
                      <td className={`${styles.td} ${styles.score}`}>
                        {player.score.toLocaleString()}
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

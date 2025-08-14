import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./Modal.module.scss";
import { getPlayerId, getPlayerName, setPlayerName } from "../../auth";

interface ModalProps {
  score: number;
  streak?: number;
  isEndlessMode?: boolean;
  onRestart: () => void;
  onClose: () => void;
  map: string;
}

export default function Modal({
  score,
  streak = 0,
  isEndlessMode = false,
  onRestart,
  onClose,
  map,
}: ModalProps) {
  const [name, setName] = useState(getPlayerName());
  const [nameSubmitted, setNameSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!name.trim()) {
      setError("Please enter your name");
      return;
    }

    setIsSubmitting(true);
    setError("");
    setPlayerName(name.trim());

    try {
      const response = await fetch("/api/save-score", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          map: map,
          name: name.trim(),
          score: score,
          playerId: getPlayerId(),
        }),
      });

      if (!response.ok) {
        throw new Error(await response.text());
      }

      const result = await response.json();
      console.log("Save score result:", result);

      if (result.success) {
        setNameSubmitted(true);
      } else {
        setError("Failed to save score");
      }
    } catch (err) {
      console.error("Save score error:", err);
      setError("Connection error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!nameSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={styles.modalOverlay}
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          className={styles.modalContent}
        >
          <h2 className={styles.modalTitle}>Enter Your Name</h2>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setError("");
            }}
            placeholder="Your name"
            className={styles.nameInput}
            maxLength={20}
          />
          {error && <p className={styles.errorText}>{error}</p>}
          <div className={styles.modalButtons}>
            <button
              className={styles.modalButton}
              onClick={handleSubmit}
              disabled={!name.trim() || isSubmitting}
            >
              {isSubmitting ? "Saving..." : "Save"}
            </button>
          </div>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={styles.modalOverlay}
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        className={styles.modalContent}
      >
        <h2 className={styles.modalTitle}>
          {isEndlessMode ? "Game Over!" : "Congratulations!"}
        </h2>

        {isEndlessMode ? (
          <>
            <p className={styles.modalText}>Your streak: {streak}</p>
            <p className={styles.modalText}>Score: {score}</p>
          </>
        ) : (
          <p className={styles.modalText}>Your score: {score}</p>
        )}

        <div className={styles.modalButtons}>
          <button className={styles.modalButton} onClick={onRestart}>
            Play Again
          </button>
          <button
            className={`${styles.modalButton} ${styles.secondary}`}
            onClick={onClose}
          >
            Main Menu
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

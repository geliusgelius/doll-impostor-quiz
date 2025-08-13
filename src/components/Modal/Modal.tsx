import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./Modal.module.scss";

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
  const [name, setName] = useState("");
  const [nameSubmitted, setNameSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!name.trim()) {
      setError("Введите имя");
      return;
    }

    setIsSubmitting(true);
    setError("");

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
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();

      if (result.success) {
        setNameSubmitted(true);
      } else {
        setError("Ошибка сохранения результата");
      }
    } catch (err) {
      console.error("Save score error:", err);
      setError("Ошибка соединения с сервером");
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
          <h2 className={styles.modalTitle}>Введите ваше имя</h2>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setError("");
            }}
            placeholder="Ваше имя"
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
              {isSubmitting ? "Сохранение..." : "Сохранить"}
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
          {isEndlessMode ? "Игра окончена!" : "Поздравляем!"}
        </h2>

        {isEndlessMode ? (
          <>
            <p className={styles.modalText}>Ваша серия: {streak}</p>
            <p className={styles.modalText}>Набранные очки: {score}</p>
          </>
        ) : (
          <p className={styles.modalText}>Ваш результат: {score} очков</p>
        )}

        <div className={styles.modalButtons}>
          <button className={styles.modalButton} onClick={onRestart}>
            Играть снова
          </button>
          <button
            className={`${styles.modalButton} ${styles.secondary}`}
            onClick={onClose}
          >
            В главное меню
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

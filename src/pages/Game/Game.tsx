import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";
import Modal from "@components/Modal/Modal";
import styles from "./Game.module.scss";

// house
import doll1 from "../../assets/images/house/doll1.jpg";
import doll2 from "../../assets/images/house/doll2.jpg";
import doll3 from "../../assets/images/house/doll3.jpg";
import doll4 from "../../assets/images/house/doll4.jpg";
import doll5 from "../../assets/images/house/doll5.jpg";
import doll6 from "../../assets/images/house/doll6.jpg";
import doll7 from "../../assets/images/house/doll7.jpg";
import doll8 from "../../assets/images/house/doll8.jpg";
import doll9 from "../../assets/images/house/doll9.jpg";
import doll10 from "../../assets/images/house/doll10.jpg";
import doll11 from "../../assets/images/house/doll11.jpg";
import doll12 from "../../assets/images/house/doll12.jpg";
import doll13 from "../../assets/images/house/doll13.jpg";
import doll14 from "../../assets/images/house/doll14.jpg";
import doll15 from "../../assets/images/house/doll15.jpg";
import doll16 from "../../assets/images/house/doll16.jpg";
import doll17 from "../../assets/images/house/doll17.jpg";
import doll18 from "../../assets/images/house/doll18.jpg";
import doll19 from "../../assets/images/house/doll19.jpg";
import doll20 from "../../assets/images/house/doll20.jpg";

// circus
import doll21 from "../../assets/images/circus/doll21.jpg";
import doll22 from "../../assets/images/circus/doll22.jpg";
import doll23 from "../../assets/images/circus/doll23.jpg";
import doll24 from "../../assets/images/circus/doll24.jpg";
import doll25 from "../../assets/images/circus/doll25.jpg";
import doll26 from "../../assets/images/circus/doll26.jpg";
import doll27 from "../../assets/images/circus/doll27.jpg";
import doll28 from "../../assets/images/circus/doll28.jpg";
import doll29 from "../../assets/images/circus/doll29.jpg";
import doll30 from "../../assets/images/circus/doll30.jpg";
import doll31 from "../../assets/images/circus/doll31.jpg";
import doll32 from "../../assets/images/circus/doll32.jpg";
import doll33 from "../../assets/images/circus/doll33.jpg";
import doll34 from "../../assets/images/circus/doll34.jpg";
import doll35 from "../../assets/images/circus/doll35.jpg";
import doll36 from "../../assets/images/circus/doll36.jpg";
import doll37 from "../../assets/images/circus/doll37.jpg";
import doll38 from "../../assets/images/circus/doll38.jpg";
import doll39 from "../../assets/images/circus/doll39.jpg";
import doll40 from "../../assets/images/circus/doll40.jpg";

//daycare
import doll41 from "../../assets/images/daycare/doll41.jpg";
import doll42 from "../../assets/images/daycare/doll42.jpg";
import doll43 from "../../assets/images/daycare/doll43.jpg";
import doll44 from "../../assets/images/daycare/doll44.jpg";
import doll45 from "../../assets/images/daycare/doll45.jpg";
import doll46 from "../../assets/images/daycare/doll46.jpg";
import doll47 from "../../assets/images/daycare/doll47.jpg";
import doll48 from "../../assets/images/daycare/doll48.jpg";
import doll49 from "../../assets/images/daycare/doll49.jpg";
import doll50 from "../../assets/images/daycare/doll50.jpg";
import doll51 from "../../assets/images/daycare/doll51.jpg";
import doll52 from "../../assets/images/daycare/doll52.jpg";
import doll53 from "../../assets/images/daycare/doll53.jpg";
import doll54 from "../../assets/images/daycare/doll54.jpg";
import doll55 from "../../assets/images/daycare/doll55.jpg";
import doll56 from "../../assets/images/daycare/doll56.jpg";
import doll57 from "../../assets/images/daycare/doll57.jpg";
import doll58 from "../../assets/images/daycare/doll58.jpg";
import doll59 from "../../assets/images/daycare/doll59.jpg";
import doll60 from "../../assets/images/daycare/doll60.jpg";

// Cabin in the woods
import doll61 from "../../assets/images/cabin/doll61.jpg";
import doll62 from "../../assets/images/cabin/doll62.jpg";
import doll63 from "../../assets/images/cabin/doll63.jpg";
import doll64 from "../../assets/images/cabin/doll64.jpg";
import doll65 from "../../assets/images/cabin/doll65.jpg";
import doll66 from "../../assets/images/cabin/doll66.jpg";
import doll67 from "../../assets/images/cabin/doll67.jpg";
import doll68 from "../../assets/images/cabin/doll68.jpg";
import doll69 from "../../assets/images/cabin/doll69.jpg";
import doll70 from "../../assets/images/cabin/doll70.jpg";
import doll71 from "../../assets/images/cabin/doll71.jpg";
import doll72 from "../../assets/images/cabin/doll72.jpg";
import doll73 from "../../assets/images/cabin/doll73.jpg";
import doll74 from "../../assets/images/cabin/doll74.jpg";
import doll75 from "../../assets/images/cabin/doll75.jpg";
import doll76 from "../../assets/images/cabin/doll76.jpg";
import doll77 from "../../assets/images/cabin/doll77.jpg";
import doll78 from "../../assets/images/cabin/doll78.jpg";
import doll79 from "../../assets/images/cabin/doll79.jpg";
import doll80 from "../../assets/images/cabin/doll80.jpg";

// Toy Factory
import doll81 from "../../assets/images/toyfactory/doll81.jpg";
import doll82 from "../../assets/images/toyfactory/doll82.jpg";
import doll83 from "../../assets/images/toyfactory/doll83.jpg";
import doll84 from "../../assets/images/toyfactory/doll84.jpg";
import doll85 from "../../assets/images/toyfactory/doll85.jpg";
import doll86 from "../../assets/images/toyfactory/doll86.jpg";
import doll87 from "../../assets/images/toyfactory/doll87.jpg";
import doll88 from "../../assets/images/toyfactory/doll88.jpg";
import doll89 from "../../assets/images/toyfactory/doll89.jpg";
import doll90 from "../../assets/images/toyfactory/doll90.jpg";
import doll91 from "../../assets/images/toyfactory/doll91.jpg";
import doll92 from "../../assets/images/toyfactory/doll92.jpg";
import doll93 from "../../assets/images/toyfactory/doll93.jpg";
import doll94 from "../../assets/images/toyfactory/doll94.jpg";
import doll95 from "../../assets/images/toyfactory/doll95.jpg";
import doll96 from "../../assets/images/toyfactory/doll96.jpg";
import doll97 from "../../assets/images/toyfactory/doll97.jpg";
import doll98 from "../../assets/images/toyfactory/doll98.jpg";
import doll99 from "../../assets/images/toyfactory/doll99.jpg";
import doll100 from "../../assets/images/toyfactory/doll100.jpg";

type Doll = {
  id: number;
  name: string;
  image: string;
  gender: "male" | "female";
  map: "house" | "circus" | "daycare" | "cabin" | "toyfactory" | "all";
};

export default function Game() {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedMap = location.state?.map || "all";

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [currentDoll, setCurrentDoll] = useState<Doll | null>(null);
  const [options, setOptions] = useState<string[]>([]);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isAnswerSelected, setIsAnswerSelected] = useState(false);
  const [shuffledDolls, setShuffledDolls] = useState<Doll[]>([]);
  const [isEndlessMode, setIsEndlessMode] = useState(false);
  const [streak, setStreak] = useState(0);

  // Все куклы
  // prettier-ignore
  const allDolls: Doll[] = [
    // House (1-20), мужские куклы
    { id: 1, name: "Bill", image: doll1, gender: "male", map: "house" },
    { id: 2, name: "Monty", image: doll2, gender: "male", map: "house" },
    { id: 3, name: "Freddy", image: doll3, gender: "male", map: "house" },
    { id: 4, name: "Rudy", image: doll4, gender: "male", map: "house" },
    { id: 5, name: "Penny", image: doll5, gender: "male", map: "house" },
    { id: 6, name: "Ricky", image: doll6, gender: "male", map: "house" },
    { id: 7, name: "Victor", image: doll7, gender: "male", map: "house" },
    { id: 8, name: "Bastian", image: doll8, gender: "male", map: "house" },
    { id: 9, name: "Sammy", image: doll9, gender: "male", map: "house" },
    { id: 10, name: "Max", image: doll10, gender: "male", map: "house" },
    // Женские куклы (11-20)
    { id: 11, name: "Amy", image: doll11, gender: "female", map: "house" },
    { id: 12, name: "Ivy", image: doll12, gender: "female", map: "house" },
    { id: 13, name: "Zoe", image: doll13, gender: "female", map: "house" },
    { id: 14, name: "Daisy", image: doll14, gender: "female", map: "house" },
    { id: 15, name: "Bella", image: doll15, gender: "female", map: "house" },
    { id: 16, name: "Maggie", image: doll16, gender: "female", map: "house" },
    { id: 17, name: "Dolly", image: doll17, gender: "female", map: "house" },
    { id: 18, name: "Flora", image: doll18, gender: "female", map: "house" },
    { id: 19, name: "Lucy", image: doll19, gender: "female", map: "house" },
    { id: 20, name: "Evie", image: doll20, gender: "female", map: "house" },

    // Circus (21-40), женские куклы
    { id: 21, name: "Blue", image: doll21, gender: "female", map: "circus" },
    { id: 22, name: "Erika", image: doll22, gender: "female", map: "circus" },
    { id: 23, name: "Giselle", image: doll23, gender: "female", map: "circus" },
    { id: 24, name: "Iris", image: doll24, gender: "female", map: "circus" },
    { id: 25, name: "Jess", image: doll25, gender: "female", map: "circus" },
    { id: 26, name: "Mama", image: doll26, gender: "female", map: "circus" },
    { id: 27, name: "Bee", image: doll27, gender: "female", map: "circus" },
    { id: 28, name: "Tahlia", image: doll28, gender: "female", map: "circus" },
    { id: 29, name: "Twig", image: doll29, gender: "female", map: "circus" },
    { id: 30, name: "Vic", image: doll30, gender: "female", map: "circus" },
    // Мужские куклы (31-40)
    { id: 31, name: "Cap", image: doll31, gender: "male", map: "circus" },
    { id: 32, name: "Daniel", image: doll32, gender: "male", map: "circus" },
    { id: 33, name: "Genu", image: doll33, gender: "male", map: "circus" },
    { id: 34, name: "Haye", image: doll34, gender: "male", map: "circus" },
    { id: 35, name: "Jackson", image: doll35, gender: "male", map: "circus" },
    { id: 36, name: "Jake", image: doll36, gender: "male", map: "circus" },
    { id: 37, name: "Luke", image: doll37, gender: "male", map: "circus" },
    { id: 38, name: "Meap", image: doll38, gender: "male", map: "circus" },
    { id: 39, name: "Poly", image: doll39, gender: "male", map: "circus" },
    { id: 40, name: "Rasal", image: doll40, gender: "male", map: "circus" },
    //Daycare (41-50), женские куклы
    { id: 41, name: "Asu", image: doll41, gender: "female", map: "daycare" },
    { id: 42, name: "Mil", image: doll42, gender: "female", map: "daycare" },
    { id: 43, name: "Emma", image: doll43, gender: "female", map: "daycare" },
    { id: 44, name: "Ann", image: doll44, gender: "female", map: "daycare" },
    { id: 45, name: "Madison", image: doll45, gender: "female", map: "daycare",},
    { id: 46, name: "Jace", image: doll46, gender: "female", map: "daycare" },
    { id: 47, name: "Ari", image: doll47, gender: "female", map: "daycare" },
    { id: 48, name: "Bim", image: doll48, gender: "female", map: "daycare" },
    { id: 49, name: "Lost", image: doll49, gender: "female", map: "daycare" },
    { id: 50, name: "Panda", image: doll50, gender: "female", map: "daycare" },
    //мужские куклы (51-60)
    { id: 51, name: "Thorlar", image: doll51, gender: "male", map: "daycare" },
    { id: 52, name: "Venti", image: doll52, gender: "male", map: "daycare" },
    { id: 53, name: "Miaw", image: doll53, gender: "male", map: "daycare" },
    { id: 54, name: "Scudi", image: doll54, gender: "male", map: "daycare" },
    { id: 55, name: "Japa", image: doll55, gender: "male", map: "daycare" },
    { id: 56, name: "Kendro", image: doll56, gender: "male", map: "daycare" },
    { id: 57, name: "Phat", image: doll57, gender: "male", map: "daycare" },
    { id: 58, name: "Nem", image: doll58, gender: "male", map: "daycare" },
    { id: 59, name: "Valera", image: doll59, gender: "male", map: "daycare" },
    { id: 60, name: "Terry", image: doll60, gender: "male", map: "daycare" },
    //cabin in the woods, (61-70), женские куклы
    { id: 61, name: "Bamico", image: doll61, gender: "female", map: "cabin" },
    { id: 62, name: "Sally", image: doll62, gender: "female", map: "cabin" },
    { id: 63, name: "Bruja", image: doll63, gender: "female", map: "cabin" },
    { id: 64, name: "Mia", image: doll64, gender: "female", map: "cabin" },
    { id: 65, name: "Vera", image: doll65, gender: "female", map: "cabin" },
    { id: 66, name: "Feya", image: doll66, gender: "female", map: "cabin" },
    { id: 67, name: "Nix", image: doll67, gender: "female", map: "cabin" },
    { id: 68, name: "Bri", image: doll68, gender: "female", map: "cabin" },
    { id: 69, name: "Lia", image: doll69, gender: "female", map: "cabin" },
    { id: 70, name: "Ena", image: doll70, gender: "female", map: "cabin" },
    //cabin in the woods, (71-80), мужские куклы
    { id: 71, name: "Clobal", image: doll71, gender: "male", map: "cabin" },
    { id: 72, name: "Kuplinov", image: doll72, gender: "male", map: "cabin" },
    { id: 73, name: "Insym", image: doll73, gender: "male", map: "cabin" },
    { id: 74, name: "Crashdiet", image: doll74, gender: "male", map: "cabin" },
    { id: 75, name: "Cofi", image: doll75, gender: "male", map: "cabin" },
    { id: 76, name: "Aitor", image: doll76, gender: "male", map: "cabin" },
    { id: 77, name: "Darksora", image: doll77, gender: "male", map: "cabin" },
    { id: 78, name: "Krestik", image: doll78, gender: "male", map: "cabin" },
    { id: 79, name: "Brian", image: doll79, gender: "male", map: "cabin" },
    { id: 80, name: "Ninggeez", image: doll80, gender: "male", map: "cabin" },

    // Toy Factory (81-100), женские куклы
  { id: 81, name: "Fabiola", image: doll81, gender: "female", map: "toyfactory" },
  { id: 82, name: "Gely", image: doll82, gender: "female", map: "toyfactory" },
  { id: 83, name: "Harper", image: doll83, gender: "female", map: "toyfactory" },
  { id: 84, name: "Lucy", image: doll84, gender: "female", map: "toyfactory" },
  { id: 85, name: "Maya", image: doll85, gender: "female", map: "toyfactory" },
  { id: 86, name: "Nova", image: doll86, gender: "female", map: "toyfactory" },
  { id: 87, name: "Roxy", image: doll87, gender: "female", map: "toyfactory" },
  { id: 88, name: "Sandy", image: doll88, gender: "female", map: "toyfactory" },
  { id: 89, name: "Shadow", image: doll89, gender: "female", map: "toyfactory" },
  { id: 90, name: "Valeria", image: doll90, gender: "female", map: "toyfactory" },
  // Мужские куклы (91-100)
  { id: 91, name: "Alfred", image: doll91, gender: "male", map: "toyfactory" },
  { id: 92, name: "Bradley", image: doll92, gender: "male", map: "toyfactory" },
  { id: 93, name: "Cole", image: doll93, gender: "male", map: "toyfactory" },
  { id: 94, name: "Eugene", image: doll94, gender: "male", map: "toyfactory" },
  { id: 95, name: "Larry", image: doll95, gender: "male", map: "toyfactory" },
  { id: 96, name: "Luigi", image: doll96, gender: "male", map: "toyfactory" },
  { id: 97, name: "Seldon", image: doll97, gender: "male", map: "toyfactory" },
  { id: 98, name: "Sparklez", image: doll98, gender: "male", map: "toyfactory" },
  { id: 99, name: "Tony", image: doll99, gender: "male", map: "toyfactory" },
  { id: 100, name: "Warm", image: doll100, gender: "male", map: "toyfactory" },
  ];

  // Фильтруем и перемешиваем куклы по выбранной карте
  useEffect(() => {
    const isEndless = selectedMap === "endless";
    setIsEndlessMode(isEndless);

    const filtered = isEndless
      ? [...allDolls]
      : selectedMap === "all"
      ? [...allDolls]
      : allDolls.filter((doll) => doll.map === selectedMap);

    if (!isEndless) {
      const shuffled = [...filtered].sort(() => Math.random() - 0.5);
      setShuffledDolls(shuffled);
    }

    setCurrentQuestionIndex(0);
    setScore(0);
    setStreak(0);
    setShowModal(false);
    setIsAnswerSelected(false);
    setTimeLeft(30);
  }, [selectedMap]);

  // Генерация нового вопроса для бесконечного режима
  const generateNewQuestion = () => {
    const availableDolls = allDolls;
    const randomIndex = Math.floor(Math.random() * availableDolls.length);
    const doll = availableDolls[randomIndex];
    setCurrentDoll(doll);
    setCorrectAnswer(doll.name);

    const genderFilteredDolls = allDolls.filter(
      (d) => d.gender === doll.gender
    );
    const incorrectOptions = genderFilteredDolls
      .filter((d) => d.name !== doll.name)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
      .map((d) => d.name);

    setOptions(
      [...incorrectOptions, doll.name].sort(() => 0.5 - Math.random())
    );
    setTimeLeft(30);
    setIsAnswerSelected(false);
  };

  // Генерация текущего вопроса
  useEffect(() => {
    if (isEndlessMode) {
      if (!currentDoll) {
        generateNewQuestion();
      }
    } else {
      if (currentQuestionIndex < shuffledDolls.length) {
        const doll = shuffledDolls[currentQuestionIndex];
        setCurrentDoll(doll);
        setCorrectAnswer(doll.name);

        const genderFilteredDolls = allDolls.filter(
          (d) => d.gender === doll.gender
        );
        const incorrectOptions = genderFilteredDolls
          .filter((d) => d.name !== doll.name)
          .sort(() => 0.5 - Math.random())
          .slice(0, 3)
          .map((d) => d.name);

        setOptions(
          [...incorrectOptions, doll.name].sort(() => 0.5 - Math.random())
        );
        setTimeLeft(30);
        setIsAnswerSelected(false);
      } else if (shuffledDolls.length > 0) {
        setShowModal(true);
      }
    }
  }, [shuffledDolls, currentQuestionIndex, isEndlessMode, selectedMap]);

  // Таймер
  useEffect(() => {
    if (isAnswerSelected || showModal || !currentDoll) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          if (isEndlessMode) {
            setIsAnswerSelected(true);
            setShowModal(true);
          } else {
            moveToNextQuestion();
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isAnswerSelected, showModal, isEndlessMode, currentDoll]);

  const moveToNextQuestion = () => {
    if (!isEndlessMode && currentQuestionIndex >= shuffledDolls.length - 1) {
      setShowModal(true);
    } else {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const handleAnswer = (selectedName: string) => {
    if (isAnswerSelected || !currentDoll) return;

    setIsAnswerSelected(true);
    const isCorrect = selectedName === correctAnswer;

    const pointsToAdd = isCorrect ? 100 + timeLeft : 0;
    setScore((prev) => prev + pointsToAdd);

    if (isCorrect) {
      setStreak((prev) => prev + 1);
    } else {
      setStreak(0);
    }

    if (isEndlessMode) {
      if (!isCorrect) {
        setShowModal(true);
      } else {
        setTimeout(() => {
          generateNewQuestion();
        }, 1000);
      }
    } else {
      setTimeout(moveToNextQuestion, 1000);
    }
  };

  const restartGame = () => {
    if (!isEndlessMode) {
      const shuffled = [...shuffledDolls].sort(() => Math.random() - 0.5);
      setShuffledDolls(shuffled);
    }
    setCurrentQuestionIndex(0);
    setScore(0);
    setStreak(0);
    setShowModal(false);
    setIsAnswerSelected(false);
    setTimeLeft(30);
  };

  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <div className={styles.gameContainer}>
          <div className={styles.gameHeader}>
            <div className={styles.gameInfo}>
              <span className={styles.mapName}>
                {selectedMap === "house" && "🏠 House"}
                {selectedMap === "circus" && "🎪 Circus"}
                {selectedMap === "daycare" && "🏫 Daycare"}
                {selectedMap === "cabin" && "🌲 Cabin in the Woods"}
                {selectedMap === "toyfactory" && "🏭 Toy Factory"}
                {selectedMap === "all" && "🌍 All Dolls"}
                {selectedMap === "endless" && "∞ Endless Mode"}
              </span>
              {!isEndlessMode ? (
                <div className={styles.gameStat}>
                  Question: {currentQuestionIndex + 1}/{shuffledDolls.length}
                </div>
              ) : (
                <div className={styles.gameStat}>Streak: {streak}</div>
              )}
              <div className={styles.gameStat}>Score: {score}</div>
              <div
                className={`${styles.gameStat} ${
                  timeLeft <= 5 ? styles.timeWarning : ""
                }`}
              >
                Time: {timeLeft}s
              </div>
            </div>
          </div>

          {currentDoll ? (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={styles.questionCard}
              >
                <h2 className={styles.questionTitle}>What doll is this?</h2>
                <div className={styles.dollImageContainer}>
                  <img
                    src={currentDoll.image}
                    alt="Guess the doll"
                    className={styles.dollImageLarge}
                  />
                  <div className={styles.genderBadge}>
                    {currentDoll.gender === "male" ? "♂ Male" : "♀ Female"}
                  </div>
                </div>
              </motion.div>

              <div className={styles.optionsGrid}>
                {options.map((name) => (
                  <motion.button
                    key={name}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className={`${styles.optionButton} ${
                      isAnswerSelected && name === correctAnswer
                        ? styles.correct
                        : ""
                    } ${
                      isAnswerSelected && name !== correctAnswer
                        ? styles.incorrect
                        : ""
                    }`}
                    onClick={() => handleAnswer(name)}
                    disabled={isAnswerSelected}
                  >
                    {name}
                  </motion.button>
                ))}
              </div>
            </>
          ) : (
            <div className={styles.noDolls}>Loading dolls... Please wait</div>
          )}
        </div>
      </main>

      <Footer />

      <AnimatePresence>
        {showModal && (
          <Modal
            score={score}
            streak={streak}
            isEndlessMode={isEndlessMode}
            onRestart={restartGame}
            onClose={() => navigate("/")}
            map={selectedMap}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

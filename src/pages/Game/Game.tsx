import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";
import Modal from "@components/Modal/Modal";
import styles from "./Game.module.scss";

// house
import imgBill from "../../assets/images/output/house/1.png";
import imgMonty from "../../assets/images/output/house/2.png";
import imgFreddy from "../../assets/images/output/house/3.png";
import imgRudy from "../../assets/images/output/house/4.png";
import imgPenny from "../../assets/images/output/house/5.png";
import imgRicky from "../../assets/images/output/house/6.png";
import imgVictor from "../../assets/images/output/house/7.png";
import imgBastian from "../../assets/images/output/house/8.png";
import imgSammy from "../../assets/images/output/house/9.png";
import imgMax from "../../assets/images/output/house/10.png";
import imgAmy from "../../assets/images/output/house/11.png";
import imgIvy from "../../assets/images/output/house/12.png";
import imgZoe from "../../assets/images/output/house/13.png";
import imgDaisy from "../../assets/images/output/house/14.png";
import imgBella from "../../assets/images/output/house/15.png";
import imgMaggie from "../../assets/images/output/house/16.png";
import imgDolly from "../../assets/images/output/house/17.png";
import imgFlora from "../../assets/images/output/house/18.png";
import imgLucy from "../../assets/images/output/house/19.png";
import imgEvie from "../../assets/images/output/house/20.png";

// circus
import imgBlue from "../../assets/images/output/circus/21.png";
import imgErika from "../../assets/images/output/circus/22.png";
import imgGiselle from "../../assets/images/output/circus/23.png";
import imgIris from "../../assets/images/output/circus/24.png";
import imgJess from "../../assets/images/output/circus/25.png";
import imgMama from "../../assets/images/output/circus/26.png";
import imgBee from "../../assets/images/output/circus/27.png";
import imgTahlia from "../../assets/images/output/circus/28.png";
import imgTwig from "../../assets/images/output/circus/29.png";
import imgVic from "../../assets/images/output/circus/30.png";
import imgCap from "../../assets/images/output/circus/31.png";
import imgDaniel from "../../assets/images/output/circus/32.png";
import imgGenu from "../../assets/images/output/circus/33.png";
import imgHaye from "../../assets/images/output/circus/34.png";
import imgJackson from "../../assets/images/output/circus/35.png";
import imgJake from "../../assets/images/output/circus/36.png";
import imgLuke from "../../assets/images/output/circus/37.png";
import imgMeap from "../../assets/images/output/circus/38.png";
import imgPoly from "../../assets/images/output/circus/39.png";
import imgRasal from "../../assets/images/output/circus/40.png";

// daycare
import imgAsu from "../../assets/images/output/daycare/41.png";
import imgMil from "../../assets/images/output/daycare/42.png";
import imgEmma from "../../assets/images/output/daycare/43.png";
import imgAnn from "../../assets/images/output/daycare/44.png";
import imgMadison from "../../assets/images/output/daycare/45.png";
import imgJace from "../../assets/images/output/daycare/46.png";
import imgAri from "../../assets/images/output/daycare/47.png";
import imgBim from "../../assets/images/output/daycare/48.png";
import imgLost from "../../assets/images/output/daycare/49.png";
import imgPanda from "../../assets/images/output/daycare/50.png";
import imgThorlar from "../../assets/images/output/daycare/51.png";
import imgVenti from "../../assets/images/output/daycare/52.png";
import imgMiaw from "../../assets/images/output/daycare/53.png";
import imgScudi from "../../assets/images/output/daycare/54.png";
import imgJapa from "../../assets/images/output/daycare/55.png";
import imgKendro from "../../assets/images/output/daycare/56.png";
import imgPhat from "../../assets/images/output/daycare/57.png";
import imgNem from "../../assets/images/output/daycare/58.png";
import imgValera from "../../assets/images/output/daycare/59.png";
import imgTerry from "../../assets/images/output/daycare/60.png";

// cabin in the woods
import imgBamico from "../../assets/images/output/cabin/61.png";
import imgSally from "../../assets/images/output/cabin/62.png";
import imgBruja from "../../assets/images/output/cabin/63.png";
import imgMia from "../../assets/images/output/cabin/64.png";
import imgVera from "../../assets/images/output/cabin/65.png";
import imgFeya from "../../assets/images/output/cabin/66.png";
import imgNix from "../../assets/images/output/cabin/67.png";
import imgBri from "../../assets/images/output/cabin/68.png";
import imgLia from "../../assets/images/output/cabin/69.png";
import imgEna from "../../assets/images/output/cabin/70.png";
import imgClobal from "../../assets/images/output/cabin/71.png";
import imgKuplinov from "../../assets/images/output/cabin/72.png";
import imgInsym from "../../assets/images/output/cabin/73.png";
import imgCrashdiet from "../../assets/images/output/cabin/74.png";
import imgCofi from "../../assets/images/output/cabin/75.png";
import imgAitor from "../../assets/images/output/cabin/76.png";
import imgDarksora from "../../assets/images/output/cabin/77.png";
import imgKrestik from "../../assets/images/output/cabin/78.png";
import imgBrian from "../../assets/images/output/cabin/79.png";
import imgNinggeez from "../../assets/images/output/cabin/80.png";

// toy factory
import imgFabiola from "../../assets/images/output/toyFactory/81.png";
import imgGely from "../../assets/images/output/toyFactory/82.png";
import imgHarper from "../../assets/images/output/toyFactory/83.png";
import imgLucia from "../../assets/images/output/toyFactory/84.png";
import imgMaya from "../../assets/images/output/toyFactory/85.png";
import imgNova from "../../assets/images/output/toyFactory/86.png";
import imgRoxy from "../../assets/images/output/toyFactory/87.png";
import imgSandy from "../../assets/images/output/toyFactory/88.png";
import imgShadow from "../../assets/images/output/toyFactory/89.png";
import imgValeria from "../../assets/images/output/toyFactory/90.png";
import imgAlfred from "../../assets/images/output/toyFactory/91.png";
import imgBradley from "../../assets/images/output/toyFactory/92.png";
import imgCole from "../../assets/images/output/toyFactory/93.png";
import imgEugene from "../../assets/images/output/toyFactory/94.png";
import imgLarry from "../../assets/images/output/toyFactory/95.png";
import imgLuigi from "../../assets/images/output/toyFactory/96.png";
import imgSeldon from "../../assets/images/output/toyFactory/97.png";
import imgSparklez from "../../assets/images/output/toyFactory/98.png";
import imgTony from "../../assets/images/output/toyFactory/99.png";
import imgWarm from "../../assets/images/output/toyFactory/100.png";

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
    { id: 1, name: "Bill", image: imgBill, gender: "male", map: "house" },
    { id: 2, name: "Monty", image: imgMonty, gender: "male", map: "house" },
    { id: 3, name: "Freddy", image: imgFreddy, gender: "male", map: "house" },
    { id: 4, name: "Rudy", image: imgRudy, gender: "male", map: "house" },
    { id: 5, name: "Penny", image: imgPenny, gender: "male", map: "house" },
    { id: 6, name: "Ricky", image: imgRicky, gender: "male", map: "house" },
    { id: 7, name: "Victor", image: imgVictor, gender: "male", map: "house" },
    { id: 8, name: "Bastian", image: imgBastian, gender: "male", map: "house" },
    { id: 9, name: "Sammy", image: imgSammy, gender: "male", map: "house" },
    { id: 10, name: "Max", image: imgMax, gender: "male", map: "house" },
    // Женские куклы (11-20)
    { id: 11, name: "Amy", image: imgAmy, gender: "female", map: "house" },
    { id: 12, name: "Ivy", image: imgIvy, gender: "female", map: "house" },
    { id: 13, name: "Zoe", image: imgZoe, gender: "female", map: "house" },
    { id: 14, name: "Daisy", image: imgDaisy, gender: "female", map: "house" },
    { id: 15, name: "Bella", image: imgBella, gender: "female", map: "house" },
    { id: 16, name: "Maggie", image: imgMaggie, gender: "female", map: "house" },
    { id: 17, name: "Dolly", image: imgDolly, gender: "female", map: "house" },
    { id: 18, name: "Flora", image: imgFlora, gender: "female", map: "house" },
    { id: 19, name: "Lucy", image: imgLucy, gender: "female", map: "house" },
    { id: 20, name: "Evie", image: imgEvie, gender: "female", map: "house" },

    // Circus (21-40), женские куклы
    { id: 21, name: "Blue", image: imgBlue, gender: "female", map: "circus" },
    { id: 22, name: "Erika", image: imgErika, gender: "female", map: "circus" },
    { id: 23, name: "Giselle", image: imgGiselle, gender: "female", map: "circus" },
    { id: 24, name: "Iris", image: imgIris, gender: "female", map: "circus" },
    { id: 25, name: "Jess", image: imgJess, gender: "female", map: "circus" },
    { id: 26, name: "Mama", image: imgMama, gender: "female", map: "circus" },
    { id: 27, name: "Bee", image: imgBee, gender: "female", map: "circus" },
    { id: 28, name: "Tahlia", image: imgTahlia, gender: "female", map: "circus" },
    { id: 29, name: "Twig", image: imgTwig, gender: "female", map: "circus" },
    { id: 30, name: "Vic", image: imgVic, gender: "female", map: "circus" },
    // Мужские куклы (31-40)
    { id: 31, name: "Cap", image: imgCap, gender: "male", map: "circus" },
    { id: 32, name: "Daniel", image: imgDaniel, gender: "male", map: "circus" },
    { id: 33, name: "Genu", image: imgGenu, gender: "male", map: "circus" },
    { id: 34, name: "Haye", image: imgHaye, gender: "male", map: "circus" },
    { id: 35, name: "Jackson", image: imgJackson, gender: "male", map: "circus" },
    { id: 36, name: "Jake", image: imgJake, gender: "male", map: "circus" },
    { id: 37, name: "Luke", image: imgLuke, gender: "male", map: "circus" },
    { id: 38, name: "Meap", image: imgMeap, gender: "male", map: "circus" },
    { id: 39, name: "Poly", image: imgPoly, gender: "male", map: "circus" },
    { id: 40, name: "Rasal", image: imgRasal, gender: "male", map: "circus" },
    // Daycare (41-50), женские куклы
    { id: 41, name: "Asu", image: imgAsu, gender: "female", map: "daycare" },
    { id: 42, name: "Mil", image: imgMil, gender: "female", map: "daycare" },
    { id: 43, name: "Emma", image: imgEmma, gender: "female", map: "daycare" },
    { id: 44, name: "Ann", image: imgAnn, gender: "female", map: "daycare" },
    { id: 45, name: "Madison", image: imgMadison, gender: "female", map: "daycare" },
    { id: 46, name: "Jace", image: imgJace, gender: "female", map: "daycare" },
    { id: 47, name: "Ari", image: imgAri, gender: "female", map: "daycare" },
    { id: 48, name: "Bim", image: imgBim, gender: "female", map: "daycare" },
    { id: 49, name: "Lost", image: imgLost, gender: "female", map: "daycare" },
    { id: 50, name: "Panda", image: imgPanda, gender: "female", map: "daycare" },
    // Мужские куклы (51-60)
    { id: 51, name: "Thorlar", image: imgThorlar, gender: "male", map: "daycare" },
    { id: 52, name: "Venti", image: imgVenti, gender: "male", map: "daycare" },
    { id: 53, name: "Miaw", image: imgMiaw, gender: "male", map: "daycare" },
    { id: 54, name: "Scudi", image: imgScudi, gender: "male", map: "daycare" },
    { id: 55, name: "Japa", image: imgJapa, gender: "male", map: "daycare" },
    { id: 56, name: "Kendro", image: imgKendro, gender: "male", map: "daycare" },
    { id: 57, name: "Phat", image: imgPhat, gender: "male", map: "daycare" },
    { id: 58, name: "Nem", image: imgNem, gender: "male", map: "daycare" },
    { id: 59, name: "Valera", image: imgValera, gender: "male", map: "daycare" },
    { id: 60, name: "Terry", image: imgTerry, gender: "male", map: "daycare" },
    // Cabin in the woods (61-70), женские куклы
    { id: 61, name: "Bamico", image: imgBamico, gender: "female", map: "cabin" },
    { id: 62, name: "Sally", image: imgSally, gender: "female", map: "cabin" },
    { id: 63, name: "Bruja", image: imgBruja, gender: "female", map: "cabin" },
    { id: 64, name: "Mia", image: imgMia, gender: "female", map: "cabin" },
    { id: 65, name: "Vera", image: imgVera, gender: "female", map: "cabin" },
    { id: 66, name: "Feya", image: imgFeya, gender: "female", map: "cabin" },
    { id: 67, name: "Nix", image: imgNix, gender: "female", map: "cabin" },
    { id: 68, name: "Bri", image: imgBri, gender: "female", map: "cabin" },
    { id: 69, name: "Lia", image: imgLia, gender: "female", map: "cabin" },
    { id: 70, name: "Ena", image: imgEna, gender: "female", map: "cabin" },
    // Cabin in the woods (71-80), мужские куклы
    { id: 71, name: "Clobal", image: imgClobal, gender: "male", map: "cabin" },
    { id: 72, name: "Kuplinov", image: imgKuplinov, gender: "male", map: "cabin" },
    { id: 73, name: "Insym", image: imgInsym, gender: "male", map: "cabin" },
    { id: 74, name: "Crashdiet", image: imgCrashdiet, gender: "male", map: "cabin" },
    { id: 75, name: "Cofi", image: imgCofi, gender: "male", map: "cabin" },
    { id: 76, name: "Aitor", image: imgAitor, gender: "male", map: "cabin" },
    { id: 77, name: "Darksora", image: imgDarksora, gender: "male", map: "cabin" },
    { id: 78, name: "Krestik", image: imgKrestik, gender: "male", map: "cabin" },
    { id: 79, name: "Brian", image: imgBrian, gender: "male", map: "cabin" },
    { id: 80, name: "Ninggeez", image: imgNinggeez, gender: "male", map: "cabin" },

    // Toy Factory (81-100), женские куклы
    { id: 81, name: "Fabiola", image: imgFabiola, gender: "female", map: "toyfactory" },
    { id: 82, name: "Gely", image: imgGely, gender: "female", map: "toyfactory" },
    { id: 83, name: "Harper", image: imgHarper, gender: "female", map: "toyfactory" },
    { id: 84, name: "Lucia", image: imgLucia, gender: "female", map: "toyfactory" },
    { id: 85, name: "Maya", image: imgMaya, gender: "female", map: "toyfactory" },
    { id: 86, name: "Nova", image: imgNova, gender: "female", map: "toyfactory" },
    { id: 87, name: "Roxy", image: imgRoxy, gender: "female", map: "toyfactory" },
    { id: 88, name: "Sandy", image: imgSandy, gender: "female", map: "toyfactory" },
    { id: 89, name: "Shadow", image: imgShadow, gender: "female", map: "toyfactory" },
    { id: 90, name: "Valeria", image: imgValeria, gender: "female", map: "toyfactory" },
    // Мужские куклы (91-100)
    { id: 91, name: "Alfred", image: imgAlfred, gender: "male", map: "toyfactory" },
    { id: 92, name: "Bradley", image: imgBradley, gender: "male", map: "toyfactory" },
    { id: 93, name: "Cole", image: imgCole, gender: "male", map: "toyfactory" },
    { id: 94, name: "Eugene", image: imgEugene, gender: "male", map: "toyfactory" },
    { id: 95, name: "Larry", image: imgLarry, gender: "male", map: "toyfactory" },
    { id: 96, name: "Luigi", image: imgLuigi, gender: "male", map: "toyfactory" },
    { id: 97, name: "Seldon", image: imgSeldon, gender: "male", map: "toyfactory" },
    { id: 98, name: "Sparklez", image: imgSparklez, gender: "male", map: "toyfactory" },
    { id: 99, name: "Tony", image: imgTony, gender: "male", map: "toyfactory" },
    { id: 100, name: "Warm", image: imgWarm, gender: "male", map: "toyfactory" },
  ];

  const generateOptions = (doll: Doll) => {
    // Фильтруем куклы по полу И карте (если не endless/all режим)
    let filteredDolls = allDolls;

    if (!isEndlessMode && selectedMap !== "all") {
      filteredDolls = allDolls.filter(
        (d) => d.gender === doll.gender && d.map === doll.map
      );
    } else {
      // Для endless и all режимов фильтруем только по полу
      filteredDolls = allDolls.filter((d) => d.gender === doll.gender);
    }

    // Исключаем текущую куклу и выбираем 3 случайных неправильных ответа
    const incorrectOptions = filteredDolls
      .filter((d) => d.name !== doll.name)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
      .map((d) => d.name);

    // Смешиваем правильный ответ с неправильными
    return [...incorrectOptions, doll.name].sort(() => 0.5 - Math.random());
  };

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
    setOptions(generateOptions(doll));
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
        setOptions(generateOptions(doll));
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

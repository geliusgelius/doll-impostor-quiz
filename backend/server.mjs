import express from "express";
import cors from "cors";
import { addScore, getLeaderboard } from "./api.mjs";

const app = express();

// Настройки CORS
app.use(
  cors({
    origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
    credentials: true,
  })
);

app.use(express.json());

// Логирование запросов
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} ${req.method} ${req.url}`);
  next();
});

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Роут для сохранения результатов
app.post("/api/save-score", async (req, res) => {
  console.log("Получены данные:", req.body);

  try {
    const { map = "default", name, score } = req.body;

    if (!name || score === undefined) {
      return res.status(400).json({
        error: "Неверные параметры запроса",
        required: ["name", "score"],
        optional: ["map"],
      });
    }

    const success = await addScore(map, name, Number(score));
    if (!success) {
      return res.status(500).json({
        error: "Ошибка сохранения в Google Sheets",
      });
    }

    res.json({ success: true });
  } catch (error) {
    console.error("СЕРВЕРНАЯ ОШИБКА:", error);
    res.status(500).json({
      error: "Internal Server Error",
      message: error.message,
    });
  }
});

// Роут для получения лидеров
app.get("/api/leaderboard", async (req, res) => {
  try {
    const { map = "default" } = req.query;
    const data = await getLeaderboard(map);
    res.json(data);
  } catch (error) {
    console.error("SERVER ERROR:", error);
    res.status(500).json({
      error: "Ошибка загрузки данных",
      details: error.message,
    });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
  console.log(`API доступно по: http://localhost:${PORT}/api`);
});

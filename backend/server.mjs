import express from "express";
import cors from "cors";
import { addScore, getLeaderboard } from "./api.mjs";

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
    credentials: true,
  })
);

app.use(express.json());

app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} ${req.method} ${req.url}`);
  next();
});

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

app.post("/api/save-score", async (req, res) => {
  try {
    const { map = "all", name, score, playerId } = req.body;
    console.log(`Save score request:`, { map, name, score, playerId });

    if (!name || score === undefined) {
      return res.status(400).json({
        error: "Invalid request parameters",
        required: ["name", "score"],
        optional: ["map", "playerId"],
      });
    }

    const success = await addScore(map, name, Number(score), playerId);
    res.json({ success });
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).json({
      error: "Internal Server Error",
      message: error.message,
    });
  }
});

app.get("/api/leaderboard", async (req, res) => {
  try {
    const { map = "all" } = req.query;
    console.log(`Leaderboard request for map: ${map}`);

    const data = await getLeaderboard(map);
    console.log(`Data from Google Sheets:`, data);

    if (!Array.isArray(data)) {
      throw new Error("Invalid data format received from Google Sheets");
    }

    const response = data.map((item) => ({
      name: item.name,
      score: item.score,
      date: item.date,
    }));

    console.log(`Sending ${response.length} records`);
    res.json(response);
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).json({
      error: "Error loading leaderboard",
      details: error.message,
    });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`API available at: http://localhost:${PORT}/api`);
});

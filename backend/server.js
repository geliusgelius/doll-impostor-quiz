const express = require("express");
const { addScore, getLeaderboard } = require("./api");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Роуты
app.post("/api/addScore", async (req, res) => {
  const { map, name, score } = req.body;
  const success = await addScore(map, name, score);
  res.status(success ? 200 : 500).json({ success });
});

app.get("/api/getLeaderboard", async (req, res) => {
  const { map } = req.query;
  const data = await getLeaderboard(map);
  res.json(data);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

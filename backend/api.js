const { GoogleSpreadsheet } = require("google-spreadsheet");
const creds = require("./credentials.json");

const doc = new GoogleSpreadsheet(
  "1ocE7SKKskTF4PIEQMP30mb5ukK2Cp9sV22VoMIgkzyc"
);

// Инициализация API
async function init() {
  await doc.useServiceAccountAuth(creds);
  await doc.loadInfo();
  console.log("Connected to Google Sheets:", doc.title);
}
init().catch(console.error);

// Добавление результата
async function addScore(map, name, score) {
  try {
    const sheet =
      doc.sheetsByTitle[map] || (await doc.addSheet({ title: map }));
    const rows = await sheet.getRows();

    // Проверяем существующий результат
    const existingRow = rows.find((row) => row.Name === name);
    if (existingRow) {
      if (parseInt(existingRow.Score) < score) {
        existingRow.Score = score;
        existingRow.Date = new Date().toISOString();
        await existingRow.save();
      }
    } else {
      await sheet.addRow({
        Name: name,
        Score: score,
        Date: new Date().toISOString(),
      });
    }

    return true;
  } catch (error) {
    console.error("Error adding score:", error);
    return false;
  }
}

// Получение таблицы лидеров
async function getLeaderboard(map) {
  try {
    const sheet = doc.sheetsByTitle[map];
    if (!sheet) return [];

    const rows = await sheet.getRows();
    return rows
      .map((row) => ({
        name: row.Name,
        score: parseInt(row.Score),
        date: row.Date,
      }))
      .sort((a, b) => b.score - a.score);
  } catch (error) {
    console.error("Error getting leaderboard:", error);
    return [];
  }
}

module.exports = { addScore, getLeaderboard };

const { GoogleSpreadsheet } = require("google-spreadsheet");
const creds = require("./credentials.json"); // Ваш скачанный файл

const doc = new GoogleSpreadsheet("YOUR_SHEET_ID"); // ID вашей таблицы

async function init() {
  await doc.useServiceAccountAuth(creds);
  await doc.loadInfo();
}

init();

export async function addScore(map, name, score) {
  const sheet = doc.sheetsByTitle[map];

  // Проверяем существующую запись
  const rows = await sheet.getRows();
  const existingRow = rows.find((row) => row.Name === name);

  if (existingRow) {
    // Обновляем если новый рекорд выше
    if (parseInt(existingRow.Score) < score) {
      existingRow.Score = score;
      existingRow.Date = new Date().toISOString();
      await existingRow.save();
    }
  } else {
    // Добавляем новую запись
    await sheet.addRow({
      Name: name,
      Score: score,
      Date: new Date().toISOString(),
    });
  }

  // Сортируем таблицу по убыванию очков
  const sortedRows = rows.sort((a, b) => parseInt(b.Score) - parseInt(a.Score));
  await sheet.clear();
  await sheet.setHeaderRow(["Name", "Score", "Date"]);
  await sheet.addRows(sortedRows);
}

export async function getLeaderboard(map) {
  const sheet = doc.sheetsByTitle[map];
  const rows = await sheet.getRows();
  return rows
    .map((row) => ({
      name: row.Name,
      score: parseInt(row.Score),
      date: row.Date,
    }))
    .sort((a, b) => b.score - a.score);
}

import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";
import { readFile } from "fs/promises";

// Загрузка credentials
const creds = JSON.parse(
  await readFile(new URL("./credentials.json", import.meta.url))
);

// Инициализация JWT клиента
const auth = new JWT({
  email: creds.client_email,
  key: creds.private_key.replace(/\\n/g, "\n"),
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

// Создание экземпляра документа
const doc = new GoogleSpreadsheet(
  "1ocE7SKKskTF4PIEQMP30mb5ukK2Cp9sV22VoMIgkzyc",
  auth
);

// Инициализация документа
let isInitialized = false;
async function initDoc() {
  if (!isInitialized) {
    try {
      await doc.loadInfo();
      isInitialized = true;
      console.log("Документ инициализирован:", doc.title);
    } catch (err) {
      console.error("Ошибка инициализации:", err);
      throw err;
    }
  }
}

export async function addScore(map, name, score) {
  try {
    await initDoc();

    // Получаем или создаем лист
    let sheet = doc.sheetsByTitle[map];
    if (!sheet) {
      sheet = await doc.addSheet({
        title: map,
        headerValues: ["Name", "Score", "Date"],
      });
    }

    // Добавляем строку
    await sheet.addRow({
      Name: name,
      Score: score,
      Date: new Date().toISOString(),
    });

    return true;
  } catch (error) {
    console.error("Ошибка сохранения:", error);
    return false;
  }
}

export async function getLeaderboard(map) {
  try {
    await initDoc();

    const sheet = doc.sheetsByTitle[map];
    if (!sheet) return [];

    // Получаем строки
    const rows = await sheet.getRows();

    // Форматируем и сортируем
    return rows
      .map((row) => ({
        name: row.Name,
        score: Number(row.Score),
        date: row.Date,
      }))
      .sort((a, b) => b.score - a.score);
  } catch (error) {
    console.error("Ошибка получения данных:", error);
    return [];
  }
}

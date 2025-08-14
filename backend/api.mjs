import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";
import { readFile } from "fs/promises";

const creds = JSON.parse(
  await readFile(new URL("./credentials.json", import.meta.url))
);

const auth = new JWT({
  email: creds.client_email,
  key: creds.private_key.replace(/\\n/g, "\n"),
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const doc = new GoogleSpreadsheet(
  "1ocE7SKKskTF4PIEQMP30mb5ukK2Cp9sV22VoMIgkzyc",
  auth
);

let isInitialized = false;

async function initDoc() {
  if (!isInitialized) {
    try {
      await doc.loadInfo();
      isInitialized = true;
      console.log("Document initialized:", doc.title);
    } catch (err) {
      console.error("Initialization error:", err);
      throw err;
    }
  }
}

export async function addScore(map, name, score, playerId = null) {
  try {
    await initDoc();

    let sheet = doc.sheetsByTitle[map];
    if (!sheet) {
      sheet = await doc.addSheet({
        title: map,
        headerValues: ["Name", "Score", "Date", "PlayerId"],
      });
      console.log(`Created new sheet: ${map}`);
    }

    const rows = await sheet.getRows();
    console.log(`Found ${rows.length} rows in sheet ${map}`);

    // Удаляем старую запись этого игрока (если есть)
    const existingRowIndex = playerId
      ? rows.findIndex((row) => row.get("PlayerId") === playerId)
      : rows.findIndex((row) => row.get("Name") === name);

    if (existingRowIndex !== -1) {
      await rows[existingRowIndex].delete();
      console.log(`Deleted old record for ${playerId || name}`);
    }

    // Добавляем новую запись
    await sheet.addRow({
      Name: name,
      Score: score,
      Date: new Date().toISOString(),
      PlayerId: playerId || "",
    });
    console.log(`Added new record for ${name} with score ${score}`);

    return true;
  } catch (error) {
    console.error("Error saving score:", error);
    return false;
  }
}

export async function getLeaderboard(map) {
  try {
    await initDoc();
    console.log(`Getting leaderboard for map: ${map}`);

    const sheet = doc.sheetsByTitle[map];
    if (!sheet) {
      console.log(`Sheet ${map} not found, returning empty array`);
      return [];
    }

    // Загружаем строки с данными
    const rows = await sheet.getRows();
    console.log(`Found ${rows.length} rows in sheet ${map}`);

    // Обрабатываем данные
    const leaderboard = [];

    for (const row of rows) {
      try {
        const name = row.get("Name")?.toString().trim() || "Anonymous";
        const score = parseInt(row.get("Score")) || 0;
        const date = row.get("Date") || new Date().toISOString();

        if (name !== "Anonymous" && score > 0) {
          leaderboard.push({
            name,
            score,
            date,
            playerId: row.get("PlayerId") || "",
          });
        }
      } catch (e) {
        console.error("Error processing row:", row, e);
      }
    }

    // Сортируем по убыванию счета
    leaderboard.sort((a, b) => b.score - a.score);

    console.log(`Returning ${leaderboard.length} valid records`);
    return leaderboard;
  } catch (error) {
    console.error(`Error getting leaderboard for ${map}:`, error);
    return [];
  }
}

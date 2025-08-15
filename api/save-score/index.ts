import { VercelRequest, VercelResponse } from "@vercel/node";
import { doc, initDoc } from "../auth/client.js";

interface ScoreData {
  map?: string;
  name: string;
  score: number;
  playerId?: string;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { map = "all", name, score, playerId } = req.body as ScoreData;

    if (!name?.trim() || score === undefined || isNaN(Number(score))) {
      return res.status(400).json({
        error: "Invalid input",
        details: {
          name: !name?.trim() ? "Required" : undefined,
          score: isNaN(Number(score)) ? "Must be a number" : undefined,
        },
      });
    }

    await initDoc();
    let sheet = doc.sheetsByTitle[map];

    if (!sheet) {
      sheet = await doc.addSheet({
        title: map,
        headerValues: ["Name", "Score", "Date", "PlayerId"],
      });
    }

    const rows = await sheet.getRows();
    const existingIndex = playerId
      ? rows.findIndex((row) => row.get("PlayerId") === playerId)
      : rows.findIndex((row) => row.get("Name") === name);

    if (existingIndex !== -1) {
      if (Number(rows[existingIndex].get("Score")) >= Number(score)) {
        return res.json({ success: true, updated: false });
      }
      await rows[existingIndex].delete();
    }

    await sheet.addRow({
      Name: name.trim(),
      Score: Number(score),
      Date: new Date().toISOString(),
      PlayerId: playerId || "",
    });

    return res.json({ success: true, updated: existingIndex !== -1 });
  } catch (error) {
    console.error("API Error:", error);
    return res.status(500).json({
      error: "Internal Server Error",
      message: error instanceof Error ? error.message : "Unknown error",
    });
  }
}

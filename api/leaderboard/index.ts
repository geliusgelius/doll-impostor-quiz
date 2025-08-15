// @ts-check
import { VercelRequest, VercelResponse } from "@vercel/node";
import { doc, initDoc } from "../auth/client.js";

interface LeaderboardEntry {
  name: string;
  score: number;
  date: string;
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
): Promise<VercelResponse> {
  try {
    await initDoc();
    const map = typeof req.query.map === "string" ? req.query.map : "all";
    const sheet = doc.sheetsByTitle[map];

    if (!sheet) {
      return res.status(404).json({ error: "Sheet not found" });
    }

    const rows = await sheet.getRows();
    const leaderboard: LeaderboardEntry[] = rows
      .map((row) => ({
        name: row.get("Name"),
        score: Number(row.get("Score")),
        date: row.get("Date"),
      }))
      .filter(
        (item): item is LeaderboardEntry =>
          Boolean(item.name) && !isNaN(item.score)
      );

    leaderboard.sort((a, b) => b.score - a.score);

    res.setHeader("Content-Type", "application/json");
    return res.status(200).json(leaderboard);
  } catch (error) {
    console.error("API Error:", error);
    return res.status(500).json({
      error: "Internal Server Error",
      message: error instanceof Error ? error.message : "Unknown error",
    });
  }
}

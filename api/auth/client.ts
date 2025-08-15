import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";

function getRequiredEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing environment variable: ${name}`);
  return value;
}

const serviceAccountEmail = getRequiredEnv("GOOGLE_SERVICE_ACCOUNT_EMAIL");
const privateKey = getRequiredEnv("GOOGLE_PRIVATE_KEY").replace(/\\n/g, "\n");
const sheetId = getRequiredEnv("GOOGLE_SHEETS_ID");

const auth = new JWT({
  email: serviceAccountEmail,
  key: privateKey,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

export const doc = new GoogleSpreadsheet(sheetId, auth);

let isInitialized = false;

export async function initDoc(): Promise<void> {
  if (isInitialized) return;

  try {
    await doc.loadInfo();
    isInitialized = true;
  } catch (error) {
    console.error("Google Sheets init error:", error);
    throw error;
  }
}

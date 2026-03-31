import { renameSync, readdirSync } from "fs";
import { join, extname } from "path";

// Маппинг: имя куклы -> числовой ID (совпадает с id в allDolls)
const dollMap = [
  // house
  { id: 1, name: "Bill", folder: "house" },
  { id: 2, name: "Monty", folder: "house" },
  { id: 3, name: "Freddy", folder: "house" },
  { id: 4, name: "Rudy", folder: "house" },
  { id: 5, name: "Penny", folder: "house" },
  { id: 6, name: "Ricky", folder: "house" },
  { id: 7, name: "Victor", folder: "house" },
  { id: 8, name: "Bastian", folder: "house" },
  { id: 9, name: "Sammy", folder: "house" },
  { id: 10, name: "Max", folder: "house" },
  { id: 11, name: "Amy", folder: "house" },
  { id: 12, name: "Ivy", folder: "house" },
  { id: 13, name: "Zoe", folder: "house" },
  { id: 14, name: "Daisy", folder: "house" },
  { id: 15, name: "Bella", folder: "house" },
  { id: 16, name: "Maggie", folder: "house" },
  { id: 17, name: "Dolly", folder: "house" },
  { id: 18, name: "Flora", folder: "house" },
  { id: 19, name: "Lucy", folder: "house" },
  { id: 20, name: "Evie", folder: "house" },
  // circus
  { id: 21, name: "Blue", folder: "circus" },
  { id: 22, name: "Erika", folder: "circus" },
  { id: 23, name: "Giselle", folder: "circus" },
  { id: 24, name: "Iris", folder: "circus" },
  { id: 25, name: "Jess", folder: "circus" },
  { id: 26, name: "Mama", folder: "circus" },
  { id: 27, name: "Bee", folder: "circus" },
  { id: 28, name: "Tahlia", folder: "circus" },
  { id: 29, name: "Twig", folder: "circus" },
  { id: 30, name: "Vic", folder: "circus" },
  { id: 31, name: "Cap", folder: "circus" },
  { id: 32, name: "Daniel", folder: "circus" },
  { id: 33, name: "Genu", folder: "circus" },
  { id: 34, name: "Haye", folder: "circus" },
  { id: 35, name: "Jackson", folder: "circus" },
  { id: 36, name: "Jake", folder: "circus" },
  { id: 37, name: "Luke", folder: "circus" },
  { id: 38, name: "Meap", folder: "circus", originalName: "meap" },
  { id: 39, name: "Poly", folder: "circus" },
  { id: 40, name: "Rasal", folder: "circus" },
  // daycare
  { id: 41, name: "Asu", folder: "daycare" },
  { id: 42, name: "Mil", folder: "daycare" },
  { id: 43, name: "Emma", folder: "daycare" },
  { id: 44, name: "Ann", folder: "daycare" },
  { id: 45, name: "Madison", folder: "daycare" },
  { id: 46, name: "Jace", folder: "daycare" },
  { id: 47, name: "Ari", folder: "daycare" },
  { id: 48, name: "Bim", folder: "daycare" },
  { id: 49, name: "Lost", folder: "daycare" },
  { id: 50, name: "Panda", folder: "daycare" },
  { id: 51, name: "Thorlar", folder: "daycare" },
  { id: 52, name: "Venti", folder: "daycare" },
  { id: 53, name: "Miaw", folder: "daycare" },
  { id: 54, name: "Scudi", folder: "daycare" },
  { id: 55, name: "Japa", folder: "daycare" },
  { id: 56, name: "Kendro", folder: "daycare" },
  { id: 57, name: "Phat", folder: "daycare" },
  { id: 58, name: "Nem", folder: "daycare" },
  { id: 59, name: "Valera", folder: "daycare" },
  { id: 60, name: "Terry", folder: "daycare" },
  // cabin
  { id: 61, name: "Bamico", folder: "cabin" },
  { id: 62, name: "Sally", folder: "cabin" },
  { id: 63, name: "Bruja", folder: "cabin" },
  { id: 64, name: "Mia", folder: "cabin" },
  { id: 65, name: "Vera", folder: "cabin" },
  { id: 66, name: "Feya", folder: "cabin" },
  { id: 67, name: "Nix", folder: "cabin" },
  { id: 68, name: "Bri", folder: "cabin" },
  { id: 69, name: "Lia", folder: "cabin" },
  { id: 70, name: "Ena", folder: "cabin" },
  { id: 71, name: "Clobal", folder: "cabin" },
  { id: 72, name: "Kuplinov", folder: "cabin" },
  { id: 73, name: "Insym", folder: "cabin" },
  { id: 74, name: "Crashdiet", folder: "cabin" },
  { id: 75, name: "Cofi", folder: "cabin" },
  { id: 76, name: "Aitor", folder: "cabin" },
  { id: 77, name: "Darksora", folder: "cabin" },
  { id: 78, name: "Krestik", folder: "cabin" },
  { id: 79, name: "Brian", folder: "cabin" },
  { id: 80, name: "Ninggeez", folder: "cabin" },
  // toyFactory
  { id: 81, name: "Fabiola", folder: "toyFactory" },
  { id: 82, name: "Gely", folder: "toyFactory" },
  { id: 83, name: "Harper", folder: "toyFactory" },
  { id: 84, name: "Lucia", folder: "toyFactory" },
  { id: 85, name: "Maya", folder: "toyFactory" },
  { id: 86, name: "Nova", folder: "toyFactory" },
  { id: 87, name: "Roxy", folder: "toyFactory" },
  { id: 88, name: "Sandy", folder: "toyFactory" },
  { id: 89, name: "Shadow", folder: "toyFactory" },
  { id: 90, name: "Valeria", folder: "toyFactory" },
  { id: 91, name: "Alfred", folder: "toyFactory" },
  { id: 92, name: "Bradley", folder: "toyFactory" },
  { id: 93, name: "Cole", folder: "toyFactory" },
  { id: 94, name: "Eugene", folder: "toyFactory" },
  { id: 95, name: "Larry", folder: "toyFactory" },
  { id: 96, name: "Luigi", folder: "toyFactory" },
  { id: 97, name: "Seldon", folder: "toyFactory" },
  { id: 98, name: "Sparklez", folder: "toyFactory" },
  { id: 99, name: "Tony", folder: "toyFactory" },
  { id: 100, name: "Warm", folder: "toyFactory" },
];

const baseDir = "src/assets/images/output";

for (const doll of dollMap) {
  const folderPath = join(baseDir, doll.folder);
  const files = readdirSync(folderPath);

  // Ищем файл по имени куклы (case-insensitive)
  const searchName = (doll.originalName || doll.name).toLowerCase();
  const match = files.find((f) => f.toLowerCase().startsWith(searchName));

  if (!match) {
    console.warn(`⚠️  Not found: ${doll.name} in ${doll.folder}`);
    continue;
  }

  const ext = extname(match);
  const newName = `${doll.id}${ext}`;

  if (match === newName) {
    console.log(`✓ Already renamed: ${newName}`);
    continue;
  }

  renameSync(join(folderPath, match), join(folderPath, newName));
  console.log(`✓ ${match} → ${newName}`);
}

console.log("\nDone!");

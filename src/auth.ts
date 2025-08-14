// Генерируем уникальный ID для игрока, если его нет
export const getPlayerId = (): string => {
  let playerId = localStorage.getItem("playerId");
  if (!playerId) {
    playerId =
      "player_" +
      Math.random().toString(36).substring(2, 15) +
      Date.now().toString(36);
    localStorage.setItem("playerId", playerId);
  }
  return playerId;
};

// Получаем сохранённое имя игрока
export const getPlayerName = (): string => {
  return localStorage.getItem("playerName") || "";
};

// Сохраняем имя игрока
export const setPlayerName = (name: string): void => {
  localStorage.setItem("playerName", name.trim());
};

// Получаем данные игрока
export const getPlayerData = () => {
  return {
    id: getPlayerId(),
    name: getPlayerName(),
  };
};

# Doll Impostor Quiz

A fan-made character identification quiz for players of **Doll Impostor** and **Doll INC**. Test how well you know the 100 unique dolls spread across 5 spooky locations — with a timer, score streaks, and a global leaderboard.

🎮 **Live:** [doll-impostor-quiz.vercel.app](https://doll-impostor-quiz.vercel.app)

---

## About the Game

Doll Impostor is one of my favorite horror games, and I built this quiz as a passion project to challenge myself and other fans. Each round shows you a doll image and asks you to pick the correct name from 4 options. Answer fast — the timer rewards speed with bonus points.

**5 locations, 20 dolls each:**

| Location | Dolls |
|---|---|
| 🏠 House | 20 |
| 🎪 Circus | 20 |
| 🧸 Daycare | 20 |
| 🌲 Cabin in the Woods | 20 |
| 🏭 Toy Factory | 20 |

**Game modes:**
- Single location — focus on one map
- All Dolls — all 100 in one run
- Endless Mode — keep going until you get one wrong

**Scoring:**
- Correct answer: 100 points + remaining seconds as bonus
- Streak multiplier for consecutive correct answers
- Scores saved to a global leaderboard

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18 + TypeScript |
| Build tool | Vite |
| Styling | SCSS Modules |
| Animation | Framer Motion |
| Routing | React Router DOM v7 |
| Icons | React Icons |
| Backend | Vercel Serverless Functions (Node.js) |
| Database | Google Sheets API |
| Auth | Google Auth Library |
| Analytics | Vercel Analytics |
| Deployment | Vercel |

---

## Project Structure

```
├── api/                    # Vercel serverless functions
│   ├── auth/               # Google auth client
│   ├── leaderboard/        # Fetch top scores by map
│   └── save-score/         # Save player score
├── backend/                # Local dev server
├── public/                 # Static assets (favicon, sitemap, robots)
├── src/
│   ├── assets/images/      # Doll images by location
│   ├── components/         # Header, Footer, Modal, Icons
│   ├── pages/
│   │   ├── Home/           # Map selection screen
│   │   ├── Game/           # Quiz gameplay
│   │   └── Leaders/        # Leaderboard
│   └── styles/             # Global SCSS variables and mixins
└── index.html
```

---

## Running Locally

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

For the leaderboard to work locally you'll need a Google Sheets API service account. Set the credentials in your environment variables and run:

```bash
npm run vercel-dev
```

---

## SEO

- Semantic HTML with proper meta tags (Open Graph, Twitter Card)
- JSON-LD structured data: `WebApplication`, `BreadcrumbList`, `FAQPage`
- `sitemap.xml` and `robots.txt` in `/public`
- Canonical URL set per page
- Dynamic `document.title` and `meta[description]` updates per route

---

## Author

Built with love by **Angelina Smirnova**  
A frontend developer and Doll Impostor fan.

---

---

# Doll Impostor Quiz (RU)

Фанатский квиз на знание персонажей **Doll Impostor** и **Doll INC**. Проверь, насколько хорошо ты знаешь 100 уникальных кукол из 5 жутких локаций — с таймером, множителем серий и глобальной таблицей лидеров.

🎮 **Играть:** [doll-impostor-quiz.vercel.app](https://doll-impostor-quiz.vercel.app)

---

## Об игре

Doll Impostor — одна из моих любимых хоррор-игр, и этот квиз я сделала как личный проект — чтобы бросить вызов себе и другим фанатам. В каждом раунде показывается изображение куклы, и нужно выбрать правильное имя из 4 вариантов. Отвечай быстрее — таймер даёт бонусные очки за скорость.

**5 локаций, по 20 кукол в каждой:**

| Локация | Куклы |
|---|---|
| 🏠 Дом | 20 |
| 🎪 Цирк | 20 |
| 🧸 Детский сад | 20 |
| 🌲 Хижина в лесу | 20 |
| 🏭 Фабрика игрушек | 20 |

**Режимы игры:**
- Одна локация — сосредоточься на одной карте
- Все куклы — все 100 за один заход
- Бесконечный режим — играй, пока не ошибёшься

**Система очков:**
- Правильный ответ: 100 очков + оставшиеся секунды как бонус
- Множитель за серию правильных ответов подряд
- Результаты сохраняются в глобальную таблицу лидеров

---

## Технологии

| Слой | Технология |
|---|---|
| Фронтенд | React 18 + TypeScript |
| Сборка | Vite |
| Стили | SCSS Modules |
| Анимации | Framer Motion |
| Роутинг | React Router DOM v7 |
| Иконки | React Icons |
| Бэкенд | Vercel Serverless Functions (Node.js) |
| База данных | Google Sheets API |
| Авторизация | Google Auth Library |
| Аналитика | Vercel Analytics |
| Деплой | Vercel |

---

## Структура проекта

```
├── api/                    # Vercel serverless функции
│   ├── auth/               # Google auth клиент
│   ├── leaderboard/        # Получение топ-результатов по карте
│   └── save-score/         # Сохранение результата игрока
├── backend/                # Локальный dev-сервер
├── public/                 # Статика (favicon, sitemap, robots)
├── src/
│   ├── assets/images/      # Изображения кукол по локациям
│   ├── components/         # Header, Footer, Modal, Icons
│   ├── pages/
│   │   ├── Home/           # Экран выбора карты
│   │   ├── Game/           # Игровой процесс
│   │   └── Leaders/        # Таблица лидеров
│   └── styles/             # Глобальные SCSS-переменные и миксины
└── index.html
```

---

## Запуск локально

```bash
# Установить зависимости
npm install

# Запустить dev-сервер
npm run dev

# Собрать для продакшена
npm run build
```

Для работы таблицы лидеров локально потребуется сервисный аккаунт Google Sheets API. Укажи credentials в переменных окружения и запусти:

```bash
npm run vercel-dev
```

---

## SEO

- Семантический HTML с корректными мета-тегами (Open Graph, Twitter Card)
- JSON-LD разметка: `WebApplication`, `BreadcrumbList`, `FAQPage`
- `sitemap.xml` и `robots.txt` в папке `/public`
- Canonical URL для каждой страницы
- Динамическое обновление `document.title` и `meta[description]` при смене роута

---

## Автор

Сделано с любовью — **Angelina Smirnova**  
Фронтенд-разработчик и фанат Doll Impostor.

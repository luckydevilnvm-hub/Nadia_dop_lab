# CV Lab Starter

Стартер для лабораторной работы: персональный CV → CI/CD → GitHub Pages.

> **TODO студент:** удали этот блок. Заполни README своим — про себя, про CV, и **обязательный раздел "Vibe coding log"** (см. внизу).

## Стек

- [Vite](https://vitejs.dev/) — dev server + бандлер
- Vanilla JS + HTML + CSS (можешь добавить TS / фреймворк — на свой страх и риск, CI/lint придётся подкрутить)
- ESLint 9 (flat config) — линтер
- GitHub Actions — CI + CD

## Локальный запуск

```bash
npm install
npm run dev      # dev server на http://localhost:5173
npm run lint     # проверить код
npm run build    # собрать в dist/
npm run preview  # посмотреть прод-сборку локально
```

## Структура

```
.
├── .github/workflows/
│   ├── ci.yml        # PR → lint + build
│   └── deploy.yml    # main → GitHub Pages
├── src/
│   └── main.js       # JS-точка входа
├── index.html        # CV здесь
├── style.css
├── eslint.config.js
├── vite.config.js
└── package.json
```

## Что делать

1. Форкни template или используй "Use this template".
2. Сделай репо публичным.
3. **Settings → Pages → Source: GitHub Actions** (важно, без этого деплой не пройдёт).
4. Заведи ветку `feature/my-cv`, перепиши `index.html` / `style.css` под свой CV.
5. Открой PR в `main`. Дождись зелёного CI.
6. Merge. Смотри Actions — должен запуститься deploy.
7. Открой `https://<username>.github.io/<repo>/` — твой CV в проде.

Подробнее — `STUDENT_GUIDE.md`.

## Vibe coding log

- # Моё CV

## 👤 Обо мне
Студентка первого курса Политеха. Играю в оркестре Павла Ивановича Смирнова на аккордеоне, люблю волейбол.

## 🌐 Live URL
https://luckydevilnvm-hub.github.io/Nadia_dop_lab/

## 🤖 Vibe coding log
- **LLM-ассистент:** Qwen3.5
- **2–3 ключевых промпта:**
  1. "Добавить фотографию с подписью и ссылкой на оркестр"
  2. "Добавить анимацию в конце страницы"
- **Что правил(а) руками после генерации:**
  - Добавила свои реальные данные
  - Поправила тексты и описания проектов
  - Изменила стили под свой вкус

## Live URL

> **TODO студент:** вставь сюда https://luckydevilnvm-hub.github.io/Nadia_dop_lab/
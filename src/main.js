// ===== Переключатель тёмной темы =====
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Проверяем, есть ли сохранённая тема в localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.classList.add('dark-mode');
}

// Обработчик клика
themeToggle?.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  
  // Сохраняем выбор пользователя
  const currentTheme = body.classList.contains('dark-mode') ? 'dark' : 'light';
  localStorage.setItem('theme', currentTheme);
});

// ===== Опционально: консольное приветствие =====
console.log('👋 CV загружен! Нажми 🌗 для смены темы');
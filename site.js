document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header');
  const nav = document.querySelector('header nav');
  const hamburger = document.querySelector('.hamburger');
  const themeToggle = document.querySelector('.theme-toggle');
  const themeIcon = document.querySelector('.theme-toggle__icon i');
  const themeLabel = document.querySelector('.theme-toggle__label');

  const getTheme = () => document.documentElement.dataset.theme === 'light' ? 'light' : 'dark';

  const applyTheme = (theme) => {
    const isLight = theme === 'light';
    document.documentElement.dataset.theme = theme;

    if (themeToggle) {
      themeToggle.setAttribute('aria-pressed', String(isLight));
      themeToggle.setAttribute('aria-label', isLight ? 'Switch to dark theme' : 'Switch to light theme');
    }

    if (themeIcon) {
      themeIcon.className = isLight ? 'ri-sun-line' : 'ri-moon-line';
    }

    if (themeLabel) {
      themeLabel.textContent = isLight ? 'Day' : 'Night';
    }

    try {
      localStorage.setItem('theme', theme);
    } catch (error) {
      // Ignore storage failures and keep the current session theme.
    }
  };

  if (themeToggle) {
    applyTheme(getTheme());
    themeToggle.addEventListener('click', () => {
      applyTheme(getTheme() === 'light' ? 'dark' : 'light');
    });
  }

  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      nav.classList.toggle('active');
    });
  }

  document.addEventListener('click', (event) => {
    if (header && !header.contains(event.target) && nav) {
      nav.classList.remove('active');
    }
  });
});

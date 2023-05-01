import { useEffect, useState } from 'react';

const getTheme = () => {
  const theme = window.localStorage.getItem('theme');
  return theme || 'dark';
};

const setTheme = (isDarkMode: boolean) => {
  window.localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
};

export const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(getTheme() === 'dark');

  useEffect(() => {
    const html = document.querySelector('html');
    if (html) {
      html.classList.toggle('dark', isDarkMode);
      setTheme(isDarkMode);
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return { isDarkMode, toggleDarkMode };
};

export default useDarkMode;

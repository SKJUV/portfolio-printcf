import { useEffect, useState, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import '../styles/ThemeSwitcher.css';

// Icônes SVG pour le soleil et la lune
const SunIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className="sun-icon"
  >
    <circle cx="12" cy="12" r="5"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
    <line x1="1" y1="12" x2="3" y2="12"></line>
    <line x1="21" y1="12" x2="23" y2="12"></line>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
  </svg>
);

const MoonIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className="moon-icon"
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
);

const ThemeSwitcher = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) return savedTheme === 'dark';
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });
  
  const [isMounted, setIsMounted] = useState(false);
  const buttonRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
    
    // Appliquer le thème initial
    const theme = isDarkMode ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    
    // Écouter les changements de préférence système
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      const newTheme = e.matches ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', newTheme);
      setIsDarkMode(e.matches);
      localStorage.setItem('theme', newTheme);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    
    const theme = isDarkMode ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    // Ajouter une classe pour déclencher l'animation
    if (buttonRef.current) {
      buttonRef.current.classList.add('theme-changing');
      setTimeout(() => {
        if (buttonRef.current) {
          buttonRef.current.classList.remove('theme-changing');
        }
      }, 300);
    }
  }, [isDarkMode, isMounted]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  if (!isMounted) {
    return (
      <button 
        className="theme-switcher" 
        aria-label="Changer de thème"
        ref={buttonRef}
      >
        <div className="icons-wrapper">
          <SunIcon />
        </div>
      </button>
    );
  }

  return (
    <button 
      className="theme-switcher" 
      onClick={toggleTheme}
      aria-label={isDarkMode ? 'Passer en mode clair' : 'Passer en mode sombre'}
      ref={buttonRef}
    >
      <div className="icons-wrapper">
        <SunIcon />
        <MoonIcon />
      </div>
    </button>
  );
};

export default ThemeSwitcher;
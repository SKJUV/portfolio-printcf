import { useState } from 'react';
import '../styles/Header.css';
import ThemeSwitcher from './ThemeSwitcher';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <h1>Mon Entreprise</h1>
      </div>
      
      <div className="header-actions">
        
        <button 
          className={`menu-btn ${isOpen ? 'open' : ''}`} 
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      
      <nav className={`nav ${isOpen ? 'open' : ''}`}>
        <a href="#accueil" onClick={() => setIsOpen(false)}>Accueil</a>
        <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
        <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
        <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
      </nav>
      <ThemeSwitcher />
    </header>
  );
};

export default Header;

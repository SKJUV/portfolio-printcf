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
      <div className="logo-background">
        <div className="logo-text">PRINTCF</div>
      </div>
      
      <div className="header-content">
        <div className="logo">
          <h1>PRINTCF</h1>
        </div>
        
        <div className="header-actions">
          <button 
            className={`menu-btn ${isOpen ? 'open' : ''}`} 
            onClick={toggleMenu}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        
        <nav className={`nav ${isOpen ? 'open' : ''}`}>
          <a href="#accueil" onClick={() => setIsOpen(false)}>Accueil</a>
          <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#projects" onClick={() => setIsOpen(false)}>Projets</a>
          <a href="#about" onClick={() => setIsOpen(false)}>A propos</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
        </nav>
        
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default Header;

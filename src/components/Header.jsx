import { useState } from 'react';
import '../styles/Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">
        <h1>Mon Entreprise</h1>
      </div>
      
      <button 
        className={`menu-btn ${isOpen ? 'open' : ''}`} 
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      
      <nav className={`nav ${isOpen ? 'open' : ''}`}>
        <a href="#accueil" onClick={() => setIsOpen(false)}>Accueil</a>
        <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
        <a href="#projets" onClick={() => setIsOpen(false)}>Projets</a>
        <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
      </nav>
    </header>
  );
};

export default Header;

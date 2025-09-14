import { useState, useEffect, useRef } from 'react';
import '../styles/Header.css';
import ThemeSwitcher from './ThemeSwitcher';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const headerRef = useRef(null);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Ajoute/supprime la classe 'scrolled' en fonction du défilement
      if (currentScrollY > 10) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
      
      // Masque/affiche le header en fonction de la direction de défilement
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Défilement vers le bas
        header.classList.add('hide');
      } else {
        // Défilement vers le haut ou en haut de la page
        header.classList.remove('hide');
      }
      
      setLastScrollY(currentScrollY);
    };

    // Désactive temporairement l'effet sur mobile quand le menu est ouvert
    if (isOpen) {
      header.classList.remove('hide');
      window.removeEventListener('scroll', handleScroll);
    } else {
      window.addEventListener('scroll', handleScroll, { passive: true });
    }

    // Nettoyage
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isOpen, lastScrollY]);

  return (
    <header className="header" ref={headerRef}>
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

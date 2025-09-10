import { useEffect } from 'react';
import '../styles/Hero.css';

const Hero = () => {
  // Fonction pour le défilement fluide
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="accueil" className="hero">
      <div className="hero-content">
        <h1>Créons ensemble quelque chose d'extraordinaire</h1>
        <p>Développeur passionné créant des expériences numériques uniques et performantes</p>
        
        <div className="hero-cta">
          <button 
            onClick={() => scrollToSection('projects')} 
            className="cta-button"
            aria-label="Voir mes projets"
          >
            Voir mes projets
          </button>
          
          <button 
            onClick={() => scrollToSection('contact')}
            className="cta-button secondary"
            aria-label="Me contacter"
          >
            Me contacter
          </button>
        </div>
      </div>
      
      <div 
        className="scroll-indicator" 
        onClick={() => scrollToSection('about')}
        onKeyDown={(e) => e.key === 'Enter' && scrollToSection('about')}
        role="button"
        tabIndex={0}
        aria-label="Faire défiler vers la section suivante"
      >
        Scroll pour découvrir
      </div>
    </section>
  );
};

export default Hero;

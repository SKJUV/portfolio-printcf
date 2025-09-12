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
        <p>Votre partenaire de confiance pour des solutions numériques innovantes et performantes</p>
        
        <div className="hero-cta">
          <button 
            onClick={() => scrollToSection('projects')} 
            className="cta-button"
            aria-label="Voir mes projets"
          >
            Découvrez nos réalisations
          </button>
          
          <button 
            onClick={() => scrollToSection('contact')}
            className="cta-button secondary"
            aria-label="Me contacter"
          >
            Contactez-nous
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

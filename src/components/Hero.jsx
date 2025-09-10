import '../styles/Hero.css';

const Hero = () => {
  return (
    <section id="accueil" className="hero">
      <div className="hero-content">
        <h1>Créons ensemble quelque chose d'extraordinaire</h1>
        <p>Des solutions web sur mesure pour votre entreprise</p>
        <a href="#contact" className="cta-button">
          Contactez-nous
        </a>
      </div>
    </section>
  );
};

export default Hero;

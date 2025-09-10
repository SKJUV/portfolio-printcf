import '../styles/Services.css';

const services = [
  {
    title: 'Développement Web',
    description: 'Création de sites web modernes et réactifs adaptés à tous les appareils.'
  },
  {
    title: 'Design UI/UX',
    description: 'Conception d\'interfaces utilisateur intuitives et esthétiques.'
  },
  {
    title: 'Référencement SEO',
    description: 'Améliorez votre visibilité sur les moteurs de recherche.'
  }
];

const Services = () => {
  return (
    <section id="services" className="services section">
      <h2>Nos Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;

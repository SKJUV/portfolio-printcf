import '../styles/Projects.css';

const projects = [
  {
    title: 'Site E-commerce',
    description: 'Plateforme e-commerce complète avec système de paiement sécurisé et gestion des stocks en temps réel.',
  },
  {
    title: 'Application Mobile',
    description: 'Application mobile cross-plateforme offrant une expérience utilisateur fluide et intuitive.',
  },
  {
    title: 'Portail Entreprise',
    description: 'Solution sur mesure pour la gestion des ressources et la collaboration en entreprise.',
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects section">
      <h2>Nos Réalisations</h2>
      <div className="projects-grid">
        {projects.map((projects, index) => (
          <div key={index} className="project-card">
            <a href="#">
              <div className="project-info">
                <h3>{projects.title}</h3>
                <p>{projects.description}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

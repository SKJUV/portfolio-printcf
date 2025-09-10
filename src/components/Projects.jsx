import '../styles/Projects.css';

const projects = [
  {
    title: 'Projet 1',
    description: 'Description du projet 1. Mettez en avant les technologies utilisées et les fonctionnalités clés.',
  },
  {
    title: 'Projet 2',
    description: 'Description du projet 2. Mettez en avant les technologies utilisées et les fonctionnalités clés.',
  },
  {
    title: 'Projet 3',
    description: 'Description du projet 3. Mettez en avant les technologies utilisées et les fonctionnalités clés.',
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects section">
      <h2>Mes Projets</h2>
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

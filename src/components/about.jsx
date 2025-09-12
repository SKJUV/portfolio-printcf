import React from 'react';
import '../styles/About.css';

const teamMembers = [
  {
    id: 1,
    name: 'Jean Dupont',
    role: 'Développeur Full Stack',
    skills: ['JavaScript', 'React', 'Node.js', 'MongoDB'],
    bio: 'Expert en développement web avec plus de 5 ans d\'expérience dans la création d\'applications modernes et performantes.'
  },
  {
    id: 2,
    name: 'Marie Martin',
    role: 'Designer UI/UX',
    skills: ['Figma', 'Adobe XD', 'UI Design', 'Prototypage'],
    bio: 'Passionnée par la création d\'interfaces intuitives et esthétiques qui améliorent l\'expérience utilisateur.'
  },
  {
    id: 3,
    name: 'Thomas Leroy',
    role: 'Développeur Mobile',
    skills: ['React Native', 'iOS', 'Android', 'Firebase'],
    bio: 'Spécialiste du développement d\'applications mobiles cross-plateformes avec une attention particulière aux performances.'
  },
  {
    id: 4,
    name: 'Sophie Petit',
    role: 'Développeuse Frontend',
    skills: ['Vue.js', 'TypeScript', 'Sass', 'Jest'],
    bio: 'Développeuse frontend passionnée par la création d\'interfaces utilisateur réactives et accessibles.'
  },
  {
    id: 5,
    name: 'Lucas Moreau',
    role: 'DevOps Engineer',
    skills: ['Docker', 'AWS', 'CI/CD', 'Terraform'],
    bio: 'Expert en déploiement et infrastructure cloud, avec une solide expérience dans l\'automatisation des processus de développement.'
  }
];

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">Notre Équipe</h2>
        <div className="team-grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-member">
              <div className="member-image">
                <div className="image-placeholder"></div>
              </div>
              <div className="member-info">
                <h3>{member.name}</h3>
                <span className="member-role">{member.role}</span>
                <p className="member-bio">{member.bio}</p>
                <div className="member-skills">
                  {member.skills.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
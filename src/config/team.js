// Import des images de profil
import FreddyChoudja from '../assets/team/Freddy-Choudja.jpg';
import SinengJuvenal from '../assets/team/Sineng-Juvenal.jpg';
import DouanlaJimmy from '../assets/team/Douanla-Jimmy.jpg';
import BoukalaFrank from '../assets/team/Boukala-Frank.jpg';
import MbargaWilliam from '../assets/team/Mbarga-William.jpg';

// Configuration des membres de l'équipe avec leurs informations et images
const teamMembers = [
  {
    id: 1,
    name: 'Freddy Choudja',
    role: 'Développeur Full Stack',
    skills: ['JavaScript', 'React', 'Node.js', 'MongoDB'],
    bio: 'Expert en développement web avec une solide expérience dans la création d\'applications modernes et performantes.',
    image: FreddyChoudja,
    alt: 'Photo de profil de Freddy Choudja, Développeur Full Stack'
  },
  {
    id: 2,
    name: 'Sineng Juvenal',
    role: 'Développeur Full Stack & Data Science',
    skills: [
      'HTML/CSS/JavaScript',
      'React + Vite',
      'Node.js/Express.js',
      'Python/Data Science',
      'Machine Learning',
      'Docker/CI-CD'
    ],
    bio: 'Développeur Full Stack spécialisé en développement web et data science. Expérience en création d\'applications modernes, manipulation de données et apprentissage automatique. Passionné par les technologies émergentes et les solutions innovantes.',
    image: SinengJuvenal,
    alt: 'Photo de profil de Sineng Juvenal, Développeur Full Stack & Data Science'
  },
  {
    id: 3,
    name: 'Douanla Jimmy',
    role: 'Développeur Mobile',
    skills: ['React Native', 'iOS', 'Android', 'Firebase'],
    bio: 'Spécialiste du développement d\'applications mobiles cross-plateformes avec une attention particulière aux performances.',
    image: DouanlaJimmy,
    alt: 'Photo de profil de Douanla Jimmy, Développeur Mobile'
  },
  {
    id: 4,
    name: 'Boukala Frank',
    role: 'Développeur Frontend',
    skills: ['Vue.js', 'TypeScript', 'Sass', 'Jest'],
    bio: 'Développeur frontend passionné par la création d\'interfaces utilisateur réactives et accessibles.',
    image: BoukalaFrank,
    alt: 'Photo de profil de Boukala Frank, Développeur Frontend'
  },
  {
    id: 5,
    name: 'Mbarga William',
    role: 'DevOps Engineer',
    skills: ['Docker', 'AWS', 'CI/CD', 'Terraform'],
    bio: 'Expert en déploiement et infrastructure cloud, avec une solide expérience dans l\'automatisation des processus de développement.',
    image: MbargaWilliam,
    alt: 'Photo de profil de Mbarga William, DevOps Engineer'
  }
];

export default teamMembers;

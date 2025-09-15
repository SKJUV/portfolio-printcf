// Import des images de profil
import FreddyChoudja from '../assets/team/Freddy-Choudja.jpg';
import SinengJuvenal from '../assets/team/Sineng-Juvenal.jpg';
import DouanlaJimmy from '../assets/team/Douanla-Jimmy.png';
import BoukalaFrank from '../assets/team/Boukala-Frank.png';
import MbargaWilliam from '../assets/team/Mbarga-William.jpg';

// Configuration des membres de l'équipe avec leurs informations et images
const teamMembers = [
  {
    id: 1,
    name: 'Freddy Choudja',
    role: 'Expert en Marketing Digital & Graphisme',
    skills: ['Stratégie digitale', 'Réseaux sociaux', 'SEO/SEA', 'Email Marketing', 'Publicité en ligne', 'Analyse de données', 'Adobe Creative Suite', 'Branding', 'Stratégie de contenu'],
    bio: 'Expert en marketing digital et graphisme avec une solide expérience dans la création de campagnes digitales performantes. Spécialisé dans le développement de stratégies marketing innovantes, l\'analyse de données et la création de contenu engageant. Passionné par les dernières tendances du digital et la création d\'identités de marque fortes.',
    image: FreddyChoudja,
    alt: 'Photo de profil de Freddy Choudja, Community Manager & Graphiste'
  },
  {
    id: 2,
    name: 'Sineng Juvenal',
    role: 'Développeur Full Stack & Data Science',
    skills: [
      'Python/Data Science',
      'Machine Learning',
      'Docker/CI-CD',
      'Sécurité des applications',
      'OWASP Top 10',
      'Chiffrement des données',
      'Tests de pénétration'
    ],
    bio: 'Développeur Full Stack spécialisé en développement web et data science avec une expertise en cybersécurité. Expérience en création d\'applications sécurisées, analyse de vulnérabilités et mise en place de bonnes pratiques de sécurité. Passionné par les technologies émergentes et la protection des données sensibles.',
    image: SinengJuvenal,
    alt: 'Photo de profil de Sineng Juvenal, Développeur Full Stack & Data Science'
  },
  {
    id: 3,
    name: 'EL SONK JIMMY',
    role: 'Développeur Full Stack & Mobile',
    skills: ['React Native CLI', 'Node.js/Express', 'PostgreSQL', 'Supabase', 'API Integration', 'AWS', 'Docker/Kubernetes'],
    bio: 'Développeur Full Stack spécialisé dans les applications mobiles et web. Expérience en création de marketplaces, gestion de bases de données, et mise en place de solutions cloud. Maîtrise des bonnes pratiques de sécurité et d\'architecture logicielle.',
    image: DouanlaJimmy,
    alt: 'Photo de profil de EL SONK JIMMY, Développeur Full Stack & Mobile'
  },
  {
    id: 4,
    name: 'Boukala Frank',
    role: 'Designer UI/UX Senior & Sécurité',
    skills: ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator', 'Design System', 'Prototypage', 'User Research', 'Sécurité des interfaces', 'RGPD', 'Accessibilité Web (WCAG)'],
    bio: 'Designer UI/UX expérimenté avec une expertise en sécurité des interfaces et protection des données. Spécialisé dans la création d\'interfaces à la fois élégantes et sécurisées, en conformité avec les normes RGPD et d\'accessibilité. Expert en conception centrée utilisateur et en évaluation des risques liés à l\'expérience utilisateur.',
    image: BoukalaFrank,
    alt: 'Photo de profil de Boukala Frank, Designer UI/UX Senior'
  },
  {
    id: 5,
    name: 'Mbarga William',
    role: 'Développeur Full Stack',
    skills: ['JavaScript/TypeScript', 'React/Next.js', 'Node.js/NestJS', 'PostgreSQL/MongoDB', 'Docker', 'AWS', 'CI/CD', 'API GraphQL'],
    bio: 'Développeur Full Stack expérimenté avec une expertise dans la conception et le déploiement d\'applications web et mobiles évolutives. Passionné par les architectures microservices, les bonnes pratiques de développement et l\'optimisation des performances. Toujours à l\'affût des dernières technologies pour fournir des solutions innovantes et robustes.',
    image: MbargaWilliam,
    alt: 'Photo de profil de Mbarga William, Développeur Full Stack'
  }
];

export default teamMembers;

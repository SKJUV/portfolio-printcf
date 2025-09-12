import '../styles/Footer.css';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub />,
      url: 'https://github.com/votrecompte',
      ariaLabel: 'Visiter notre GitHub'
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin />,
      url: 'https://linkedin.com/in/votreprofil',
      ariaLabel: 'Nous suivre sur LinkedIn'
    },
    {
      name: 'Twitter',
      icon: <FaTwitter />,
      url: 'https://twitter.com/votrecompte',
      ariaLabel: 'Nous suivre sur Twitter'
    },
    {
      name: 'Instagram',
      icon: <FaInstagram />,
      url: 'https://instagram.com/votrecompte',
      ariaLabel: 'Nous suivre sur Instagram'
    },
    {
      name: 'Email',
      icon: <FaEnvelope />,
      url: 'mailto:contact@votresite.com',
      ariaLabel: 'Nous envoyer un email'
    }
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {currentYear} PrintCF. Tous droits réservés.</p>
        <div className="social-links">
          {socialLinks.map((link, index) => (
            <a 
              key={index}
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={link.ariaLabel}
              className="social-link"
              data-tooltip={link.name}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

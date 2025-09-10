import { useState } from 'react';
import '../styles/Contact.css'; // Assurez-vous que le chemin est correct

const Contact = () => {
  const [formData, setFormData] = useState({
    prenom: '', // Ajout du prénom
    nom: '',    // Ajout du nom
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulaire soumis :', formData);
    alert('Message envoyé avec succès !');
    // Vider le formulaire après envoi
    setFormData({ prenom: '', nom: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact section">
      <h2>Contactez-nous</h2>
      <form onSubmit={handleSubmit} className="contact-form" noValidate>
        
        {/* Ligne pour Prénom et Nom côte à côte sur desktop */}
        <div className="form-row">
          <div className="form-group">
            <input
              type="text"
              id="prenom"
              name="prenom"
              value={formData.prenom}
              onChange={handleChange}
              placeholder=" " /* Important pour l'effet CSS */
              required
            />
            <label htmlFor="prenom">Prénom</label>
          </div>
          <div className="form-group">
            <input
              type="text"
              id="nom"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              placeholder=" " /* Important pour l'effet CSS */
              required
            />
            <label htmlFor="nom">Nom</label>
          </div>
        </div>

        <div className="form-group">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder=" " /* Important pour l'effet CSS */
            required
          />
          <label htmlFor="email">Adresse Email</label>
        </div>
        
        <div className="form-group">
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder=" " /* Important pour l'effet CSS */
            required
          ></textarea>
          <label htmlFor="message">Votre Message</label>
        </div>
        
        <button type="submit" className="cta-button">
          Envoyer le Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
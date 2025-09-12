// Script pour générer des images de profil par défaut
// Ces images sont des placeholders et devraient être remplacées par de vraies photos
// Pour l'instant, nous utilisons des images générées via des services en ligne

/**
 * Fonction pour générer une URL d'image de profil par défaut
 * @param {string} name - Le nom du membre de l'équipe
 * @param {string} role - Le rôle du membre de l'équipe
 * @returns {string} URL de l'image de profil
 */
const generateProfileImage = (name, role) => {
  // Utilisation d'un service d'images de profil par défaut
  // Remplacez cette URL par vos propres images ou utilisez un service comme UI Faces
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random&color=fff&size=400`;
};

export default generateProfileImage;

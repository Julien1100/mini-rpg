
// Données du personnage
const personnage = {
  nom: "Votre Nom de Personnage",
  niveau: 1,
  sante: 100,
  force: 15,
  experience: 0,
  inventaire: {
    armeEquipee: null,
    armureEquipee: null
  }
};

// Fonction pour afficher les informations du personnage
function afficherInformationsPersonnage() {
  document.getElementById("characterName").innerText = personnage.nom;
  document.getElementById("characterLevel").innerText = personnage.niveau;
  document.getElementById("characterHealth").innerText = personnage.sante;
  document.getElementById("characterStrength").innerText = personnage.force;
  document.getElementById("characterExperience").innerText = personnage.experience;
}

// Fonction pour attaquer
function attaquer() {
  // Implémentez la logique d'attaque ici
  console.log(personnage.nom + " attaque !");
}

// Fonction pour équiper une arme
function equiperArme() {
  // Implémentez la logique d'équipement d'arme ici
  console.log(personnage.nom + " équipe une arme !");
}

// Fonction pour équiper une armure
function equiperArmure() {
  // Implémentez la logique d'équipement d'armure ici
  console.log(personnage.nom + " équipe une armure !");
}

// Fonction pour changer le nom du personnage
function changerNom() {
  const nouveauNom = document.getElementById("newCharacterName").value;
  if (nouveauNom.trim() !== "") {
    personnage.nom = nouveauNom;
    afficherInformationsPersonnage();
  } else {
    alert("Veuillez entrer un nouveau nom valide.");
  }
}

// Appel de la fonction pour afficher les informations du personnage au chargement de la page
window.onload = afficherInformationsPersonnage;

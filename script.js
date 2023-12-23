// Données du personnage
const personnage = {
  nom: "Votre Nom de Personnage",
  niveau: 1,
  sante: 100,
  force: 15,
  experience: 0,
  inventaire: {
    armeEquipee: null,
    armureEquipee: null,
  },
};

const adversaire = {
  nom: "Grand méchant",
  niveau: 1,
  pointDeVie: 100,
  force: 3,
};

// Fonction pour afficher les informations du personnage
function afficherInformationsPersonnage() {
  document.getElementById("characterName").innerText = personnage.nom;
  document.getElementById("characterLevel").innerText = personnage.niveau;
  document.getElementById("characterHealth").innerText = personnage.sante;
  document.getElementById("characterStrength").innerText = personnage.force;
  document.getElementById("characterExperience").innerText =
    personnage.experience;
}

// Fonction pour attaquer
function attaquer() {
  // Implémentez la logique d'attaque ici

  if (personnage.inventaire.armeEquipee === null) {
    console.log(`${personnage.nom} ne peut pas attaquer sans arme !`);
  } else if (adversaire.pointDeVie >= 0) {
    const degats = Math.floor(Math.random() * personnage.force) + 1;
    console.log(
      `${personnage.nom} attaque ${adversaire.nom} avec ${personnage.inventaire.armeEquipee} et lui inflige ${degats} points de dégats.`
    );
    adversaire.pointDeVie -= degats;
    if (adversaire.pointDeVie <= 0) {
      console.log(`${adversaire.nom} est mort !`);
      console.log(`${personnage.nom} a gagné ce duel !`);
    } else
      console.log(`Il reste ${adversaire.pointDeVie} PV à ${adversaire.nom}.`);
  }
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

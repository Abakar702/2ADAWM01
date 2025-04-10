import React from "react";
import "../styles/Cards.css";

const Cards = () => {
  return (
    <div className="container py-5 m-auto">
      <h2 className="text-center mb-5">Témoignages de nos étudiants</h2>

      <div class="card-group gap-4">
        <div class="card">
          <img
            src="./images/photo (4).jpg"
            class="card-img-top"
            alt="Étudiant en informatique"
          />
          <div class="card-body">
            <h5 class="card-title">Ahmat Mahamat</h5>
            <p class="card-text">
              "L'ENASTIC m'a offert une formation solide en réseaux
              informatiques. Aujourd'hui, je travaille dans une grande
              entreprise grâce aux compétences acquises ici."
            </p>
            <p class="card-text">
              <small class="text-body-secondary">Promotion 2022</small>
            </p>
          </div>
        </div>
        <div class="card">
          <img
            src="./images/photo (5).jpg"
            class="card-img-top"
            alt="Étudiante en développement"
          />
          <div class="card-body">
            <h5 class="card-title">Fatimé Hassan</h5>
            <p class="card-text">
              "Les projets pratiques et les enseignants experts m'ont préparée
              au monde professionnel. Je recommande vivement cette école !"
            </p>
            <p class="card-text">
              <small class="text-body-secondary">Promotion 2023</small>
            </p>
          </div>
        </div>
        <div class="card">
          <img
            src="./images/photo (1).jpg"
            class="card-img-top"
            alt="Étudiant en cybersécurité"
          />
          <div class="card-body">
            <h5 class="card-title">Mahamat Ali</h5>
            <p class="card-text">
              "Grâce au programme intensif en cybersécurité, j'ai pu décrocher
              un stage international. L'ENASTIC ouvre vraiment des portes !"
            </p>
            <p class="card-text">
              <small class="text-body-secondary">Promotion 2021</small>
            </p>
          </div>
        </div>
      </div>

      <div class="card-group gap-4 mt-4">
        <div class="card">
          <img
            src="./images/photo (1).jpg"
            class="card-img-top"
            alt="Étudiante en développement web"
          />
          <div class="card-body">
            <h5 class="card-title">Aïcha Oumar</h5>
            <p class="card-text">
              "L'approche pédagogique moderne et les laboratoires bien équipés
              font toute la différence. Je me sens prête pour le marché du
              travail."
            </p>
            <p class="card-text">
              <small class="text-body-secondary">Promotion 2023</small>
            </p>
          </div>
        </div>
        <div class="card">
          <img
            src="./images/photo (2).jpg"
            class="card-img-top"
            alt="Étudiant en intelligence artificielle"
          />
          <div class="card-body">
            <h5 class="card-title">Ibrahim Abdoulaye</h5>
            <p class="card-text">
              "La formation en IA m'a permis de travailler sur des projets
              concrets. Les partenariats de l'école avec les entreprises sont un
              vrai plus."
            </p>
            <p class="card-text">
              <small class="text-body-secondary">Promotion 2022</small>
            </p>
          </div>
        </div>
        <div class="card">
          <img
            src="./images/photo (3).jpg"
            class="card-img-top"
            alt="Étudiante en administration réseau"
          />
          <div class="card-body">
            <h5 class="card-title">Zara Mahamat</h5>
            <p class="card-text">
              "Venant d'un autre domaine, j'ai apprécié l'accompagnement
              personnalisé qui m'a permis de me reconvertir avec succès dans les
              TIC."
            </p>
            <p class="card-text">
              <small class="text-body-secondary">Promotion 2021</small>
            </p>
          </div>
        </div>
      </div>

      <div class="card-group gap-4 mt-4">
        <div class="card">
          <img
            src="./images/photo (4).jpg"
            class="card-img-top"
            alt="Étudiant en cloud computing"
          />
          <div class="card-body">
            <h5 class="card-title">Moussa Daoud</h5>
            <p class="card-text">
              "Les certifications professionnelles incluses dans la formation
              sont un atout majeur pour notre employabilité."
            </p>
            <p class="card-text">
              <small class="text-body-secondary">Promotion 2023</small>
            </p>
          </div>
        </div>
        <div class="card">
          <img
            src="./images/photo (5).jpg"
            class="card-img-top"
            alt="Étudiante en data science"
          />
          <div class="card-body">
            <h5 class="card-title">Amina Barka</h5>
            <p class="card-text">
              "L'ambiance collaborative entre étudiants et enseignants rend
              l'apprentissage à la fois efficace et agréable."
            </p>
            <p class="card-text">
              <small class="text-body-secondary">Promotion 2022</small>
            </p>
          </div>
        </div>
        <div class="card">
          <img
            src="./images/photo (5).jpg"
            class="card-img-top"
            alt="Étudiant entrepreneur"
          />
          <div class="card-body">
            <h5 class="card-title">Haroun Adoum</h5>
            <p class="card-text">
              "Le programme d'entrepreneuriat tech m'a donné les outils pour
              lancer ma startup tout juste diplômé."
            </p>
            <p class="card-text">
              <small class="text-body-secondary">Promotion 2021</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;

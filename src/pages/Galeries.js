import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Gallery from "../components/Gallery";
import "../styles/Galeries.css"; // Importez le fichier CSS personnalisé

const Galeries = () => {
  return (
    <div className="gallery">
      <div>
        <div id="carouselExampleDark" className="carousel carousel-dark slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <img
                src="WhatsApp Image 2025-04-10 à 09.47.07_8b6975f5.jpg"
                className="d-block w-100"
                alt="Concours d'entrée à l'ENASTIC"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Concours d'entrée à l'ENASTIC</h5>
                <p>
                  Les épreuves écrites du concours d'entrée en 1ère année de
                  l'ENASTIC ont débuté ce 22 août 2024. Des centaines de
                  candidats, dont de nombreuses jeunes femmes, se sont
                  rassemblés pour tenter leur chance et intégrer cette
                  prestigieuse école.
                </p>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img
                src="photo (3).jpg"
                className="d-block w-100"
                alt="Nomination du Directeur Général"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Nomination du Directeur Général</h5>
                <p>
                  Dr HAGGAR BACHAR SALIM a été nommé Directeur général de
                  l'ENASTIC le 03 mars 2025, en remplacement de Dr BAKHIT AMINE,
                  appelé à d'autres fonctions.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="photo (5).jpg"
                className="d-block w-100"
                alt="Atelier de Réflexion"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Atelier de Réflexion</h5>
                <p>
                  L'ENASTIC a organisé un atelier de réflexion sur les
                  perspectives d'évolution en partenariat avec le ministère des
                  Postes et de l'Économie numérique et le ministère de
                  l'Enseignement supérieur.
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <br />
        <br />
      </div>
      <div>
        <Gallery />
      </div>
    </div>
  );
};

export default Galeries;

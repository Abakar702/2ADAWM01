import React from "react";
import "../styles/Gallery.css";

const Gallery = () => {
  return (
    <div className="container py-5 m-auto">
      <h2 className="text-center mb-5">Galerie de l'ENASTIC du Tchad</h2>

      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4">
            <img
              src="./imagesgal/photo (20).jfif"
              className="card-img-top"
              alt="Visite du Président"
            />
            <div className="card-body">
              <h5 className="card-title">Visite du Président</h5>
              <p className="card-text">
                Le Président de la République a visité l'ENASTIC pour inaugurer
                les nouveaux bâtiments.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <img
              src="./imagesgal/photo (4).jfif"
              className="card-img-top"
              alt="Réunion avec le Ministre"
            />
            <div className="card-body">
              <h5 className="card-title">Réunion avec le Ministre</h5>
              <p className="card-text">
                Le Ministre de l'Enseignement Supérieur a présidé une réunion
                stratégique à l'ENASTIC.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <img
              src="./imagesgal/photo (9).jpg"
              className="card-img-top"
              alt="Atelier de Réflexion"
            />
            <div className="card-body">
              <h5 className="card-title">Atelier de Réflexion</h5>
              <p className="card-text">
                L'ENASTIC a organisé un atelier de réflexion sur les
                perspectives d'évolution.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4">
            <img
              src="./imagesgal/photo (10).jpg"
              className="card-img-top"
              alt="Concours d'Entrée"
            />
            <div className="card-body">
              <h5 className="card-title">Concours d'Entrée</h5>
              <p className="card-text">
                Les épreuves écrites du concours d'entrée en 1ère année ont
                débuté ce 22 août 2024.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <img
              src="./imagesgal/photo (13).jpg"
              className="card-img-top"
              alt="Nomination du Directeur Général"
            />
            <div className="card-body">
              <h5 className="card-title">Nomination du Directeur Général</h5>
              <p className="card-text">
                Dr HAGGAR BACHAR SALIM a été nommé Directeur général de
                l'ENASTIC le 03 mars 2025.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <img
              src="./imagesgal/photo (12).jpg"
              className="card-img-top"
              alt="Ouverture de l'Antenne d'Amdjarass"
            />
            <div className="card-body">
              <h5 className="card-title">Ouverture de l'Antenne d'Amdjarass</h5>
              <p className="card-text">
                Une antenne de l'ENASTIC a été ouverte à Amdjarass pour
                renforcer la formation sur place.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

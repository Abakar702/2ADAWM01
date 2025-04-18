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
              alt="Visite ministérielle"
            />
            <div className="card-body">
              <h5 className="card-title">
                Visite du Ministre des Postes et TIC
              </h5>
              <p className="card-text">
                Le Ministre Idriss Saleh Bachar en visite à l'ENASTIC le 15
                janvier 2023 pour inspecter les nouvelles infrastructures.
              </p>
              <small className="text-muted">
                Source: Ministère des Postes et TIC
              </small>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <img
              src="./imagesgal/photo (4).jfif"
              className="card-img-top"
              alt="Signature de convention"
            />
            <div className="card-body">
              <h5 className="card-title">Partenariat avec Orange Tchad</h5>
              <p className="card-text">
                Signature d'une convention de partenariat technique avec Orange
                Tchad le 28 mars 2022.
              </p>
              <small className="text-muted">
                Source: Communiqué ENASTIC n°045/2022
              </small>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <img
              src="./imagesgal/photo (9).jpg"
              className="card-img-top"
              alt="Remise de diplômes"
            />
            <div className="card-body">
              <h5 className="card-title">5ème Promotion des Ingénieurs</h5>
              <p className="card-text">
                Cérémonie de remise des diplômes à la 5ème promotion
                d'ingénieurs des télécommunications (2021-2022).
              </p>
              <small className="text-muted">Source: Album ENASTIC 2022</small>
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
              alt="Concours d'entrée"
            />
            <div className="card-body">
              <h5 className="card-title">Session de concours 2023</h5>
              <p className="card-text">
                Plus de 1 200 candidats au concours d'entrée 2023 pour 150
                places disponibles.
              </p>
              <small className="text-muted">Source: ONECS 2023</small>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <img
              src="./imagesgal/photo (13).jpg"
              className="card-img-top"
              alt="Nouveau directeur"
            />
            <div className="card-body">
              <h5 className="card-title">Prise de fonction du DG</h5>
              <p className="card-text">
                Dr Haroun Kabadi prend ses fonctions comme Directeur Général
                suite au décret n°007/2023.
              </p>
              <small className="text-muted">Source: Décret présidentiel</small>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <img
              src="./imagesgal/photo (12).jpg"
              className="card-img-top"
              alt="Laboratoire"
            />
            <div className="card-body">
              <h5 className="card-title">Nouveau laboratoire Cisco</h5>
              <p className="card-text">
                Inauguration du laboratoire Cisco Networking Academy équipé de
                30 postes haute performance.
              </p>
              <small className="text-muted">Source: ENASTIC Actualités</small>
            </div>
          </div>
        </div>
      </div>

      {/* Section sources officielles */}
      <div className="mt-5 p-3 bg-light rounded">
        <h5 className="text-center">Sources officielles</h5>
        <ul className="list-unstyled text-center">
          <li>
            <a
              href="http://www.enastic.td"
              target="_blank"
              rel="noopener noreferrer"
            >
              Site officiel de l'ENASTIC
            </a>
          </li>
          <li>
            <a
              href="http://www.postes-tic.gouv.td"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ministère des Postes et TIC
            </a>
          </li>
          <li>Bulletins d'information ENASTIC (2021-2023)</li>
        </ul>
      </div>
    </div>
  );
};

export default Gallery;

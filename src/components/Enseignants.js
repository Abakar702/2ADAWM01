import React from "react";
import { useNavigate } from "react-router-dom";

const Enseignants = () => {
  const navigate = useNavigate();

  const handlePostulerClick = () => {
    navigate("/postuler-enseignant");
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center m-5">Nos Experts Pédagogiques</h1>
      <p className="text-center mb-5 fs-5">
        Découvrez les passionnés qui façonnent l'avenir des TIC au Tchad
      </p>

      <div className="row row-cols-1 row-cols-md-2 g-4">
        {/* Enseignant 1 */}
        <div className="col">
          <div className="card h-100 shadow-sm">
            <img
              src="./imgEns/ens (1).jfif"
              className="card-img-top"
              alt="Dr. Mahamat K. - Expert en Cybersécurité"
            />
            <div className="card-body">
              <h5 className="card-title">Dr. Mahamat K.</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                Responsable du Département Sécurité Informatique
              </h6>
              <p className="card-text">
                "Former la prochaine génération de cyberdéfenseurs est ma
                mission. À l'ENASTIC, nous combinons théorie avancée et
                simulations réelles pour préparer aux défis actuels."
              </p>
              <div className="mt-auto">
                <span className="badge bg-primary me-2">Certifié CISSP</span>
                <span className="badge bg-success">15 ans d'expérience</span>
              </div>
            </div>
          </div>
        </div>

        {/* Enseignant 2 */}
        <div className="col">
          <div className="card h-100 shadow-sm">
            <img
              src="./imgEns/ens (2).jfif"
              className="card-img-top"
              alt="Mme Aïcha D. - Spécialiste Cloud Computing"
            />
            <div className="card-body">
              <h5 className="card-title">Mme Aïcha D.</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                Responsable de la Formation Cloud & DevOps
              </h6>
              <p className="card-text">
                "Le cloud révolutionne l'Afrique. J'enseigne comment maîtriser
                AWS et Azure tout en développant des solutions adaptées à notre
                contexte local."
              </p>
              <div className="mt-auto">
                <span className="badge bg-primary me-2">AWS Architect</span>
                <span className="badge bg-success">Ancienne de Microsoft</span>
              </div>
            </div>
          </div>
        </div>

        {/* Enseignant 3 */}
        <div className="col">
          <div className="card h-100 shadow-sm">
            <img
              src="./imgEns/ens (3).jfif"
              className="card-img-top"
              alt="Prof. Haroun T. - Pionnier de l'IA en Afrique"
            />
            <div className="card-body">
              <h5 className="card-title">Prof. Haroun T.</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                Directeur du Labo d'Intelligence Artificielle
              </h6>
              <p className="card-text">
                "L'IA doit servir le développement africain. Nos étudiants
                travaillent sur des projets concrets comme l'analyse prédictive
                pour l'agriculture ou la santé."
              </p>
              <div className="mt-auto">
                <span className="badge bg-primary me-2">
                  PhD en Machine Learning
                </span>
                <span className="badge bg-success">Lauréat AUF</span>
              </div>
            </div>
          </div>
        </div>

        {/* Enseignant 4 */}
        <div className="col">
          <div className="card h-100 shadow-sm">
            <img
              src="./imgEns/ens (4).jfif"
              className="card-img-top"
              alt="Ing. Zara M. - Experte en Réseaux"
            />
            <div className="card-body">
              <h5 className="card-title">Ing. Zara M.</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                Chef de Département Infrastructure Réseau
              </h6>
              <p className="card-text">
                "Un réseau bien conçu est la colonne vertébrale du numérique.
                J'initie les étudiants aux dernières technologies Cisco tout en
                valorisant les solutions africaines."
              </p>
              <div className="mt-auto">
                <span className="badge bg-primary me-2">CCIE</span>
                <span className="badge bg-success">Mentor Femmes Tech</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section CTA */}
      <div className="text-center mt-5 py-4 bg-light rounded-3">
        <h3 className="mb-3">Rejoignez Notre Équipe Pédagogique</h3>
        <p className="lead mx-auto" style={{ maxWidth: "600px" }}>
          Vous êtes expert en TIC et passionné par l'enseignement ? Contribuez à
          former les talents qui transformeront le Tchad numérique.
        </p>
        <button
          className="btn btn-primary btn-lg mt-3"
          onClick={handlePostulerClick}
        >
          Postuler comme Enseignant
        </button>
      </div>
    </div>
  );
};

export default Enseignants;

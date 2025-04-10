import React from 'react';

const EnSavoirPlus = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">En savoir plus sur l'ENASTIC</h1>

      <section className="about-enastic mb-5">
        <h2 className="mb-3">À propos de l'ENASTIC</h2>
        <p>
          L'École nationale supérieure des technologies de l'Information et de la communication (ENASTIC) est un établissement public d'enseignement, de recherche, d’innovation et de formations supérieures dans les domaines des communications électroniques. Elle est créée par ordonnance numéro 005/PR/2015 du 02 mars 2015 et est dotée de la personnalité juridique et de l'autonomie financière.
        </p>
        <p>
          L'ENASTIC est administrée par un Conseil d’Administration, dirigée par un Directeur Général et placée sous la tutelle du Ministère des Postes et des Nouvelles Technologies de l’Information. Le Ministère de l’Enseignement Supérieur, de la Recherche et de l’Innovation assure l’organisation académique et pédagogique. Son siège est à N’Djamena, la capitale tchadienne.
        </p>
      </section>

      <section className="missions mb-5">
        <h2 className="mb-3">Missions de l'ENASTIC</h2>
        <ul className="list-group">
          <li className="list-group-item">Assurer la formation initiale et continue des cadres des secteurs publics et privés dans les domaines des technologies de l’information et de la communication.</li>
          <li className="list-group-item">Promouvoir la recherche scientifique et technologique ainsi que la valorisation des résultats et la diffusion de la culture et de l’information scientifique.</li>
          <li className="list-group-item">Rechercher et développer les moyens de communications en place au Tchad pour améliorer le développement socio-économique du pays.</li>
        </ul>
      </section>

      <section className="programs mb-5">
        <h2 className="mb-3">Programmes et Formations</h2>
        <p>
          L'ENASTIC propose divers programmes de formation, notamment :
        </p>
        <div className="accordion" id="programsAccordion">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Licence Multimédia
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#programsAccordion">
              <div className="accordion-body">
                Prépare aux métiers de la communication numérique, incluant le web design, le développement web et mobile, l'illustration et l'infographie 2D et 3D, ainsi que la production audio et vidéo.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Licence en Cybersécurité
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#programsAccordion">
              <div className="accordion-body">
                Formation en sécurité informatique pour la protection et la transmission des données.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Master en Télécommunication et Systèmes Embarqués
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#programsAccordion">
              <div className="accordion-body">
                Formation avancée dans les domaines des télécommunications et des systèmes embarqués.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="perspectives mb-5">
        <h2 className="mb-3">Perspectives d'Évolution</h2>
        <p>
          L'ENASTIC organise régulièrement des ateliers de réflexion sur les perspectives d'évolution en partenariat avec le ministère des Postes et de l’Économie numérique et le ministère de l’Enseignement supérieur. Ces initiatives visent à adapter l'école aux défis contemporains et à renforcer son rôle dans le développement du Tchad.
        </p>
        <p>
          L'ENASTIC a également ouvert un cycle de master en télécommunication et systèmes embarqués, et continue de développer de nouveaux programmes pour répondre aux besoins du marché et aux avancées technologiques.
        </p>
      </section>

      <section className="contact mb-5">
        <h2 className="mb-3">Contact</h2>
        <p>
          Pour plus d'informations, vous pouvez visiter le site officiel de l'ENASTIC : <a href="https://www.enastic.td" target="_blank" rel="noopener noreferrer">www.enastic.td</a>
        </p>
        <p>
          Adresse : N’Djamena, Tchad
        </p>
        <p>
          Directeur Général : Dr HAGGAR BACHAR SALIM
        </p>
      </section>

      <section className="news mb-5">
        <h2 className="mb-3">Actualités Récentes</h2>
        <ul className="list-group">
          <li className="list-group-item">Par décret N°0118/PR/PM/MTENDA/2025 du 03 mars 2025, Dr HAGGAR BACHAR SALIM est nommé Directeur général de l'ENASTIC en remplacement de Dr BAKHIT AMINE, appelé à d'autres fonctions.</li>
          <li className="list-group-item">Les épreuves écrites du concours d'entrée en 1ère année de l'ENASTIC ont débuté ce 22 août 2024.</li>
        </ul>
      </section>
    </div>
  );
};

export default EnSavoirPlus;

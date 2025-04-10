import React, { useState } from "react";

const PostulerEnseignant = () => {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    specialite: "",
    diplome: "",
    experience: "",
    motivation: "",
    cv: null,
  });

  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulation d'envoi réussi
    console.log("Données soumises:", formData);
    setSubmitStatus("success");
    // Ici vous ajouteriez votre logique d'envoi réel (API, etc.)
  };

  const specialites = [
    "Informatique Fondamentale",
    "Développement Web/Mobile",
    "Réseaux et Télécoms",
    "Cybersécurité",
    "Cloud Computing",
    "Intelligence Artificielle",
    "Data Science",
    "Systèmes Embarqués",
    "Administration Système",
    "Autre",
  ];

  return (
    <div className="container py-5">
      {/* Header */}
      <div className="row mb-5">
        <div className="col-lg-8 mx-auto text-center">
          <h1 className="display-5 fw-bold text-primary">
            Rejoignez Notre Équipe Pédagogique
          </h1>
          <p className="lead">
            Contribuez à former la prochaine génération d'experts en TIC au
            Tchad
          </p>
          <div className="d-flex justify-content-center gap-3">
            <span className="badge bg-light text-dark">
              <i className="bi bi-people-fill me-2"></i>Équipe dynamique
            </span>
            <span className="badge bg-light text-dark">
              <i className="bi bi-book me-2"></i>Environnement stimulant
            </span>
            <span className="badge bg-light text-dark">
              <i className="bi bi-gear me-2"></i>Matériel de pointe
            </span>
          </div>
        </div>
      </div>

      {/* Formulaire */}
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow-sm border-0">
            <div className="card-body p-5">
              {submitStatus === "success" ? (
                <div className="text-center py-5">
                  <div className="mb-4">
                    <i
                      className="bi bi-check-circle-fill text-success"
                      style={{ fontSize: "4rem" }}
                    ></i>
                  </div>
                  <h3 className="fw-bold mb-3">Candidature Envoyée!</h3>
                  <p className="lead">
                    Nous avons bien reçu votre candidature. Notre équipe
                    l'examinera et vous contactera sous peu.
                  </p>
                  <button
                    className="btn btn-primary mt-3"
                    onClick={() => setSubmitStatus(null)}
                  >
                    Nouvelle candidature
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h4 className="mb-4 text-primary">
                    Informations Personnelles
                  </h4>
                  <div className="row g-3 mb-4">
                    <div className="col-md-6">
                      <label htmlFor="nom" className="form-label">
                        Nom*
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="nom"
                        name="nom"
                        required
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="prenom" className="form-label">
                        Prénom*
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="prenom"
                        name="prenom"
                        required
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="row g-3 mb-4">
                    <div className="col-md-6">
                      <label htmlFor="email" className="form-label">
                        Email*
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        required
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="telephone" className="form-label">
                        Téléphone*
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        id="telephone"
                        name="telephone"
                        required
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <h4 className="mb-4 mt-5 text-primary">
                    Qualifications Professionnelles
                  </h4>
                  <div className="mb-4">
                    <label htmlFor="specialite" className="form-label">
                      Spécialité Principale*
                    </label>
                    <select
                      className="form-select"
                      id="specialite"
                      name="specialite"
                      required
                      onChange={handleChange}
                    >
                      <option value="">Sélectionnez votre spécialité</option>
                      {specialites.map((spec, index) => (
                        <option key={index} value={spec}>
                          {spec}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="row g-3 mb-4">
                    <div className="col-md-6">
                      <label htmlFor="diplome" className="form-label">
                        Diplôme le Plus Élevé*
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="diplome"
                        name="diplome"
                        placeholder="Ex: Master en Informatique"
                        required
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="experience" className="form-label">
                        Années d'Expérience*
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="experience"
                        name="experience"
                        min="0"
                        required
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="motivation" className="form-label">
                      Lettre de Motivation*
                    </label>
                    <textarea
                      className="form-control"
                      id="motivation"
                      name="motivation"
                      rows="5"
                      placeholder="Pourquoi souhaitez-vous rejoindre l'ENASTIC ? Quelles seraient vos contributions ?"
                      required
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <div className="mb-5">
                    <label htmlFor="cv" className="form-label">
                      CV (PDF uniquement)*
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      id="cv"
                      name="cv"
                      accept=".pdf"
                      required
                      onChange={handleChange}
                    />
                    <div className="form-text">
                      Veuillez joindre un CV détaillant votre parcours
                      académique et professionnel.
                    </div>
                  </div>

                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary btn-lg">
                      <i className="bi bi-send-fill me-2"></i>Soumettre ma
                      Candidature
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Avantages */}
      <div className="row mt-5 py-4 bg-light rounded-3">
        <div className="col-12 text-center mb-4">
          <h3 className="fw-bold">Pourquoi Enseigner à l'ENASTIC ?</h3>
        </div>
        <div className="col-md-4 text-center">
          <div className="p-3">
            <i
              className="bi bi-mortarboard-fill text-primary"
              style={{ fontSize: "2rem" }}
            ></i>
            <h5 className="my-3">Impact Pédagogique</h5>
            <p>
              Formez les futurs leaders du numérique tchadien et contribuez au
              développement du pays.
            </p>
          </div>
        </div>
        <div className="col-md-4 text-center">
          <div className="p-3">
            <i
              className="bi bi-gem text-primary"
              style={{ fontSize: "2rem" }}
            ></i>
            <h5 className="my-3">Environnement Stimulant</h5>
            <p>
              Équipements modernes, étudiants motivés et collègues experts dans
              leur domaine.
            </p>
          </div>
        </div>
        <div className="col-md-4 text-center">
          <div className="p-3">
            <i
              className="bi bi-graph-up text-primary"
              style={{ fontSize: "2rem" }}
            ></i>
            <h5 className="my-3">Développement Professionnel</h5>
            <p>
              Accès à des formations continues, conférences internationales et
              projets de recherche.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostulerEnseignant;

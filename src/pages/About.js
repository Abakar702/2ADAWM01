import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about-page">
      <h2 className="text-center mt-5">À propos de l'ENASTIC</h2>
      {/* Section Mot du Directeur */}
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-4">
            <div className="director-image">
              <img
                src="WhatsApp Image 2025-04-10 à 10.45.20_0653b27e.jpg"
                alt="Directeur Général de l'ENASTIC"
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
          <div className="col-md-8">
            <div className="director-message p-4">
              <h2 className="mb-4 text-primary">Mot du Directeur Général</h2>
              <p className="lead mb-4">
                "En tant que Directeur Général de l'ENASTIC, je suis fier de
                diriger une institution pionnière dans la formation des futurs
                experts des technologies de l'information et de la communication
                au Tchad."
              </p>
              <p className="mb-4">
                Dans un monde en constante évolution numérique, l'ENASTIC
                s'engage à fournir une éducation de qualité, adaptée aux besoins
                du marché et aux défis technologiques actuels. Notre mission est
                de former des professionnels compétents, innovants et capables
                de contribuer au développement numérique de notre pays.
              </p>
              <div className="director-signature mt-4">
                <p className="mb-0 fw-bold">Dr. HAGGAR BACHAR SALIM</p>
                <p className="text-muted">Directeur Général de l'ENASTIC</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Historique */}
      <div className="container-fluid bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-5">Notre Histoire</h2>
          <div className="row">
            <div className="col-md-6">
              <div className="timeline">
                <div className="timeline-item">
                  <h4>2015</h4>
                  <p>
                    Création de l'ENASTIC par l'Ordonnance n°005/PR/2015 du 2
                    mars 2015, sous l'impulsion du Ministère des Postes et des
                    Nouvelles Technologies de l’Information.
                  </p>
                </div>
                <div className="timeline-item">
                  <h4>2018</h4>
                  <p>
                    Accréditation des programmes par l'Agence Nationale des
                    Technologies.
                  </p>
                </div>
                <div className="timeline-item">
                  <h4>2019</h4>
                  <p>
                    Nominations à des postes de responsabilité par décret n° 843
                    du 14 juin 2019, dont Dr. Haggar Bachar Salim en tant que
                    Directeur général.
                  </p>
                </div>
                <div className="timeline-item">
                  <h4>2020</h4>
                  <p>
                    Ouverture d'un cycle de master en télécommunication et
                    systèmes embarqués pour l'année académique 2019-2020.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="timeline">
                <div className="timeline-item">
                  <h4>2021</h4>
                  <p>
                    Sortie de la première promotion de l'ENASTIC à Sarh, avec 38
                    lauréats.
                  </p>
                </div>
                <div className="timeline-item">
                  <h4>2023</h4>
                  <p>Lancement des spécialisations en IA et Cybersécurité.</p>
                </div>
                <div className="timeline-item">
                  <h4>2023</h4>
                  <p>
                    Nominations à des postes de responsabilité par décret
                    N°3367/PT/PM/MTEN/2023 du 7 novembre 2023.
                  </p>
                </div>
                <div className="timeline-item">
                  <h4>2025</h4>
                  <p>
                    Nomination du Dr. Haggar Bachar Salim comme Directeur
                    Général de l'ENASTIC par décret N°0118/PR/PM/MTENDA/2025 du
                    3 mars 2025.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <div className="location-info">
                <h3>ENASTIC N'Djamena</h3>
                <p>
                  L'ENASTIC N'Djamena est le siège principal de l'École
                  Nationale Supérieure des Technologies de l'Information et de
                  la Communication. Elle offre des formations en informatique,
                  télécommunications, et autres domaines des TIC.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="location-info">
                <h3>ENASTIC Sarh</h3>
                <p>
                  L'ENASTIC Sarh est située dans la ville de Sarh, chef-lieu de
                  la province du Moyen-Chari. Elle a formé 38 techniciens
                  supérieurs en informatique et télécommunications en 2021.
                  L'antenne de Sarh est connue pour ses programmes de Diplômes
                  de Techniciens Supérieurs (DTS):refs[2-40,41].
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="location-info">
                <h3>ENASTIC Am-Djarass</h3>
                <p>
                  L'ENASTIC Am-Djarass est une extension de l'école située dans
                  la ville d'Am-Djarass, dans la région d'Ennedi-Est. Cette
                  antenne vise à étendre l'accès à l'éducation supérieure en
                  technologies de l'information et de la communication dans les
                  régions éloignées du pays.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Mission et Valeurs */}
      <div className="container py-5">
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center">
                <i className="bi bi-bullseye text-primary display-5 mb-3"></i>
                <h3>Notre Mission</h3>
                <p>
                  Former des experts en TIC hautement qualifiés, capables de
                  répondre aux besoins du marché et de participer activement à
                  la transformation numérique du Tchad.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center">
                <i className="bi bi-eye text-primary display-5 mb-3"></i>
                <h3>Notre Vision</h3>
                <p>
                  Devenir le centre d'excellence de référence en Afrique
                  Centrale pour la formation aux métiers des technologies de
                  l'information et de la communication.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center">
                <i className="bi bi-heart text-primary display-5 mb-3"></i>
                <h3>Nos Valeurs</h3>
                <ul className="list-unstyled text-start">
                  <li className="mb-2">• Excellence académique</li>
                  <li className="mb-2">• Innovation technologique</li>
                  <li className="mb-2">• Éthique professionnelle</li>
                  <li>• Engagement social</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Chiffres clés */}
      <div className="container-fluid bg-primary text-white py-5">
        <div className="container">
          <h2 className="text-center mb-5">L'ENASTIC en Chiffres</h2>
          <div className="row text-center">
            <div className="col-md-3 mb-4">
              <h3 className="display-4 fw-bold">500+</h3>
              <p>Étudiants formés</p>
            </div>
            <div className="col-md-3 mb-4">
              <h3 className="display-4 fw-bold">15</h3>
              <p>Programmes de formation</p>
            </div>
            <div className="col-md-3 mb-4">
              <h3 className="display-4 fw-bold">30</h3>
              <p>Enseignants experts</p>
            </div>
            <div className="col-md-3 mb-4">
              <h3 className="display-4 fw-bold">85%</h3>
              <p>Taux d'insertion professionnelle</p>
            </div>
          </div>
        </div>
      </div>

      {/* Section Partenariats */}
      <div className="container py-5">
        <h2 className="text-center mb-5">Nos Partenaires Stratégiques</h2>
        <div className="row align-items-center justify-content-center">
          <div className="col-6 col-md-2 mb-4">
            <img src="OIP (1).jfif" alt="Partenaire 1" className="img-fluid" />
          </div>
          <div className="col-6 col-md-2 mb-4">
            <img src="OIP (2).jfif" alt="Partenaire 2" className="img-fluid" />
          </div>
          <div className="col-6 col-md-2 mb-4">
            <img src="OIP (3).jfif" alt="Partenaire 3" className="img-fluid" />
          </div>
          <div className="col-6 col-md-2 mb-4">
            <img src="OIP (4).jfif" alt="Partenaire 4" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

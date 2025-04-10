import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import Enseignants from "../components/Enseignants";

const Home = () => {
  return (
    <div>
      <div className="home-header">
        <div className="home-container">
          <img src="photo (9).jpg" alt="Home" width="100%" height="600px" />
          <div className="content-overlay">
            <h1>Bienvenue à l'ENASTIC</h1>
            <p>
              L'École nationale supérieure des technologies de l'Information et
              de la communication (ENASTIC) est un établissement public
              d'enseignement, de recherche, d'innovation et de formations
              supérieures dans les domaines des communications électroniques.
            </p>
            <Link to="/en-savoir-plus" className="cta-button">
              En savoir plus
            </Link>
          </div>
        </div>
      </div>

      <div className="section container">
        <Enseignants />
      </div>

      <div className="section">
        <h2>Actualités</h2>
        <div className="news-container">
          <div className="news-item">
            <h3>Nominations à l'ENASTIC</h3>
            <p>
              Par décret N°3367/PT/PM/MTEN/2023 du 07 novembre 2023, plusieurs
              personnalités ont été nommées à des postes de responsabilité à
              l'ENASTIC, dont un nouveau Directeur général. Ces nominations
              visent à renforcer la gouvernance et l'efficacité de
              l'établissement.
            </p>
          </div>
          <div className="news-item">
            <h3>Concours d'entrée à l'ENASTIC</h3>
            <p>
              L'Office National des Examens et Concours du Supérieur (ONECS) a
              annoncé l'ouverture de deux concours d'entrée en première année à
              l'ENASTIC. Ces concours sont ouverts aux titulaires du
              baccalauréat de l'enseignement secondaire général et technique
              pour les filières informatiques et toutes séries confondues pour
              la filière de management des TIC.
            </p>
          </div>
          <div className="news-item">
            <h3>Perspectives d'évolution de l'ENASTIC</h3>
            <p>
              L'ENASTIC a organisé un atelier de réflexion sur les perspectives
              d'évolution de l'école. Cet événement, en partenariat avec le
              ministère des Postes et de l'Économie numérique et le ministère de
              l'Enseignement supérieur, vise à définir les orientations
              stratégiques pour l'avenir de l'établissement.
            </p>
          </div>
        </div>
      </div>

      <div className="section">
        <h2>Témoignages</h2>
        <div className="testimonial-container">
          <div className="testimonial-item">
            <p>
              "L'ENASTIC m'a offert une formation de qualité et des opportunités
              uniques pour développer mes compétences en technologies de
              l'information et de la communication. Les enseignants sont très
              compétents et toujours disponibles pour nous aider." - Étudiant en
              informatique
            </p>
          </div>
          <div className="testimonial-item">
            <p>
              "Grâce à l'ENASTIC, j'ai pu intégrer le marché du travail avec
              confiance. Les connaissances acquises et les projets réalisés
              durant ma formation m'ont permis de me démarquer auprès des
              employeurs." - Ancien étudiant en management des TIC
            </p>
          </div>
        </div>
      </div>

      <div className="section">
        <h2>Nos Partenaires</h2>
        <div className="partners-container">
          <div className="partner-item">
            <img src="OIP (1).jfif" alt="Partenaire 1" />
          </div>
          <div className="partner-item">
            <img src="OIP (2).jfif" alt="Partenaire 2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

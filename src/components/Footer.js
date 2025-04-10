import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer text-azure pt-5 ">
      <div className="container">
        <div className="row">
         
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold">ENASTIC</h6>
            <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px", backgroundColor: "#7c4dff", height: "2px"}}/>
            <p>
              École nationale supérieure des technologies de l'information et de la communication
            </p>
          </div>

         
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold">Navigation</h6>
            <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px", backgroundColor: "#7c4dff", height: "2px"}}/>
            <p>
              <a href="/" className="text-white text-decoration-none">Accueil</a>
            </p>
            <p>
              <a href="/about" className="text-white text-decoration-none">À propos</a>
            </p>
            <p>
              <a href="/galleries" className="text-white text-decoration-none">Galerie</a>
            </p>
            <p>
              <a href="/contact" className="text-white text-decoration-none">Contact</a>
            </p>
          </div>

          {/* Colonne Contact */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold">Contact</h6>
            <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px", backgroundColor: "#7c4dff", height: "2px"}}/>
            <p><i className="fas fa-home mr-3"></i> N'Djamena, Tchad</p>
            <p><i className="fas fa-envelope mr-3"></i> contact@enastic.td</p>
            <p><i className="fas fa-phone mr-3"></i> +235 92 25 31 31</p>
          </div>

          {/* Colonne Réseaux Sociaux */}
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold">Suivez-nous</h6>
            <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px", backgroundColor: "#7c4dff", height: "2px"}}/>
            <div className="social-links">
              <a href="https://facebook.com" className="me-4 text-white">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="https://twitter.com" className="me-4 text-white">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://instagram.com" className="me-4 text-white">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://linkedin.com" className="text-white">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center p-4" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
        © {new Date().getFullYear()} ENASTIC - Tous droits réservés
      </div>
    </footer>
  );
};

export default Footer;
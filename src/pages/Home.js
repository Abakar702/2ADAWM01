import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import Enseignants from "../components/Enseignants";
import { Container, Row, Col, Card } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="home-header">
        <div className="home-container">
          <img
            src="photo (9).jpg"
            alt="Home"
            className="img-fluid"
            style={{ height: "90vh", minHeight: "500px" }}
          />
          <div className="content-overlay">
            <h1 className="display-3 fw-bold mb-4">Bienvenue à l'ENASTIC</h1>
            <p className="lead d-none d-md-block">
              L'École nationale supérieure des technologies de l'Information et
              de la communication (ENASTIC) est un établissement public
              d'enseignement, de recherche, d'innovation et de formations
              supérieures dans les domaines des communications électroniques.
            </p>
            <Link
              to="/en-savoir-plus"
              className="cta-button btn btn-primary btn-lg mt-3"
            >
              En savoir plus
            </Link>
          </div>
        </div>
      </div>

      {/* Teachers Section */}
      <section className="section bg-light">
        <Container>
          <Enseignants />
        </Container>
      </section>

      {/* News Section */}
      <section className="section">
        <Container>
          <h2 className="text-center mb-5">Actualités</h2>
          <Row className="g-4">
            <Col md={4}>
              <Card className="h-100 custom-card">
                <Card.Body className="custom-card-body">
                  <Card.Title>Nominations à l'ENASTIC</Card.Title>
                  <Card.Text>
                    Le nouveau Directeur Général de l'ENASTIC du Tchad en 2025
                    est le Dr. HAGGAR BACHAR SALIM. Cette nomination a été
                    officialisée par le décret N°0118/PR/PM/MTENDA/2025, signé
                    le 3 mars 2025. Le Dr. SALIM est reconnu pour son expertise
                    dans les technologies émergentes et sa capacité à travailler
                    en équipe, ce qui est considéré comme un atout précieux pour
                    l'ENASTIC. Cette nomination vise à impulser une dynamique
                    nouvelle et à faire évoluer l'institution vers de nouveaux
                    horizons, notamment en répondant au besoin croissant en
                    compétences numériques au Tchad
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 custom-card">
                <Card.Body className="custom-card-body">
                  <Card.Title>Concours d'entrée à l'ENASTIC</Card.Title>
                  <Card.Text>
                    L'Office National des Examens et Concours du Supérieur
                    (ONECS) a annoncé l'ouverture de deux concours d'entrée en
                    première année à l'ENASTIC. Ces concours sont ouverts aux
                    titulaires du baccalauréat de l'enseignement secondaire
                    général et technique pour les filières informatiques et
                    toutes séries confondues pour la filière de management des
                    TIC.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 custom-card">
                <Card.Body className="custom-card-body">
                  <Card.Title>Perspectives d'évolution de l'ENASTIC</Card.Title>
                  <Card.Text>
                    L'ENASTIC a organisé un atelier de réflexion sur les
                    perspectives d'évolution de l'école. Cet événement, en
                    partenariat avec le ministère des Postes et de l'Économie
                    numérique et le ministère de l'Enseignement supérieur, vise
                    à définir les orientations stratégiques pour l'avenir de
                    l'établissement.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="section bg-light">
        <Container>
          <h2 className="text-center mb-5">Témoignages</h2>
          <Row className="g-4">
            <Col md={6}>
              <Card className="h-100 custom-card">
                <Card.Body>
                  <blockquote className="blockquote mb-0">
                    <p>
                      "L'ENASTIC m'a offert une formation de qualité et des
                      opportunités uniques pour développer mes compétences en
                      technologies de l'information et de la communication. Les
                      enseignants sont très compétents et toujours disponibles
                      pour nous aider."
                    </p>
                    <footer className="blockquote-footer">
                      Étudiant en informatique
                    </footer>
                  </blockquote>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="h-100 custom-card">
                <Card.Body>
                  <blockquote className="blockquote mb-0">
                    <p>
                      "Grâce à l'ENASTIC, j'ai pu intégrer le marché du travail
                      avec confiance. Les connaissances acquises et les projets
                      réalisés durant ma formation m'ont permis de me démarquer
                      auprès des employeurs."
                    </p>
                    <footer className="blockquote-footer">
                      Ancien étudiant en management des TIC
                    </footer>
                  </blockquote>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Partners Section */}
      <section className="section">
        <Container>
          <h2 className="text-center mb-5">Nos Partenaires</h2>
          <Row className="justify-content-center align-items-center g-4">
            <Col xs={6} md={3} className="text-center">
              <img
                src="OIP (1).jfif"
                alt="Partenaire 1"
                className="img-fluid partner-img"
              />
            </Col>
            <Col xs={6} md={3} className="text-center">
              <img
                src="OIP (2).jfif"
                alt="Partenaire 2"
                className="img-fluid partner-img"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;

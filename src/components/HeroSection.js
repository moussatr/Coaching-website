import React from "react";
import illustrationImage from "../images/fond-ecran.jpg";
import "../css/components/heroSection.css"; // Importez votre fichier CSS
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="hero-section text-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img
              src={illustrationImage}
              alt="Illustration"
              className="img-fluid"
            />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h1 className="mb-4">
              Bienvenue sur notre site de Cabinet Savoir Plus
              Ecoute-Conseils-Appui-Formation
            </h1>
            <p className="mb-4">
              Transformez votre vie avec nos services de coaching personnalisés
              et nos formations de haute qualité.
            </p>
            <Link to="/services" className="btn btn-primary">
              Commencez dès maintenant
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

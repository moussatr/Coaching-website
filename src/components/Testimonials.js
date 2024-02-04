import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../css/components/testimonials.css"; // Importez votre fichier CSS

const Testimonials = () => {
  return (
    <section className="testimonials-section bg-light py-5">
      <div className="container">
        <h2 className="text-center mb-5">Témoignages</h2>
        <div className="row">
          <div className="col-md-6 mx-auto">
            <div className="card mb-4">
              <div className="card-body">
                <blockquote className="blockquote mb-0">
                  <p>
                    "Grâce au coaching que j'ai reçu, j'ai pu dépasser mes
                    limites et atteindre mes objectifs."
                  </p>
                  <footer className="blockquote-footer">
                    Mahamadou Coulibaly
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
          {/* Ajoutez d'autres témoignages au besoin */}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

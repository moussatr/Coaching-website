import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../css/components/services.css";
import brochure from "../pdf/brochure.pdf";

const Services = () => {
  const handleDownloadBrochure = () => {
    console.log("Téléchargement de la brochure...");
  };
  return (
    <section className="services-section">
      <div className="container">
        <h2 className="text-center mb-5">Nos Services</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">
                  Programme de formation en développement personnel
                </h5>
                <p className="card-text">
                  <strong>Objectif pédagogique :</strong>
                  <ul>
                    <li>
                      Acquérir et maîtriser les fondamentaux de la confiance en
                      soi.
                    </li>
                  </ul>
                  <strong>Contenus et durée :</strong>
                  <ul>
                    <li>6 modules</li>
                    <li>Environ 30 heures</li>
                  </ul>
                  <strong>Niveau :</strong>
                  <ul>
                    <li>Tout public</li>
                    <li>Aucun prérequis</li>
                  </ul>
                  <strong>Prérequis technique :</strong>
                  <ul>
                    <li>Ordinateur ou tablette fonctionnelle</li>
                    <li>Connexion internet</li>
                  </ul>
                </p>
                <div className="d-grid gap-2">
                  <a
                    href={brochure}
                    className="btn btn-outline-primary"
                    download="brochure.pdf"
                    onClick={handleDownloadBrochure}
                  >
                    Télécharger la brochure
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">
                  Programme de formation : Gestion de stress
                </h5>
                <p className="card-text">
                  <strong>Objectifs :</strong>
                  <ul>
                    <li>
                      Comprendre l’impact du stress sur la qualité de vie au
                      travail
                    </li>
                    <li>
                      Savoir reconnaitre les signes précurseurs du stress et les
                      conséquences
                    </li>
                    <li>
                      Découvrir, comprendre et pratiquer les différentes
                      méthodes et exercices de gestion du stress au quotidien
                    </li>
                    <li>
                      Améliorer les conditions et la qualité de vie au travail
                    </li>
                  </ul>
                </p>
                <div className="d-grid gap-2">
                  <a
                    href={brochure}
                    className="btn btn-outline-primary"
                    download="brochure.pdf"
                    onClick={handleDownloadBrochure}
                  >
                    Télécharger la brochure
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">
                  Formation : Contrôle de Gestion Pilotage des Coûts
                </h5>
                <p className="card-text">
                  <strong>Objectifs :</strong>
                  <ul>
                    <li>Maîtriser les principaux coûts et budgets</li>
                    <li>
                      Construire des outils de reporting et des tableaux de
                      bords
                    </li>
                    <li>Élaborer et suivre un budget</li>
                  </ul>
                </p>
                <div className="d-grid gap-2">
                  <a
                    href={brochure}
                    className="btn btn-outline-primary"
                    download="brochure.pdf"
                    onClick={handleDownloadBrochure}
                  >
                    Télécharger la brochure
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Formation : Gestion projet</h5>
                <p className="card-text">
                  <strong>Cette formation permet de :</strong>
                  <ul>
                    <li>
                      S’approprier les connaissances de base de la gestion de
                      projet
                    </li>
                    <li>
                      Comprendre qui doit faire quoi dans le projet (rôles et
                      responsabilités)
                    </li>
                    <li>Savoir démarrer le projet sur de bonnes bases </li>
                    <li>
                      Savoir planifier et maitriser le périmètre, les délais,
                      les coûts et les risques
                    </li>
                    <li>Pouvoir gérer correctement un petit projet</li>
                  </ul>
                </p>
                <div className="d-grid gap-2">
                  <a
                    href={brochure}
                    className="btn btn-outline-primary"
                    download="brochure.pdf"
                    onClick={handleDownloadBrochure}
                  >
                    Télécharger la brochure
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

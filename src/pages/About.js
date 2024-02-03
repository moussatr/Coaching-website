import React from "react";
import "../css/pages/about.css";

const About = () => {
  return (
    <div className="container">
      <section className="about-section py-5">
        <h2 className="text-center mb-4">À propos de notre entreprise</h2>
        <div className="row">
          <div className="col-md-6">
            <h4>Objectif Général</h4>
            <p>
              Assurer la prise en charge psychologique et psychosocial des
              personnes, des groupes sociaux et des entreprises.
            </p>
            <h4>Objectifs spécifiques</h4>
            <ul className="about-list">
              <li>
                Accompagner les personnes et les groupes de personnes en
                situation de détresse psychologique et psychosociale
              </li>
              <li>
                Accompagner les entreprises à détecter et à gérer le stress et
                le burn out du personnel
              </li>
              <li>
                Stimuler la motivation du personnel au sein des Entreprises
              </li>
              <li>
                Former les cadres des entreprises aux notions de leadership des
                cadres au sein des entreprises
              </li>
              <li>
                Accompagner les élèves et les étudiants en situation difficile
                (stress, anxiété, manque de confiance/doute, etc.)
              </li>
              <li>
                Initier les étudiants à l’esprit d’entreprenariat en stimulant
                leur motivation et estime de soi (partage d’expérience avec les
                leaders)
              </li>
              <li>
                Offrir un soutien psychopédagogique aux apprenants et encadreurs
              </li>
              <li>
                Coacher les couples en difficulté pour réussir leur vie de
                couple et offrir un cadre de médiation familiale
              </li>
              <li>
                Offrir des formations sur les premiers secours psychologiques à
                l’intention des ONG, des responsables de services publics et
                privés etc.
              </li>
              <li>
                Aider les organismes et entreprises à faire le recrutement de
                leur personnel
              </li>
              <li>
                Faire des enquêtes et des études scientifiques dans le domaine
                de la psychologie
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

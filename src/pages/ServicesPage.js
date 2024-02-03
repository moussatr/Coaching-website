import React from "react";
import "../css/pages/servicesPage.css"; // Importez votre fichier CSS
import { Link } from "react-router-dom";
import Services from "../components/Services";

const ServicesPage = () => {
  return (
    <div className="container">
      {/* <Header /> */}
      <section className="services-page py-5">
        <Services />
        <p className="mt-4">
          Pour en savoir plus sur nos services, contactez-nous à l'aide du
          <Link to="/contact"> formulaire ci-dessous.</Link>
        </p>
      </section>
      {/* <Footer /> */}
    </div>
  );
};

export default ServicesPage;

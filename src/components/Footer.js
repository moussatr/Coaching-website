import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../css/pages/style.css";

const Footer = () => {
  return (
    <>
      <div className="cards">
        <div className="card red">
          <footer class="text-center text-lg-start bg-body-tertiary text-muted ">
            <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
              <div class="me-5 d-none d-lg-block">
                <span>Get connected with us on social networks:</span>
              </div>

              <div>
                <a href="/#" class="me-4 text-reset">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="/#" class="me-4 text-reset">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="/#" class="me-4 text-reset">
                  <i class="fab fa-google"></i>
                </a>
                <a href="/#" class="me-4 text-reset">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="/#" class="me-4 text-reset">
                  <i class="fab fa-linkedin"></i>
                </a>
                <a href="/#" class="me-4 text-reset">
                  <i class="fab fa-github"></i>
                </a>
              </div>
            </section>

            <section class="">
              <div class="container text-center text-md-start mt-5">
                <div class="row mt-3">
                  <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                    <h6 class="text-uppercase fw-bold mb-4">
                      <i class="fas fa-gem me-3"></i>
                      Ecoute-Conseils-Appui-Formation
                    </h6>
                    <p>
                      Assurer la prise en charge psychologique et psychosocial
                      des personnes, des groupes sociaux et des entreprises.
                    </p>
                  </div>

                  <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                    <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                    <p>
                      <i class="fas fa-home me-3"></i> Bamako, NY 10012, US
                    </p>
                    <p>
                      <i class="fas fa-envelope me-3"></i>
                      daoudatraore825@gmail.com
                    </p>
                    <p>
                      <i class="fas fa-phone me-3"></i> +223 77 23 97 61
                    </p>
                    <p>
                      <i class="fas fa-print me-3"></i> +223 65 27 30 89
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <div
              class="text-center p-4"
              // style="background-color: rgba(0, 0, 0, 0.05);"
            >
              © 2024 Copyright: Ecoute-Conseils-Appui-Formation
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Footer;

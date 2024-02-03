import React, { useState } from "react";
import "../css/pages/contact.css"; // Importez votre fichier CSS

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tel: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      setSuccessMessage(data.message);
      setFormData({
        name: "",
        email: "",
        tel: "",
        message: "",
      });
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire :", error);
      setErrorMessage("Une erreur est survenue lors de l'envoi du formulaire.");
    }
  };

  return (
    <div className="container">
      <section className="contact-section py-5">
        <h2 className="text-center mb-4">Nous contacter</h2>
        <div className="row justify-content-center">
          <div className="col-md-6">
            {successMessage && (
              <div className="alert alert-success" role="alert">
                {successMessage}
              </div>
            )}
            {errorMessage && (
              <div className="alert alert-danger" role="alert">
                {errorMessage}
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Nom :
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email :
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="tel" className="form-label">
                  Téléphone :
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="tel"
                  name="tel"
                  value={formData.tel}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message :
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

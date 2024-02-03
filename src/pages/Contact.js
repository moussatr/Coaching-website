import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
// import { isValidNumber, parsePhoneNumber } from "libphonenumber-js";
import "../css/pages/contact.css"; // Importez votre fichier CSS

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tel: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhoneChange = (value, country) => {
    setFormData({ ...formData, tel: value });
  };

  // const validatePhoneNumber = (value) => {
  //   try {
  //     const phoneNumber = parsePhoneNumber(value);
  //     return isValidNumber(phoneNumber);
  //   } catch (error) {
  //     return false;
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.email ||
      !formData.tel ||
      !formData.message
    ) {
      setErrors({ message: "Veuillez remplir tous les champs du formulaire." });
      return;
    }
    // if (!validatePhoneNumber(formData.tel)) {
    //   setErrors({ tel: "Numéro de téléphone non valide." });
    //   return;
    // }
    // Envoi du formulaire via emailjs
    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        tel: formData.tel,
        message: formData.message,
      };
      await emailjs.send(
        "service_mnmqu7l",
        "template_jy8wpqp",
        templateParams,
        "s4027We1O8FX50OkL"
      );
      setSuccessMessage("Message envoyé avec succès !");
      console.log("Message envoyé avec succès !");
      // Réinitialisation des champs et des erreurs après l'envoi
      setFormData({ name: "", email: "", tel: "", message: "" });
      setErrors({});
    } catch (error) {
      console.error("Erreur lors de l'envoi du message :", error);
      setErrors({ message: "Une erreur s'est produite. Veuillez réessayer." });
    }
  };

  return (
    <div className="container">
      <section className="contact-section py-5">
        <h2 className="text-center mb-4">Nous contacter</h2>
        {successMessage && (
          <div className="alert alert-success">{successMessage}</div>
        )}
        <div className="row justify-content-center">
          <div className="col-md-6">
            {errors.message && (
              <div className="alert alert-danger">{errors.message}</div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Prénom et Nom :
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
                <label htmlFor="phone" className="form-label">
                  Téléphone :
                </label>
                <PhoneInput
                  country={"fr"}
                  value={formData.tel}
                  onChange={handlePhoneChange}
                  inputProps={{
                    name: "phone",
                    id: "phone",
                    className: `form-control ${errors.tel ? "is-invalid" : ""}`,
                  }}
                />
                {errors.phone && (
                  <div className="invalid-feedback">{errors.tel}</div>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message :
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
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

import React from "react";
import { FaInstagram, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

export default function Contacto() {
  return (
    <main className="contacto-page">
      <section className="contacto-main">
        <div className="contacto-container">

          {/* COLUMNA INFO */}
          <div className="contacto-info">
            <h2>Ponete en contacto</h2>
            <p>
              ¿Tenés dudas sobre los planes o querés una clase de prueba?
              <br />
              Escribinos y empezá hoy mismo a entrenar con nosotros 💪
            </p>

            <div className="contacto-datos">
              <a href="https://wa.me/15550000000" target="_blank" rel="noopener noreferrer" className="dato-link">
                <FaWhatsapp className="icon-wa" /> 15550000000
              </a>

              <a href="https://instagram.com/gympro" target="_blank" rel="noopener noreferrer" className="dato-link">
                <FaInstagram className="icon-ig" /> @gympro_fitness
              </a>

              <a href="mailto:contacto@gympro.com" className="dato-link">
                <FaEnvelope className="icon-mail" /> contacto@gympro.com
              </a>
              
              <div className="dato-extra">
                <FaClock /> <span>Lun a Vie: 7:00 a 22:00 | Sáb: 9:00 a 18:00</span>
              </div>
            </div>
          </div>
<form 
  className="contacto-form" 
  action="https://formspree.io/f/mqeeakob" // Copiado de tu captura
  method="POST"
>
  <h3>Envianos un mensaje</h3>
  <div className="input-group">
    {/* IMPORTANTE: Todos los inputs deben tener el atributo 'name' */}
    <input type="text" name="nombre" placeholder="Nombre completo" required />
  </div>
  <div className="input-group">
    <input type="email" name="email" placeholder="Correo electrónico" required />
  </div>
  <div className="input-group">
    <textarea name="mensaje" placeholder="¿En qué disciplina estás interesado?" rows="4" required />
  </div>
  <button type="submit" className="btn-enviar">Enviar consulta</button>
</form>
        </div>
      </section>

      {/* SECCIÓN MAPA */}
      <section className="contacto-mapa">
        <div className="mapa-header">
          <h3><FaMapMarkerAlt /> Nuestra Ubicación</h3>
          <p>Av. Siempre Viva 123, Buenos Aires</p>
        </div>
        <iframe
          title="Mapa Gym"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0168878420577!2d-58.3841506!3d-34.6037389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM2JzEzLjUiUyA1OMKwMjMnMDMuMCJX!5e0!3m2!1ses!2sar!4v1631234567890"
          loading="lazy"
        ></iframe>
      </section>

      {/* SECCIÓN FAQ */}
      <section className="contacto-faq">
        <h2>Preguntas frecuentes</h2>
        <div className="faq-list">
          <details className="faq-item">
            <summary>¿Tienen pase diario?</summary>
            <p>¡Sí! Podés venir a probar nuestras instalaciones por un día pagando un pase diario en recepción.</p>
          </details>

          <details className="faq-item">
            <summary>¿Necesito certificado médico?</summary>
            <p>Sí, es obligatorio presentar un apto físico vigente para poder realizar cualquier actividad física.</p>
          </details>

          <details className="faq-item">
            <summary>¿Los planes incluyen todas las clases?</summary>
            <p>Depende del plan elegido. El Plan Full incluye acceso a musculación y todas las clases grupales.</p>
          </details>

          <details className="faq-item">
            <summary>¿Hay estacionamiento?</summary>
            <p>Contamos con un sector exclusivo para bicicletas y convenios con el estacionamiento de al lado.</p>
          </details>
        </div>
      </section>
    </main>
  );
}
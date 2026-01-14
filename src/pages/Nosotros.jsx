import React from "react";
import { NavLink } from "react-router-dom";

export default function Nosotros() {
  return (
    <div className="nosotros-page">
      {/* HERO */}
      <section className="nosotros-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Sobre Nosotros</h1>
          <p>Transformamos tu cuerpo y mente con entrenamiento inteligente</p>
        </div>
      </section>

      {/* HISTORIA */}
      <section className="nosotros-section">
        <div className="nosotros-image">
          <img src="../assets/gym1.jpg" alt="Nuestro GYM" />
        </div>
        <div className="nosotros-text">
          <h2>Nuestra historia</h2>
          <p>
            Nuestro gimnasio nació de la pasión por el deporte y el bienestar.
            Creemos que entrenar no solo cambia tu cuerpo, sino también tu mentalidad.
          </p>
          <p>
            Desde clases grupales hasta entrenamientos personalizados, 
            acompañamos a cada persona en su camino hacia la mejor versión de sí misma.
          </p>
        </div>
      </section>

      {/* VALORES */}
      <section className="nosotros-values">
        <h2>Nuestros valores</h2>
        <div className="values-grid">
          <div className="value-card">
            <h3>💪 Entrenamiento real</h3>
            <p>Rutinas efectivas pensadas para resultados tangibles.</p>
          </div>
          <div className="value-card">
            <h3>🔥 Clases dinámicas</h3>
            <p>Funcional, HIIT, musculación y más, con diversión incluida.</p>
          </div>
          <div className="value-card">
            <h3>🏆 Coaches certificados</h3>
            <p>Profesionales que te acompañan y motivan a superarte.</p>
          </div>
          <div className="value-card">
            <h3>⏱ Resultados medibles</h3>
            <p>Planes diseñados para progresar de forma segura y constante.</p>
          </div>
          <div className="value-card">
            <h3>🌱 Bienestar integral</h3>
            <p>Entrenamiento, nutrición y motivación para tu cuerpo y mente.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="nosotros-cta">
        <h2>Comenzá tu transformación hoy 💥</h2>
        <p>Únete a nuestra comunidad y alcanzá tus metas con nosotros.</p>

         <div className="hero-buttons">
            <NavLink to="/planes" className="btn-hero">
              Ver planes
            </NavLink>
            <NavLink to="/contacto" className="btn-hero secondary">
              Contactanos
            </NavLink>
          </div>
      </section>
    </div>
  );
}

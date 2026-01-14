import React from "react";

export default function Servicios() {
  const servicios = [
    { title: "Funcional", description: "Clases dinámicas para todo el cuerpo, combinando fuerza, cardio y flexibilidad.", img: "../assets/gym3.jpg" },
    { title: "Musculación", description: "Entrenamiento completo con máquinas modernas y supervisión profesional.", img: "../assets/gym2.jpg" },
    { title: "Personal Trainer", description: "Seguimiento personalizado para alcanzar tus objetivos más rápido.", img: "../assets/gym9.jpg" },
    { title: "Yoga & Stretching", description: "Clases para mejorar tu flexibilidad, postura y bienestar mental.", img: "../assets/gym4.jpg" },
    { title: "Cardio HIIT", description: "Entrenamientos intensos para quemar grasa y aumentar resistencia.", img: "../assets/gym5.jpg" },
    { title: "Boxeo / Kickboxing", description: "Cardio intenso y tonificación mientras aprendes técnicas de defensa.", img: "../assets/gym6.jpg" },
    { title: "CrossFit", description: "Entrenamiento funcional de alta intensidad para fuerza y resistencia.", img: "../assets/gym7.jpg" },
    { title: "Entrenamiento al aire libre", description: "Circuitos en parques para fuerza, cardio y diversión.", img: "../assets/gym8.jpg" },
  ];

  return (
    <section className="section servicios" id="servicios">
      <h2 className="section-title">Nuestros Servicios</h2>
      <p className="section-subtitle">Entrena de la manera que más te motive y alcanza tus objetivos</p>

      <div className="cards-container">
        {servicios.map((servicio, index) => (
          /* Envolvemos la card en un enlace que lleva a la sección #planes */
          <a href="#planes" className="card-link" key={index}>
            <div className="card">
              <div
                className="card-img"
                style={{ backgroundImage: `url('${servicio.img}')` }}
              >
                <div className="overlay">
                  <span className="overlay-text">Ver planes y horarios</span>
                </div>
              </div>
              <div className="card-text">
                <h3>{servicio.title}</h3>
                <p>{servicio.description}</p>
                <span className="leer-mas">Saber más →</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
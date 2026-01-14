import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const videos = [
  "../assets/video1.mp4",
  "../assets/video2.mp4",
  "../assets/video3.mp4",
];

function Home() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % videos.length);
        setFade(true);
      }, 800); // tiempo del fade
    }, 7000); // duración total por video

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <video
          className={`hero-video ${fade ? "show" : "hide"}`}
          src={videos[index]}
          autoPlay
          loop
          muted
          playsInline
        />

        <div className="hero-overlay" />

        <div className="hero-content">
          <h1>Transformá tu cuerpo</h1>
          <p>Entrená con profesionales y alcanzá tu mejor versión</p>

          <div className="hero-buttons">
            <NavLink to="/planes" className="btn-hero">
              Ver planes
            </NavLink>
            <NavLink to="/contacto" className="btn-hero secondary">
              Contactanos
            </NavLink>
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="section benefits">
        <div className="benefit-card">
          <h3>💪 Entrenamiento real</h3>
          <p>Rutinas pensadas para resultados reales</p>
        </div>

        <div className="benefit-card">
          <h3>🔥 Clases dinámicas</h3>
          <p>Funcional, musculación y más</p>
        </div>

        <div className="benefit-card">
          <h3>🏆 Coaches expertos</h3>
          <p>Profesionales que te acompañan</p>
        </div>
      </section>

      {/* ESTADÍSTICAS */}
      <section className="stats">
        <div className="stat">
          <h3>+500</h3>
          <p>Alumnos activos</p>
        </div>

        <div className="stat">
          <h3>10+</h3>
          <p>Años de experiencia</p>
        </div>

        <div className="stat">
          <h3>100%</h3>
          <p>Motivación</p>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="cta">
        <h2>Empezá hoy tu cambio</h2>
        <p>Tu mejor versión te está esperando</p>

        <NavLink to="/contacto" className="btn-hero">
          Sumate ahora
        </NavLink>
      </section>
    </>
  );
}

export default Home;

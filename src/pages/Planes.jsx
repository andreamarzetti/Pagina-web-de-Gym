import { FaWhatsapp, FaClock } from "react-icons/fa"; // 1. Agregamos FaClock
import { useState } from "react";

export default function Planes() {
  const [selected, setSelected] = useState(null);

  const servicios = [
    { title: "Funcional", description: "Clases dinámicas combinando fuerza, cardio y flexibilidad.", img: "../assets/gym3.jpg", price: "$15.000 / mes", featured: false, horarios: "Lun, Mié y Vie: 08:00, 10:00 y 18:00 hs." },
    { title: "Musculación", description: "Entrenamiento completo con máquinas modernas y supervisión profesional.", img: "../assets/gym2.jpg", price: "$20.000 / mes", featured: false, horarios: "Lunes a Viernes: 07:00 a 22:00 hs. Sábados: 09:00 a 14:00 hs." },
    { title: "Personal Trainer", description: "Seguimiento personalizado para alcanzar tus objetivos más rápido.", img: "../assets/gym9.jpg", price: "$35.000 / mes", featured: true, horarios: "A coordinar con el profesor según disponibilidad." },
    { title: "Yoga & Stretching", description: "Clases para mejorar flexibilidad, postura y bienestar mental.", img: "../assets/gym4.jpg", price: "$12.000 / mes", featured: false, horarios: "Mar y Jue: 09:00 y 19:00 hs." },
    { title: "Cardio HIIT", description: "Entrenamientos intensos para quemar grasa y aumentar resistencia.", img: "../assets/gym5.jpg", price: "$18.000 / mes", featured: false, horarios: "Lun a Jue: 11:00 y 20:00 hs." },
    { title: "Boxeo / Kickboxing", description: "Cardio intenso y tonificación mientras aprendes técnicas de defensa.", img: "../assets/gym6.jpg" , price: "$22.000 / mes", featured: false, horarios: "Lun, Mié y Vie: 19:00 y 21:00 hs." },
    { title: "CrossFit", description: "Entrenamiento funcional de alta intensidad para fuerza y resistencia.", img: "../assets/gym7.jpg" , price: "$25.000 / mes", featured: false, horarios: "Lunes a Sábado: Turnos cada hora desde las 08:00." },
    { title: "Entrenamiento al aire libre", description: "Circuitos en parques para fuerza, cardio y diversión.", img: "../assets/gym8.jpg", price: "$10.000 / mes", featured: false, horarios: "Sábados: 10:00 hs en la plaza central." },
  ];

  return (
    <section className="section planes">
      <h2 className="section-title">Elegí tu plan</h2>
      <p className="section-subtitle">Planes pensados para cada objetivo</p>

      <div className="planes-grid">
        {servicios.map((s, i) => (
          <div
            key={i}
            className={`plan-card ${s.featured ? "featured" : ""}`}
            onClick={() => setSelected(i)}
          >
            {s.featured && <span className="badge">Más elegido</span>}
            <h3>{s.title}</h3>
            <h4>{s.price}</h4>
            <p>{s.description}</p>
            <button className="btn-plan">
              <FaWhatsapp /> Ver más / Consultar
            </button>
          </div>
        ))}
      </div>

      {/* MODAL NUEVO Y MEJORADO */}
      {selected !== null && (
        <div className="modal-overlay" onClick={() => setSelected(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            {/* Botón para cerrar el modal */}
            <button className="close-btn" onClick={() => setSelected(null)}>×</button>
            
            <img src={servicios[selected].img} alt={servicios[selected].title} />
            
            <h3>{servicios[selected].title}</h3>
            <h4 className="price-tag">{servicios[selected].price}</h4>
            
            <p className="modal-desc">{servicios[selected].description}</p>
            
            <div className="horarios-info">
              <h5><FaClock /> Horarios disponibles:</h5>
              <p>{servicios[selected].horarios}</p>
            </div>

            <a
              href={`https://wa.me/5491112345678?text=Hola! Me interesa el plan de ${servicios[selected].title}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-plan-whatsapp"
            >
              <FaWhatsapp /> Consultar por WhatsApp
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
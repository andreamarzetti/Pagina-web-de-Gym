import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Importamos iconos

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  // Función para cerrar el menú al hacer clic en un enlace
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="navbar">
      <NavLink to="/" className="logo" onClick={closeMenu}>
        GYM<span>PRO</span>
      </NavLink>

      {/* Botón de Hamburguesa - Solo visible en móviles */}
      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Clase dinámica: si isOpen es true, añade la clase 'active' */}
      <nav className={isOpen ? "nav-links active" : "nav-links"}>
        <NavLink to="/" end onClick={closeMenu}>Home</NavLink>
        <NavLink to="/nosotros" onClick={closeMenu}>Nosotros</NavLink>
        <NavLink to="/servicios" onClick={closeMenu}>Servicios</NavLink>
        <NavLink to="/planes" onClick={closeMenu}>Planes</NavLink>
        <NavLink to="/contacto" className="btn-nav" onClick={closeMenu}>Contacto</NavLink>
      </nav>
    </header>
  );
}

export default NavBar;
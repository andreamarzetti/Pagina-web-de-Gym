import { FaInstagram, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <p>© 2026 GYM PRO · Todos los derechos reservados</p>

      <div className="footer-socials">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>

        <a
          href="https://wa.me/15550000000" // Este es un número de prueba "
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp />
        </a>
      </div>
    </footer>
  );
}

export default Footer;

import { HashRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { FaWhatsapp } from "react-icons/fa";
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Servicios from "./pages/Servicios";
import Planes from "./pages/Planes";
import Contacto from "./pages/Contacto";

function App() {
  return (
    <HashRouter>
      <NavBar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/planes" element={<Planes />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>

      <Footer />
    <a
  href="https://wa.me/15550000000" // Este es un número de prueba (EE.UU.)
  className="whatsapp-float"
  target="_blank"
  rel="noopener noreferrer"
      >
    <FaWhatsapp />
    </a>
    </HashRouter>
  );
}

export default App;


import "../styles/navBar.css";
import { useState, useEffect } from "react";

function Navbar() {
  const [activeTab, setActiveTab] = useState("home");
  // Estado para controlar si el menú móvil está abierto
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Inicio", id: "home" },
    { name: "Proyectos", id: "proyectos" },
    { name: "Tecnologías", id: "tecnologias" },
    { name: "Sobre Mi", id: "sobre-mi" },
  ];

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveTab(id);
    }
    // Cerramos el menú en móvil automáticamente tras hacer clic en un enlace
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -60% 0px",
      threshold: 0,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveTab(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions,
    );

    menuItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="navbar">
      {/* Botón de la hamburguesa */}
      <div
        className={`hamburger ${isMenuOpen ? "open" : ""}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Lista de navegación con clase condicional para móvil */}
      <ul className={`navbar-list ${isMenuOpen ? "open" : ""}`}>
        {menuItems.map((item) => (
          <li
            key={item.id}
            className={`navbar-item ${activeTab === item.id ? "active" : ""}`}
            onClick={() => handleScroll(item.id)}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;

import "../styles/navBar.css";
import { useState, useEffect } from "react";

function Navbar() {
  const [activeTab, setActiveTab] = useState("home");
  // 1. Nuevo estado para controlar si el menú móvil está abierto
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
    // 2. Cerramos el menú en móvil automáticamente tras hacer clic en un enlace
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
      {/* 3. Botón de la hamburguesa (solo visible en móvil) */}
      <div
        className={`hamburger ${isMenuOpen ? "open" : ""}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* 4. Lista de navegación con clase condicional para móvil */}
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

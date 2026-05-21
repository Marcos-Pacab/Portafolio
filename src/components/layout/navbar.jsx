import "../styles/navBar.css";
import { useState, useEffect } from "react";

function Navbar() {
  // Estado para saber qué sección está activa en pantalla
  const [activeTab, setActiveTab] = useState("home");

  // Mapeamos el nombre visual con el ID real de HTML
  const menuItems = [
    { name: "Inicio", id: "home" },
    { name: "Proyectos", id: "proyectos" },
    { name: "Tecnologías", id: "tecnologias" },
    { name: "Sobre Mi", id: "sobre-mi" },
  ];

  // Función para manejar el clic y hacer scroll suave integrado
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveTab(id);
    }
  };

  // Lógica para cambiar la línea verde automáticamente al hacer scroll
  useEffect(() => {
    const observerOptions = {
      root: null, // Usa la pantalla del navegador
      rootMargin: "-30% 0px -60% 0px", // Detecta la sección cuando está en la zona central
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

    // Observar cada sección configurada en nuestro menú
    menuItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    // Limpieza al desmontar el componente
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {menuItems.map((item) => (
          <li
            key={item.id}
            // Comparamos el ID activo para pintar la línea verde
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

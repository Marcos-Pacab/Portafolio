import { CardProyecto } from "../common/cardProyect";
import { useState } from "react";
import "../styles/proyectoGrid.css";

function Proyectos() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  // Datos estructurados según tus capturas de diseño
  const proyectos = [
    {
      id: "resqguard",
      nombre: "P. ResQGuard",
      evento: "Innovatec 2024 - Etapa Regional",
      rol: "Líder de Proyecto",
      tecnologias: "Flutter, SQLite, VSCode, Arduino",
      descripcion:
        "Desarrollo de un sistema y dispositivo que permite reducir el tiempo de respuesta en accidentes; La app recopila datos del conductor y el dispositivo los envía con la ubicación mediante SMS en caso de accidente.",
      claseGrid: "card-tall-2", // Muy alto (lado izquierdo)
    },
    {
      id: "identificadorn-normatico",
      nombre: "P. Identificador Normativo",
      evento: "Proyecto de Residencia",
      rol: "Desarrollador Full-stack",
      tecnologias: "JavaScript, CSS, HTML, Odoo community, N8N",
      descripcion:
        "Desarrollo de pagina web para identificar y generar un diagnostico de seguridad laboral basado en la NOM-030-STPS-2009. Se uso odoo para el frontend y flujos de trabajo en n8n para el procesamiento.",
      claseGrid: "card-wide-2", // Ancho superior derecho
    },
    {
      id: "moe",
      nombre: "P. MOE",
      evento: "Innovatec 2023 - Etapa Regional",
      rol: "Desarrollador",
      tecnologias: "C++, Arduino, Freecad",
      descripcion:
        "Desarrollo de un sistema de alerta para prevenir la somnolencia en motociclistas. El Dispositivo envía un sonido de alerta para mantener despierto al conductor cuando se detecta que permanecen cerrado los ojos por un tiempo predeterminado.",
      claseGrid: "card-square",
    },
    {
      id: "tiresoft",
      nombre: "P. Tiresoft",
      evento: "Proyecto Personal",
      rol: "Desarrollador Full-stack",
      tecnologias: "Java, MySQL, Arquitectura MVC, JavaFX, Git, GitHub",
      descripcion:
        "Punto de venta inteligente (POS) especializado en la gestión de inventario, servicios, empleados, etc.",
      claseGrid: "card-medium-tall",
    },
    {
      id: "mecanova",
      nombre: "P. Mecanova",
      evento: "Proyecto Estudiantil",
      rol: "Desarrollador Frontend",
      tecnologias: "React, Node.js, JavaScript, CSS, HTML",
      descripcion:
        "Desarrollo de un sistema web para la gestión de servicios de internet. La plantaforma permite la gestión de servicos, contratos, planes, roles de usuario, manejo tickets, etc..",
      claseGrid: "card-square",
    },
    {
      id: "finz",
      nombre: "P. Finz",
      evento: "Hackatec 2025",
      rol: "Frontend Developer",
      tecnologias: "Flutter, Git, GitHub, API-Rest",
      descripcion:
        "Desarrollo de un sistema móvil para la gestión de finanzas personales, la app permite gestionar gastos personales, gastos semanales, scanear facturas, etc..",
      claseGrid: "card-square",
    },
    {
      id: "talento-emprendedor",
      nombre: "E. Talento Emprendedor",
      evento: "Concurso de Innovación Tecnológica",
      rol: "Co-Creador / Expositor",
      tecnologias: "Modelo de Negocios, UI/UX Prototypes",
      descripcion:
        "Modelado y presentación de una pagina web capaz de consultar información sobre la rama de ingeniería civil. Contiene información relevante para el estudio y apayo (documentos digitales, videos educativos y mapa de provedores).",
      claseGrid: "card-wide-bottom", // Bloques anchos de la fila inferior
    },
    {
      id: "rally-latinoamericano",
      nombre: "E. Really Latinoamericano",
      evento: "Rally Latinoamericano de innovación",
      rol: "Co-Creador / Representante Técnico",
      tecnologias: "Modelado 3D",
      descripcion:
        "Presentación de una solución sobre los desperdicios de agua.  Dispositivo con cuatro columnas tubulares con plantas que aprovechan los desperdicios del agua de aires acondicionados (interiores) y la lluvia (exteriores)",
      claseGrid: "card-wide-bottom",
    },
    {
      id: "tiresoft-movil",
      nombre: "P. Tiresoft Móvil",
      evento: "Proyecto personal",
      rol: "Desarrollador Full-stack",
      tecnologias:
        "Kotlin, Jetpack Compose, Android Studio, Arquitectura de CAPAS, Git, GitHub, Room",
      descripcion:
        "Plataforma de gestión de inventario, servicios, pagos, empleados, etc. Extención mejorada del proyecto Tiresoft.",
      claseGrid: "card-square",
    },
  ];

  const handleNext = () => {
    if (currentIndex < proyectos.length - 1) {
      triggerTransition(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      triggerTransition(currentIndex - 1);
    }
  };

  const triggerTransition = (nextIndex) => {
    setIsChanging(true); // Comienza el apagado suave desde adentro
    setTimeout(() => {
      setCurrentIndex(nextIndex);
      setIsChanging(false); // Enciende desde afuera al centrar la nueva carta
    }, 400); // Tiempo coordinado con la transición CSS
  };

  return (
    <div className="proyectos-section">
      {/* Contenedor del Carrusel */}
      <div className="carousel-container">
        <div
          className={`diamond-glow ${isChanging ? "fade-out" : "fade-in"}`}
        ></div>
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {proyectos.map((proyecto) => (
            <div className="carousel-slide" key={proyecto.id}>
              <CardProyecto proyecto={proyecto} />
            </div>
          ))}
        </div>
      </div>

      {/* Controles de Navegación Inferiores */}
      <div className="carousel-controls">
        <button
          className="nav-btn"
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          ←
        </button>

        <div className="dots-container">
          {proyectos.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => index !== currentIndex && triggerTransition(index)}
            ></span>
          ))}
        </div>

        <button
          className="nav-btn"
          onClick={handleNext}
          disabled={currentIndex === proyectos.length - 1}
        >
          →
        </button>
      </div>
    </div>
  );
}

export default Proyectos;

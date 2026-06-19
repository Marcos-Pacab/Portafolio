import "../styles/about.css";

function About() {
  return (
    <section className="about-section">
      {/* Contenedor de las 3 Tarjetas Superiores */}
      <div className="about-cards-grid">
        {/* Tarjeta 1: Educación */}
        <div className="about-card">
          <div className="about-icon-wrapper">
            <i className="fa-solid fa-book-open">
              <img src="/src/assets/icons/icono-sombrero-p.png"></img>
            </i>
          </div>
          <h3>EDUCACIÓN</h3>
          <div className="about-divider"></div>
          <p className="school-name">
            Instituto Tecnologico Superior del Sur de Yucatán
          </p>
          <p className="years">2020-2026</p>
        </div>

        {/* Tarjeta 2: Aptitudes */}
        <div className="about-card">
          <div className="about-icon-wrapper">
            <i className="fa-solid fa-cubes">
              <img src="/src/assets/icons/icono-aptitudes.png"></img>
            </i>
          </div>
          <h3>APTITUDES</h3>
          <div className="about-divider"></div>
          <ul className="aptitudes-list">
            <li>Adaptabilidad.</li>
            <li>Responsabilidad.</li>
            <li>Proactivo.</li>
            <li>Trabajo en equipo.</li>
          </ul>
        </div>

        {/* Tarjeta 3: Idiomas */}
        <div className="about-card">
          <div className="about-icon-wrapper">
            <i className="fa-solid fa-globe">
              <img src="/src/assets/icons/icono-idioma.png"></img>
            </i>
          </div>
          <h3>IDIOMAS</h3>
          <div className="about-divider"></div>
          <p className="language-item">
            <strong>Español:</strong> Nativo
          </p>
          <p className="language-item">
            <strong>Ingles:</strong> A1
          </p>
        </div>
      </div>

      {/* Contenedor Inferior: Mi Historia */}
      <div className="history-box">
        <h2>Mi historia</h2>
        <div className="history-divider"></div>
        <p className="history-text">
          Mi fascinación por la tecnología comenzó en mi infancia. Al darme
          cuenta de cómo esta herramienta puede simplificar la vida de las
          personas y solucionar problemas complejos, decidí convertir mi pasión
          en mi profesión estudiando Ingeniería en Sistemas Computacionales. Hoy
          en día, dedico mi tiempo a aprender y poner en práctica nuevas
          habilidades tecnológicas. Para mantener el equilibrio, me gusta
          empezar el día corriendo, disfruto de la buena música y me apasiona el
          diseño en todos sus ámbitos.
        </p>
      </div>
    </section>
  );
}

export default About;

import Navbar from "../components/layout/navbar";
import ProyectosGrid from "../components/layout/proyects";
import TechCarousel from "../components/layout/tecnoCarrusel";
import Titulos from "../components/common/titles";
import About from "../components/layout/about";
import "./home.css";

function Home() {
  return (
    <>
      <div id="home" className="home-container">
        <Navbar />

        {/* Contenedor principal del Hero */}
        <div className="hero-content">
          {/* Lado Izquierdo: Fotografía */}
          <div className="img-retrato">
            <img
              src="/src/assets/images/1763487080506.png"
              alt="Marcos Pacab"
            />
          </div>

          {/* Lado Derecho: Textos y Botones */}
          <div className="hero-text-block">
            <div className="presentacion">
              <h1>
                MARCOS A. <br />
                <span>PACAB MAY</span>
              </h1>
              <p>
                Ingeniero en Sistemas Computacionales comprometido con la
                excelencia técnica. Desarrollo soluciones tecnológicas,
                combinando creatividad y análisis para resolver los desafíos del
                entorno digital actual.
              </p>
            </div>

            {/* Fila de Botones y Redes */}
            <div className="redes">
              <a
                href="/CV_Marcos_Pacab.pdf"
                download="CV_Marcos_Pacab.pdf"
                className="btn-cv"
              >
                Descargar CV
                <span className="arrow-icon" style={{ marginLeft: "8px" }}>
                  🡇
                </span>
              </a>

              {/* Puedes reemplazar estos textos por iconos de FontAwesome o React Icons más adelante */}
              <a
                href="https://www.facebook.com/marcosadrian.pacabmay?locale=es_LA"
                target="_blank"
                rel="noreferrer"
                className="btn-social"
              >
                <img
                  src="/src/assets/icons/icons8-facebook-24.png"
                  alt="Facebook"
                />
              </a>

              <a
                href="https://www.linkedin.com/in/marcos-pacab-may-051021343/"
                target="_blank"
                rel="noreferrer"
                className="btn-social"
              >
                <img
                  src="/src/assets/icons/icons8-linkedin-24.png"
                  alt="LinkedIn"
                />
              </a>

              <a
                href="https://github.com/Marcos-Pacab"
                target="_blank"
                rel="noreferrer"
                className="btn-social"
              >
                <img
                  src="/src/assets/icons/icons8-github-24.png"
                  alt="GitHub"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Flecha de scroll hacia abajo */}
        <div className="scroll-down">
          <div className="arrow-down"></div>
        </div>
      </div>

      <div id="proyectos" className="proyectos-container">
        <Titulos titulo="Proyectos y Eventos" />
        <ProyectosGrid />
      </div>

      <div id="tecnologias" className="tecnologias-container">
        <Titulos titulo="LENGUAJES y HERRAMIENTAS" />
        <TechCarousel />
      </div>

      <div id="sobre-mi" className="sobremi-container">
        <Titulos titulo="Sobre Mí" />
        <About />
      </div>
    </>
  );
}

export default Home;

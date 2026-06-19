import Navbar from "../components/layout/navbar";
import Proyectos from "../components/layout/proyects";
import SkillMap from "../components/layout/skillMap";
import Titulos from "../components/common/titles";
import About from "../components/layout/about";
import Footer from "../components/layout/footer";
import "./home.css";

function Home() {
  return (
    <>
      <div id="home" className="home-container">
        {/* Componente NavBar */}
        <Navbar />

        <div className="hero-content">
          {/* Imagen de retrato*/}
          <div className="img-retrato">
            <img src="/src/assets/images/Perfil-gris.png" alt="Marcos Pacab" />
          </div>

          <div className="hero-text-block">
            {/* Información general */}
            <div className="presentacion">
              <h1 className="titulo-verde">Ingeniero en Sistemas</h1>
              <h2 className="titulo-blanco">Computacionales</h2>
              <p>
                Hola, soy Marcos A. Pacab May, Desarrollador de soluciones
                tecnológicas, que combina la creatividad y análisis para
                resolver los desafíos del entorno digital.
              </p>
            </div>

            {/* Botón de CV y redes sociales*/}
            <div className="redes">
              <a
                href="/src/assets/cv_Marcos_Pacab.pdf"
                download="CV-Marcos_Pacab"
                className="btn-cv"
              >
                Descargar CV
              </a>

              {/* LINKRDIN */}
              <a
                href="https://www.linkedin.com/in/marcos-pacab-may-051021343/"
                className="btn-social"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/src/assets/icons/icons8-linkedin-24.png"
                  alt="LinkedIn"
                />
              </a>

              {/* GITHUB */}
              <a
                href="https://github.com/Marcos-Pacab"
                className="btn-social"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/src/assets/icons/icons8-github-24.png"
                  alt="GitHub"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Fecha indicadora */}
        <div className="scroll-down">
          <div className="arrow-down"></div>
        </div>
      </div>

      {/*------- Mostrar componente de PROYECTOS --------*/}
      <div id="proyectos" className="proyectos-container">
        {/* Componente de TITULOS*/}
        <Titulos titulo="Proyectos y Eventos" />
        <Proyectos />
      </div>

      {/*------- Mostrar componente de LENGUAJES -------*/}
      <div id="tecnologias" className="tecnologias-container">
        <Titulos titulo="LENGUAJES y HERRAMIENTAS" />
        <SkillMap />
      </div>

      {/*------- Mostrar componente de SOBRE MI --------*/}
      <div id="sobre-mi" className="sobremi-container">
        <Titulos titulo="Sobre Mí" />
        <About />
      </div>

      {/*------- Mostrar componente FOOTER --------*/}
      <Footer />
    </>
  );
}

export default Home;

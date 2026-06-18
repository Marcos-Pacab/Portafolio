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
        <Navbar />

        <div className="hero-content">
          <div className="img-retrato">
            <img src="/src/assets/images/Perfil-gris.png" alt="Marcos Pacab" />
          </div>

          <div className="hero-text-block">
            <div className="presentacion">
              {/* Diseño ajustado según la imagen */}
              <h1 className="titulo-verde">Ingeniero en Sistemas</h1>
              <h2 className="titulo-blanco">Computacionales</h2>
              <p>
                Hola, soy Marcos A. Pacab May, comprometido con la excelencia
                técnica. Desarrollo soluciones tecnológicas, combinando
                creatividad y análisis para resolver los desafíos del entorno
                digital.
              </p>
            </div>

            <div className="redes">
              <a href="/CV_Marcos_Pacab.pdf" download className="btn-cv">
                Descargar CV
              </a>
              {/* Se recomienda usar FontAwesome o react-icons aquí */}
              <a
                href="https://www.facebook.com/marcosadrian.pacabmay?locale=es_LA"
                className="btn-social"
              >
                <img
                  src="/src/assets/icons/icons8-facebook-24.png"
                  alt="Facebook"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/marcos-pacab-may-051021343/"
                className="btn-social"
              >
                <img
                  src="/src/assets/icons/icons8-linkedin-24.png"
                  alt="LinkedIn"
                />
              </a>
              <a href="https://github.com/Marcos-Pacab" className="btn-social">
                <img
                  src="/src/assets/icons/icons8-github-24.png"
                  alt="GitHub"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="scroll-down">
          <div className="arrow-down"></div>
        </div>
      </div>

      <div id="proyectos" className="proyectos-container">
        <Titulos titulo="Proyectos y Eventos" />
        <Proyectos />
      </div>

      <div id="tecnologias" className="tecnologias-container">
        <Titulos titulo="LENGUAJES y HERRAMIENTAS" />
        <SkillMap />
      </div>

      <div id="sobre-mi" className="sobremi-container">
        <Titulos titulo="Sobre Mí" />
        <About />
      </div>

      <Footer />
    </>
  );
}

export default Home;

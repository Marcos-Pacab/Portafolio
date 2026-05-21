import "../styles/tecnoCarrusel.css";

// URLs oficiales del CDN de Devicon para la versión "-original.svg"
const row1 = [
  {
    name: "C#",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
  },
  {
    name: "Java",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  },
  {
    name: "HTML5",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    name: "React",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "Flutter",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
  },
];

const row2 = [
  {
    name: "Kotlin",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg",
  },
  {
    name: "MySQL",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  },
  {
    name: "Git",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
  },
  {
    name: "Odoo",
    url: "https://odoocdn.com/openerp_website/static/src/img/assets/svg/odoo_logo.svg",
  },
  { name: "n8n", url: "/src/assets/icons/n8n-color.svg" },
  {
    name: "Figma",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
  },
];

function TechCarousel() {
  const doubleRow1 = [...row1, ...row1];
  const doubleRow2 = [...row2, ...row2];

  return (
    <div className="tech-section-wrapper">
      {/* Cambiado a tech-container */}
      <div className="tech-container">
        {/* Fila 1 */}
        <div className="marquee-wrapper direction-left">
          <div className="marquee-track">
            {doubleRow1.map((tech, index) => (
              <div key={`r1-${index}`} className="tech-card">
                <img src={tech.url} alt={tech.name} className="tech-icon-img" />
              </div>
            ))}
          </div>
        </div>

        {/* Fila 2 */}
        <div className="marquee-wrapper direction-right">
          <div className="marquee-track">
            {doubleRow2.map((tech, index) => (
              <div key={`r2-${index}`} className="tech-card">
                <img src={tech.url} alt={tech.name} className="tech-icon-img" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechCarousel;

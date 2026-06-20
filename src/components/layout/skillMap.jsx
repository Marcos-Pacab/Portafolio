import "../styles/skillMap.css";

const brainIcon = "/public/images/icono-cerebro.png";
const backend = [
  {
    name: "C#",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
  },
  {
    name: "Java",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  },
  {
    name: "Kotlin",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg",
  },
  {
    name: "Flutter",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
  },
];

const frontend = [
  {
    name: "React",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
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
];

const bd = [
  {
    name: "MySQL",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  },
  {
    name: "SQLite",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg",
  },
];

const colaboracion = [
  {
    name: "GitHub",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
  },
  {
    name: "Git",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  },
];

const otros = [
  {
    name: "Odoo",
    url: "https://odoocdn.com/openerp_website/static/src/img/assets/svg/odoo_logo.svg",
  },
  { name: "n8n", url: "/public/icons/n8n-color.svg" },
  {
    name: "Figma",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
  },
];

const categories = [
  {
    title: "Backend",
    items: backend,
    x: 15,
    y: 38,
  },
  {
    title: "Frontend",
    items: frontend,
    x: 85,
    y: 38,
  },
  {
    title: "Bases de Datos",
    items: bd,
    x: 28,
    y: 66,
  },
  {
    title: "Colaboración",
    items: colaboracion,
    x: 72,
    y: 66,
  },
  {
    title: "Otros",
    items: otros,
    x: 50,
    y: 82,
  },
];

export function SkillsMap() {
  return (
    <section className="skills-section">
      <div className="skills-map">
        <svg
          className="skills-lines"
          viewBox="0 0 1000 700"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Backend — línea recta a la izquierda */}
          <line x1="390" y1="266" x2="230" y2="200" />

          {/* Frontend — línea recta a la derecha */}
          <line x1="610" y1="266" x2="760" y2="200" />

          {/* Bases de Datos — diagonal inferior izquierda */}
          <line x1="420" y1="355" x2="310" y2="442" />

          {/* Colaboración — diagonal inferior derecha */}
          <line x1="580" y1="355" x2="690" y2="442" />

          {/* Otros — vertical hacia abajo */}
          <line x1="500" y1="376" x2="500" y2="554" />

          {/* Nodos únicamente en el anillo central */}
          <circle cx="390" cy="266" r="14" />
          <circle cx="610" cy="266" r="14" />
          <circle cx="420" cy="355" r="14" />
          <circle cx="580" cy="355" r="14" />
          <circle cx="500" cy="376" r="14" />
        </svg>

        <div className="skills-core">
          <div className="skills-core-ring" />
          <div className="skills-core-inner">
            <img src={brainIcon} alt="Cerebro" />
          </div>
        </div>

        {categories.map((category) => (
          <div
            key={category.title}
            className="skill-group"
            style={{ left: `${category.x}%`, top: `${category.y}%` }}
          >
            <div className="skill-title">{category.title}</div>

            <div className="skill-items">
              {category.items.map((item) => (
                <div className="skill-item" key={item.name}>
                  <div className="skill-icon">
                    <img src={item.url} alt={item.name} />
                  </div>
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillsMap;

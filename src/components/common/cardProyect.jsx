import "../styles/cardProyect.css";

export function CardProyecto({ proyecto }) {
  // Separar el String de tecnologías por comas para mapear píldoras individuales
  const listaTecnologias = proyecto.tecnologias
    .split(",")
    .map((tech) => tech.trim());

  return (
    <div className="card-proyecto-wrapper">
      <div className="card-proyecto-content">
        {/* Cabecera: Icono de Carpeta de diseño + Título */}
        <div className="card-header">
          <div className="folder-icon">
            <img src="/icons/icono-folder.png"></img>
          </div>
          <h2>{proyecto.nombre.toUpperCase()}</h2>
        </div>

        {/* Barra divisora */}
        <div className="card-divider"></div>

        {/* Contenedor de Etiquetas/Píldoras */}
        <div className="tech-tags-container">
          {listaTecnologias.map((tech, idx) => (
            <span key={idx} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>

        {/* Bloques de información estructurada */}
        <div className="card-info-body">
          <div className="info-row">
            <span className="info-label">Rol:</span>
            <span className="info-text">{proyecto.rol}.</span>
          </div>

          <div className="info-row">
            <span className="info-label">Evento:</span>
            <span className="info-text">{proyecto.evento}</span>
          </div>

          <div className="info-row vertical-layout">
            <span className="info-label">Descripción:</span>
            <p className="info-description">{proyecto.descripcion}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

import "../styles/cardProyect.css";

export function CardProyecto({ proyecto, onClose }) {
  return (
    <div className="modal-overlay-blur" onClick={onClose}>
      <div className="card-proyecto-modal" onClick={(e) => e.stopPropagation()}>
        {/* Botón de cierre superior */}
        <button className="modal-close-btn" onClick={onClose}>
          &times;
        </button>

        {/* Encabezado: Check redondo + Título principal */}
        <div className="modal-top-header">
          <div className="check-badge">
            <span className="check-icon">✓</span>
          </div>
          <h2>{proyecto.nombre.toUpperCase()}</h2>
        </div>

        {/* Cuerpo con Estructura de Línea de Tiempo Lateral */}
        <div className="modal-timeline-body">
          <div className="timeline-connector-bar"></div>

          <div className="timeline-item-row">
            <div className="timeline-node"></div>
            <div className="info-block">
              <span className="label-title">Evento:</span>
              <span className="label-value">{proyecto.evento}</span>
            </div>
          </div>

          <div className="timeline-item-row">
            <div className="timeline-node"></div>
            <div className="info-block">
              <span className="label-title">Rol:</span>
              <span className="label-value">{proyecto.rol}</span>
            </div>
          </div>

          <div className="timeline-item-row">
            <div className="timeline-node"></div>
            <div className="info-block">
              <span className="label-title">Tecnologías:</span>
              <span className="label-value-tech">{proyecto.tecnologias}</span>
            </div>
          </div>

          <div className="timeline-item-row alignment-top">
            <div className="timeline-node adjustment-node"></div>
            <div className="info-block">
              <span className="label-title">Descripción:</span>
              <p className="description-paragraph">{proyecto.descripcion}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

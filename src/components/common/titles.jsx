import "../styles/titles.css";

function Titulos({ titulo }) {
  // Dividimos el título por espacios (Ej: ["Proyectos", "y", "Eventos"])
  const palabras = titulo.split(" ");
  const ultimaPalabra = palabras[palabras.length - 1];
  const restoPalabras = palabras.slice(0, palabras.length - 1);

  return (
    <div className="section-title-wrapper">
      <h2 className="main-title-text">
        {restoPalabras.map((palabra, index) => (
          <span
            key={index}
            className={
              palabra.toLowerCase() === "y" ? "connector" : "word-white"
            }
          >
            {palabra}{" "}
          </span>
        ))}
        <span className="word-green-outline">{ultimaPalabra}</span>
      </h2>
      <div className="animated-underline"></div>
    </div>
  );
}

export default Titulos;

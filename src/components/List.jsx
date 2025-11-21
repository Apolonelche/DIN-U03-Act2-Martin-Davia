function List({ foto, nombre, children }) {
  return (
    <article 
      className="interprete"
      aria-label={`Información sobre ${nombre}`}
    >
      <figure>
        <img 
          src={foto} 
          alt={`Póster de la película ${nombre}`} 
        />

        {/* Descripción oculta solo si existe */}
        {children && (
          <figcaption className="sr-only">
            {children}
          </figcaption>
        )}
      </figure>

      <header>
        <h2>{nombre}</h2>
      </header>

      {children && (
        <p>{children}</p>
      )}
    </article>
  );
}

export default List;


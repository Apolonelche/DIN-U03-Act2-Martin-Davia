function Interprete(props) {
  const {foto, nombre, esNota10} = props;
  return (
    <>
      <article className={`interprete ${esNota10 ? 'nota10' : ''}`} tabIndex="0">
        <figure>
        <img src={foto} alt={nombre} />
        <figcaption className="sr-only">{props.children}</figcaption>
        </figure>
        <header>
          <h2>{nombre}</h2>
          {esNota10 && <em> – Intérprete destacado</em>}
          <p>{props.children}</p>
        </header>
      </article>
    </>
  )
}

export default Interprete

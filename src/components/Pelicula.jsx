function Pelicula(props) {
  const {foto, nombre} = props;
  return (
    <>
      <article className="interprete">
        <figure>
        <img src={foto} alt={nombre} />
        <figcaption className="sr-only">{props.children}</figcaption>
        </figure>
        <header>
          <h2>{nombre}</h2>
          <p>{props.children}</p>
        </header>
      </article>
    </>
  )
}

export default Pelicula

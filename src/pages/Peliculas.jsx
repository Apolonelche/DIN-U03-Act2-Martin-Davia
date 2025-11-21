import peliculas from "../data/peliculas.js"
import List from "../components/List.jsx"
import { Link } from "react-router-dom"

export default function Peliculas() {
    return (
        <>
        <p className="contenedor__h2">Peliculas</p>
        <div className="listado">

        {peliculas.map((pelicula, index) =>
        <Link to={`/details/${index}`} key={index} >
          <List 
            key={index}
            nombre={pelicula.nombre} 
            foto={pelicula.cartelera}
          >
            {pelicula.clasificacion}
          </List>
        </Link>
        )}
        </div>

        </>
    )
}
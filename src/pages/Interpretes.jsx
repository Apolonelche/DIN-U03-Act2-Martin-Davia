import peliculas from "../data/peliculas.js"
import { Link } from "react-router-dom"
import List from "../components/List.jsx"

export default function Interpretes() {
    return (
        <>
        <p className="contenedor__h2">Interpretes</p>
        <div className="listado">
        {peliculas
         //.filter(pelicula => pelicula.clasificacion === "Drama")
         .map((pelicula) =>  
        pelicula.actores.map((interprete, index) =>
          <Link to={`/details/${peliculas.indexOf(pelicula)}/${index}`} key={index} >
          <List 
            key={index}
            nombre={interprete.nombre} 
            foto={interprete.imagen}
            esNota10={pelicula.nota === 10}
          >
            {interprete.biografia}
          </List>
          </Link>
        ))
        }
        </div>

        </>
    )
}
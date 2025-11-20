import peliculas from "../data/peliculas.js"
import Interprete from "../components/Interprete.jsx"
import { Link } from "react-router-dom"

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
          <Interprete 
            key={index}
            nombre={interprete.nombre} 
            foto={interprete.imagen}
            esNota10={pelicula.nota === 10}
          >
            {interprete.biografia}
          </Interprete>
          </Link>
        ))
        }
        </div>

        </>
    )
}
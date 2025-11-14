import peliculas from "../data/peliculas.js"
import Interprete from "../components/Interprete.jsx"

export default function Interpretes() {
    return (
        <>
        <p className="contenedor__h2">Interpretes</p>
        <div className="listado">
        {peliculas
         //.filter(pelicula => pelicula.clasificacion === "Drama")
         .map((pelicula) =>  
        pelicula.actores.map((interprete, index) =>
          <Interprete 
            key={index}
            nombre={interprete.nombre} 
            foto={interprete.imagen}
            esNota10={pelicula.nota === 10}
          >
            {interprete.biografia}
          </Interprete>
        ))
        }
        </div>

        </>
    )
}
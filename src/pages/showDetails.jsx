import { useParams } from "react-router-dom";
import peliculas from "../data/peliculas";

export default function ShowDetails() {
    const { indice } = useParams();
    console.log(indice);
    const elemento = peliculas[indice];
    const nombre = elemento.nombre
    const foto = elemento.cartelera
    const descripcion = elemento.resumen
    
    return (
        <>
        <h2 className="contenedor__h2">{nombre}</h2>
        <img src={foto} className="interprete img" alt={`Cartelera de la pelicula ${nombre}` }/>
        <p>{descripcion}</p>

        </>
    )
}
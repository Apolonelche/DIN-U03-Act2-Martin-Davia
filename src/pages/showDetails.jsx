import { useNavigate, useParams } from "react-router-dom";
import peliculas from "../data/peliculas";

export default function ShowDetails({ tipo }) {
    const navigate = useNavigate();
    let elemento;
    let nombre;
    let foto; 
    let descripcion; 


    if (tipo === 'pelicula') {
        const { indice } = useParams();
        elemento = peliculas[indice];
        
        console.log(elemento);

        nombre = elemento.nombre;
        foto = elemento.cartelera;
        descripcion = elemento.resumen;
        
    } else if (tipo === 'interprete') {
        const { indice, interprete } = useParams();
        const pelicula = peliculas[indice];
        elemento = pelicula.actores[interprete];
        
        nombre = elemento.nombre; 
        foto = elemento.imagen; 
        descripcion = elemento.biografia; 
    } 
    
    return (
        <>
            <div className="card_layout">
                <img src={foto} className="card_img" alt={`Cartelera de la pelicula ${nombre}` }/>
                
                <div className="info_card">
                    <h2 className="card_title">{nombre}</h2>
                    <p className="card_desc">{descripcion}</p>
                    <button className="" onClick={() => navigate(-1)}>Volver</button>
                </div>
            </div>
        </>
    )
}
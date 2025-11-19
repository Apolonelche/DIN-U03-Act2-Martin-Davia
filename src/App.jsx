import { Navigate, Route, Routes} from 'react-router-dom'
import './assets/index.css'
import Contenedor from './components/Contenedor.jsx'
import Peliculas from "./pages/Peliculas.jsx"
import Interpretes from "./pages/Interpretes.jsx"
import Header from './components/Header.jsx'
import Home from './pages/Home.jsx'
import Admin from './pages/Admin.jsx'
import ShowDetails from './pages/showDetails.jsx'

export default function App() {
  const isAuthenticated = false; // Simulación de autenticación

  return (
    <>
    <Header/>

    <Routes>
      <Route element={<Contenedor />}>
        <Route path="/" element={<Home/>}/>
        <Route path="/Inicio" element={<Home/>}/>
        <Route path="/peliculas" element={<Peliculas/>}/>
        <Route path="/interpretes" element={<Interpretes/>}/>
        <Route path="/admin" element={ isAuthenticated ? <Admin/> : <Home/>}/>
        <Route path="/details/:indice" element={<ShowDetails/>} />
      </Route>

        <Route path="*" element={<Contenedor titulo="Página no existe"/>}/>

    </Routes>
    {/*
      <h1 className='contenedor__h1'>Mis Intérpretes</h1>
      <h1 id="main-section-title" className="contenedor__h2">Intérpretes de películas destacadas</h1>


      <Contenedor>
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
      
      </Contenedor>
      */}
    </>
  )
}
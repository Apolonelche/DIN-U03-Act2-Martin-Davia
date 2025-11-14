import { Outlet } from "react-router-dom"

function Contenedor({ titulo }) {
  return (
    <main className="contenedor" tabIndex="-1" role="main" id="main-content">
      <section className="contenedor__section">

        {titulo && (
          <h1>{titulo}</h1>
        )}

        
        {/* children */}
        <Outlet/>
      </section>
    </main>
  )
}

export default Contenedor

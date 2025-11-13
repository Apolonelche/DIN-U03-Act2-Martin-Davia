import { Outlet } from "react-router-dom"

function Contenedor({ children }) {
  return (
    <main className="contenedor" tabIndex="-1" role="main" id="main-content">
      <section className="contenedor__section">

        
        <Outlet/>
      </section>
       {children}
    </main>
  )
}

export default Contenedor

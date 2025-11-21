import { Outlet } from "react-router-dom";
import { useId } from "react";

function Contenedor({ titulo }) {
  const headingId = useId(); // ID único para aria-labelledby

  return (
    <main
      className="contenedor"
      tabIndex="-1"
      role="main"
      id="main-content"
      aria-labelledby={titulo ? headingId : undefined}
    >
      <section className="contenedor__section">
        
        {titulo && (
          <h1 id={headingId}>{titulo}</h1>
        )}

        {/* children */}
        <Outlet />
      </section>
    </main>
  );
}

export default Contenedor;

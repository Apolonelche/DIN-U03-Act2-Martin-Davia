import { NavLink } from "react-router-dom";
import { useState, useId } from "react";

export default function Nav() {
    const [open, setOpen] = useState(false);
    const menuId = useId();

    return (
        <nav className="nav" role="navigation" aria-label="Menú principal">
            <p className="nav__logo">Películas</p>

            {/* Botón hamburguesa accesible */}
            <button
                className="nav__menu"
                onClick={() => setOpen(!open)}
                aria-expanded={open}
                aria-controls={menuId}
                aria-label={open ? "Cerrar menú" : "Abrir menú"}
            >
                ☰
            </button>

            {/* Lista de enlaces */}
            <div
                id={menuId}
                className={`nav__list ${open ? "block" : "hidden"}`}
            >
                <NavLink
                    to="/"
                    className="nav__link"
                    onClick={() => setOpen(false)}
                >
                    Inicio
                </NavLink>

                <NavLink
                    to="/peliculas"
                    className="nav__link"
                    onClick={() => setOpen(false)}
                >
                    Películas
                </NavLink>

                <NavLink
                    to="/interpretes"
                    className="nav__link"
                    onClick={() => setOpen(false)}
                >
                    Intérpretes
                </NavLink>

                <NavLink
                    to="/admin"
                    className="nav__link"
                    onClick={() => setOpen(false)}
                >
                    Admin
                </NavLink>
            </div>
        </nav>
    );
}

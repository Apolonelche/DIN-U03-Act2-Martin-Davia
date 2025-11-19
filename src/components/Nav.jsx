import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Nav() {
    const [open, setOpen] = useState(false);
    return (
        <nav className="nav">
            <p className="nav__logo">Películas</p>

            <button className="nav__link" onClick={() => setOpen(!open)}>
                ☰
            </button>

            <div className={`nav__list ${open ? "block" : "hidden"}`}>
                <NavLink to="/" className="nav__link" onClick={() => setOpen(false)}>Inicio</NavLink>
                <NavLink to="/peliculas" className="nav__link" onClick={() => setOpen(false)}>Películas</NavLink>
                <NavLink to="/interpretes" className="nav__link" onClick={() => setOpen(false)}>Intérpretes</NavLink>
                <NavLink to="/admin" className="nav__link" onClick={() => setOpen(false)}>Admin</NavLink>
            </div>
        </nav>
    );
}
import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <>
            <nav className="nav">
                <p className="nav__logo">Peliculas</p>
                <div className="nav__list">
                <Link to="/" className="nav__link">Inicio</Link>
                <Link to="/peliculas" className="nav__link">Películas</Link>
                <Link to="/interpretes" className="nav__link">Intérpretes</Link>
                <Link to="/admin" className="nav__link">Admin</Link>
                </div>
            </nav>
        </>
    )
}
/* eslint-disable jsx-a11y/anchor-is-valid */
import Container from "../styles/styleCompont/headerBars";
import '../styles/headerBars.css'

export default function HeaderBars() {

    return (
        <header>
            <nav className="bacground">
                <button
                    id="nav_home"
                    onClick={() => window.location.href = "#home"}
                >
                    Inicio
                </button>
                <button
                    id="nav_abouts"
                    onClick={() => window.location.href = "#abouts"}
                >
                    Acerca de mi
                </button>
                <button
                    id="nav_habilidades"
                    onClick={() => window.location.href = "#habilidades"}
                >
                    Habilidades
                </button>
                <button
                    id="nav_projets"
                    onClick={() => window.location.href = "#projets"}
                >
                    Proyectos
                </button>
                <button
                    id="nav_contacts"
                    onClick={() => window.location.href = "#contacts"}
                >
                    Contactos
                </button>

            </nav>
        </header>

    )

}
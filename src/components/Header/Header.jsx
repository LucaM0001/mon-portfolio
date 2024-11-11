import React from "react"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"
import { Link } from "react-router-dom"

function Header() {
  return (
    <header className="bg-dark text-white fixed-top">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          {/* Logo ou ton nom */}
          <Link className="navbar-brand" to="/">
            <h2 className="text-light">MonPortfolio</h2>{" "}
            {/* Remplace par ton nom */}
          </Link>
          {/* Bouton hamburger pour mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* Liens de navigation */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  À propos
                </Link>{" "}
                {/* Lien vers la section "À propos" */}
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/projects">
                  Projets
                </Link>{" "}
                {/* Lien vers la section "Projets" */}
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>{" "}
                {/* Lien vers la section "Contact" */}
              </li>
            </ul>
            {/* Icônes des réseaux sociaux */}
            <div className="d-flex ms-3">
              <a
                href="https://github.com/tonprofil"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white me-2"
              >
                <FaGithub size={25} />
              </a>
              <a
                href="https://www.linkedin.com/in/tonprofil"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white me-2"
              >
                <FaLinkedin size={25} />
              </a>
              <a href="mailto:exemple@email.com" className="text-white me-2">
                <FaEnvelope size={25} />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Bouton d'appel à l'action flottant */}
      <div className="position-fixed bottom-0 end-0 p-4">
        <a
          href="/contact"
          className="btn btn-primary btn-lg rounded-circle shadow-lg"
        >
          <span className="text-white">Contact</span>
        </a>
      </div>
    </header>
  )
}

export default Header

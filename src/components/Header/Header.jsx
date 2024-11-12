import React from "react"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="bg-dark text-white fixed-top shadow-lg">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          {/* Logo avec un effet de zoom au survol */}
          <img
            src="/151514153.png"
            width={60}
            alt="logo"
            className="logo-img"
          />
          <Link className="navbar-brand" to="/">
            <h2 className="text-light">RANDRIANIAINA Luca Mamitiana</h2>
          </Link>
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
                <Link className="nav-link hover-underline-animation" to="/">
                  À propos
                </Link>{" "}
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link hover-underline-animation"
                  to="/projects"
                >
                  Projets
                </Link>{" "}
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link hover-underline-animation"
                  to="/contact"
                >
                  Contact
                </Link>{" "}
              </li>
            </ul>
            {/* Icônes des réseaux sociaux avec animations */}
            <div className="d-flex ms-3">
              <a
                href="https://github.com/tonprofil"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white me-3 icon-hover"
              >
                <FaGithub size={25} />
              </a>
              <a
                href="https://www.linkedin.com/in/tonprofil"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white me-3 icon-hover"
              >
                <FaLinkedin size={25} />
              </a>
              <a
                href="mailto:exemple@email.com"
                className="text-white me-3 icon-hover"
              >
                <FaEnvelope size={25} />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Bouton flottant d'appel à l'action "Contact" */}
      <div className="position-fixed bottom-0 end-0 p-4">
        <a
          href="/contact"
          className="btn btn-primary btn-lg rounded-circle shadow-lg contact-btn"
        >
          <span className="text-white">Contact</span>
        </a>
      </div>
    </header>
  )
}

export default Header

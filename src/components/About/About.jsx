import React from "react"
import {
  FaReact,
  FaNodeJs,
  FaGit,
  FaHtml5,
  FaCss3,
  FaJs,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa"

function About() {
  return (
    <section className="about-container">
      <h2 className="text-center mb-5">À propos de moi</h2>

      {/* Section avec image et texte */}
      <div className="row align-items-center mb-5">
        <div className="col-md-4 text-center">
          <img
            src="https://via.placeholder.com/150" // Remplace avec ton image
            alt="Photo de profil"
            className="img-fluid rounded-circle shadow-sm about-img"
          />
        </div>
        <div className="col-md-8">
          <p className="lead text-muted">
            Développeur passionné par la création d'applications web modernes.
            Mon expertise réside dans le développement front-end avec ReactJS et
            la création d'interfaces interactives et performantes.
          </p>
        </div>
      </div>

      {/* Compétences */}
      <div className="row mb-5">
        <div className="col-md-12 text-center">
          <h3>Compétences</h3>
          <div className="skills-container">
            <div className="card skill-card">
              <FaReact size={50} className="text-primary" />
              <h5>ReactJS</h5>
              <p>Création d'applications modernes et réactives avec React.</p>
            </div>
            <div className="card skill-card">
              <FaNodeJs size={50} className="text-success" />
              <h5>Node.js</h5>
              <p>Développement de backend rapide et évolutif avec Node.js.</p>
            </div>
            <div className="card skill-card">
              <FaJs size={50} className="text-warning" />
              <h5>JavaScript</h5>
              <p>Maîtrise de JavaScript pour des applications dynamiques.</p>
            </div>
            <div className="card skill-card">
              <FaHtml5 size={50} className="text-danger" />
              <h5>HTML5</h5>
              <p>Structuration de pages web sémantiques avec HTML5.</p>
            </div>
            <div className="card skill-card">
              <FaCss3 size={50} className="text-info" />
              <h5>CSS3</h5>
              <p>
                Stylisation avancée avec CSS3 et SASS pour des designs modernes.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Formations */}
      <div className="row mb-5">
        <div className="col-md-12">
          <h3>Formations</h3>
          <div className="list-group">
            <div className="list-group-item">
              <h5>Développeur Web Full-Stack</h5>
              <p>Université XYZ - 2022</p>
              <p>
                Formation complète en développement web, incluant le front-end
                (ReactJS) et back-end (Node.js, Express).
              </p>
            </div>
            <div className="list-group-item">
              <h5>Licence Informatique</h5>
              <p>Université ABC - 2019</p>
              <p>
                Formation en informatique avec un focus sur les algorithmes et
                la programmation orientée objet.
              </p>
            </div>
            <div className="list-group-item">
              <h5>Certification ReactJS</h5>
              <p>OpenClassrooms - 2021</p>
              <p>
                Certification ReactJS, couvrant la création d'applications
                interactives et la gestion d'état avec Redux.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="row mb-5">
        <div className="col-md-12 text-center">
          <h3>Contact</h3>
          <div className="card contact-card p-4 shadow-sm">
            <h5>Coordonnées</h5>
            <p>
              <FaEnvelope /> Email:{" "}
              <a href="mailto:exemple@email.com" className="contact-link">
                exemple@email.com
              </a>
            </p>
            <p>
              <FaGithub /> GitHub:{" "}
              <a
                href="https://github.com/tonprofil"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                github.com/tonprofil
              </a>
            </p>
            <p>
              <FaLinkedin /> LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/tonprofil"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                linkedin.com/in/tonprofil
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

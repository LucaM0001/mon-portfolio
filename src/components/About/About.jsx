import React, { useState } from "react"
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
  FaFileWord,
  FaFileExcel,
  FaFilePowerpoint,
  FaDatabase,
} from "react-icons/fa"
import { SiTypescript, SiCodeigniter, SiPhp } from "react-icons/si" // Import PHP icon

const About = () => {
  const [formations, setFormations] = useState([
    {
      title:
        "Informatique de Gestion Génie Logiciel et Intélligence Artificielle (IGGLIA)",
      place: "Institut Supérieur Polytechnique de Madagascar (ISPM)",
      year: "2021 - Présent",
      description:
        "Formation en Informatique de Gestion, Génie Logiciel et Intelligence Artificielle, combinant la gestion des systèmes informatiques, le développement logiciel avancé et l'étude des technologies d'intelligence artificielle pour des solutions innovantes.",
    },
    {
      title: "Gestion de Base de Données Relationnelles (Microsoft Access)",
      place: "Univers Infos",
      year: "2020",
      description:
        "Formation spécialisée dans la gestion et l'administration des bases de données relationnelles, avec une approche pratique sur Microsoft Access et la création de bases de données relationnelles.",
    },
    {
      title: "Formation en Bureautique",
      place: "CFM",
      year: "2019",
      description:
        "Formation sur l'utilisation des logiciels bureautiques, notamment Microsoft Word, Excel et PowerPoint, pour améliorer la productivité dans le milieu professionnel.",
    },
  ])

  const displayFormations = formations.map((formation) => (
    <div className="list-group-item">
      <h5>{formation.title}</h5>
      <p>
        {formation.place} - {formation.year}
      </p>
      <p>{formation.description}</p>
    </div>
  ))

  return (
    <section className="about-container">
      <h2 className="text-center mb-5">À propos de moi</h2>

      {/* Section avec image et texte */}
      <div className="row align-items-center mb-5">
        <div className="col-md-4 text-center">
          <a href="/me.jpg">
            <img
              src="/me.jpg"
              width={200}
              alt="Photo de profil"
              className="img-fluid rounded-circle shadow-sm about-img"
            />
          </a>
        </div>
        <div className="col-md-8">
          <p className="lead text-muted">
            Développeur passionné spécialisé dans la création d'applications web
            modernes. Mon expertise couvre le développement front-end avec
            ReactJS, l'utilisation de TypeScript pour un code plus robuste, et
            la stack MERN pour des applications full-stack performantes. Je
            maîtrise également CodeIgniter pour des solutions backend en PHP,
            offrant des interfaces interactives, sécurisées, et optimisées.
          </p>
        </div>
      </div>

      {/* Compétences */}
      <div className="row mb-5">
        <div className="col-md-12 text-center">
          <h3>Compétences</h3>

          {/* Langages */}
          <h4>Langages</h4>
          <div className="skills-container">
            <div className="card skill-card">
              <FaJs size={50} className="text-warning" />
              <h5>JavaScript</h5>
              <p>Maîtrise de JavaScript pour des applications dynamiques.</p>
            </div>
            <div className="card skill-card">
              <SiTypescript size={50} className="text-info" />
              <h5>TypeScript</h5>
              <p>Développement sécurisé avec typage statique.</p>
            </div>
            <div className="card skill-card">
              <SiPhp size={50} className="text-primary" />
              <h5>PHP</h5>
              <p>
                Développement back-end avec PHP pour des applications
                dynamiques.
              </p>
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

          {/* Frameworks */}
          <h4>Frameworks</h4>
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
              <SiCodeigniter size={50} className="text-danger" />
              <h5>CodeIgniter</h5>
              <p>Framework PHP pour des applications performantes.</p>
            </div>
          </div>

          {/* Software */}
          <h4>Logiciels</h4>
          <div className="skills-container">
            <div className="card skill-card">
              <FaFileWord size={50} className="text-primary" />
              <h5>Microsoft Word</h5>
              <p>Création de documents professionnels et rapports.</p>
            </div>
            <div className="card skill-card">
              <FaFileExcel size={50} className="text-success" />
              <h5>Microsoft Excel</h5>
              <p>Analyse de données et création de tableaux complexes.</p>
            </div>
            <div className="card skill-card">
              <FaFilePowerpoint size={50} className="text-danger" />
              <h5>Microsoft PowerPoint</h5>
              <p>Création de présentations visuellement attrayantes.</p>
            </div>
            <div className="card skill-card">
              <FaDatabase size={50} className="text-info" />
              <h5>Microsoft Access</h5>
              <p>Création et gestion de bases de données relationnelles.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Formations */}
      <div className="row mb-5">
        <div className="col-md-12">
          <h3>Formations</h3>
          <div className="list-group">{displayFormations}</div>
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
                lucamamitiana@gmail.com
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
                https://github.com/LucaM0001
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
                https://www.linkedin.com/in/luca-mamitiana-randrianiaina-5497b7286
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

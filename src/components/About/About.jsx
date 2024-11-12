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
import { SiTypescript, SiCodeigniter, SiPhp } from "react-icons/si"

const About = () => {
  const [formations, setFormations] = useState([
    {
      title:
        "Informatique de Gestion Génie Logiciel et Intélligence Artificielle (IGGLIA)",
      place: "Institut Supérieur Polytechnique de Madagascar (ISPM)",
      year: "2021 - Présent",
      description:
        "Formation en Informatique de Gestion, Génie Logiciel et Intelligence Artificielle...",
    },
    {
      title: "Gestion de Base de Données Relationnelles (Microsoft Access)",
      place: "Univers Infos",
      year: "2020",
      description:
        "Formation spécialisée dans la gestion et l'administration des bases de données relationnelles...",
    },
    {
      title: "Formation en Bureautique",
      place: "CFM",
      year: "2019",
      description: "Formation sur l'utilisation des logiciels bureautiques...",
    },
  ])

  const displayFormations = formations.map((formation, index) => (
    <div key={index} className="list-group-item hover-card">
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
          <a href="/me.jpg" className="profile-img-container">
            <img
              src="/me.jpg"
              width={200}
              alt="Photo de profil"
              className="img-fluid rounded-circle shadow-lg profile-img"
            />
          </a>
        </div>
        <div className="col-md-8">
          <p className="lead text-muted">
            Développeur passionné spécialisé dans la création d'applications web
            modernes avec ReactJS, TypeScript, et MERN. Mon expertise s'étend
            aussi à CodeIgniter pour des solutions backend en PHP, garantissant
            des applications performantes et sécurisées.
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
            {[
              {
                icon: <FaJs size={50} className="text-warning" />,
                title: "JavaScript",
                description: "Maîtrise pour des applications dynamiques.",
              },
              {
                icon: <SiTypescript size={50} className="text-info" />,
                title: "TypeScript",
                description: "Développement sécurisé avec typage statique.",
              },
              {
                icon: <SiPhp size={50} className="text-primary" />,
                title: "PHP",
                description: "Développement back-end dynamique.",
              },
              {
                icon: <FaHtml5 size={50} className="text-danger" />,
                title: "HTML5",
                description: "Structuration de pages web sémantiques.",
              },
              {
                icon: <FaCss3 size={50} className="text-info" />,
                title: "CSS3",
                description: "Stylisation avancée avec CSS3 et SASS.",
              },
            ].map((skill, index) => (
              <div key={index} className="card skill-card hover-card">
                {skill.icon}
                <h5>{skill.title}</h5>
                <p>{skill.description}</p>
              </div>
            ))}
          </div>

          {/* Frameworks */}
          <h4>Frameworks et Librairies</h4>
          <div className="skills-container">
            {[
              {
                icon: <FaReact size={50} className="text-primary" />,
                title: "ReactJS",
                description: "Création d'applications modernes et réactives.",
              },
              {
                icon: <FaNodeJs size={50} className="text-success" />,
                title: "Node.js",
                description: "Backend rapide et évolutif.",
              },
              {
                icon: <SiCodeigniter size={50} className="text-danger" />,
                title: "CodeIgniter",
                description: "Framework PHP performant.",
              },
            ].map((framework, index) => (
              <div key={index} className="card skill-card hover-card">
                {framework.icon}
                <h5>{framework.title}</h5>
                <p>{framework.description}</p>
              </div>
            ))}
          </div>

          {/* Logiciels */}
          <h4>Logiciels</h4>
          <div className="skills-container">
            {[
              {
                icon: <FaFileWord size={50} className="text-primary" />,
                title: "Microsoft Word",
                description: "Création de documents professionnels.",
              },
              {
                icon: <FaFileExcel size={50} className="text-success" />,
                title: "Microsoft Excel",
                description: "Analyse de données complexes.",
              },
              {
                icon: <FaFilePowerpoint size={50} className="text-danger" />,
                title: "Microsoft PowerPoint",
                description: "Création de présentations visuelles.",
              },
              {
                icon: <FaDatabase size={50} className="text-info" />,
                title: "Microsoft Access",
                description: "Création et gestion de bases de données.",
              },
            ].map((software, index) => (
              <div key={index} className="card skill-card hover-card">
                {software.icon}
                <h5>{software.title}</h5>
                <p>{software.description}</p>
              </div>
            ))}
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
          <div className="card contact-card p-4 shadow-lg">
            <h5>Coordonnées</h5>
            <p>
              <FaEnvelope /> Email:{" "}
              <a href="mailto:lucamamitiana@gmail.com" className="contact-link">
                lucamamitiana@gmail.com
              </a>
            </p>
            <p>
              <FaGithub /> GitHub:{" "}
              <a
                href="https://github.com/LucaM0001"
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
                href="https://www.linkedin.com/in/luca-mamitiana-randrianiaina-5497b7286"
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

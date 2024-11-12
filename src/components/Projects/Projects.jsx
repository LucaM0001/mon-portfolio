import React, { useState } from "react"
import { FaGithub, FaLink } from "react-icons/fa"

const Projects = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "MG-Store",
      description:
        "MG-Store est une application web moderne développée en utilisant React, Bootstrap et Firebase. Elle a été conçue pour offrir une expérience fluide et interactive aux utilisateurs dans un contexte de commerce en ligne.",
      github: "https://github.com/Princee04/Mg-Store/tree/LucaM0001",
      demo: "https://tonprofil.github.io/projet1",
      image: "/mg-store.png",
      disabled: false,
    },
    {
      id: 2,
      title: "Library-Management",
      description:
        "Le système de gestion de bibliothèque ('Library Management System') est une application web développée avec CodeIgniter, Bootstrap et MySQL. Ce projet a pour objectif de faciliter la gestion des livres, des membres et des emprunts dans une bibliothèque. Grâce à une interface moderne et réactive construite avec Bootstrap, il permet aux utilisateurs de rechercher des livres, de consulter les détails de chaque ouvrage et de gérer leurs emprunts.",
      github: "https://github.com/LucaM0001/LibraryManagement ",
      demo: "https://tonprofil.github.io/projet3",
      image: "/library-management.png",
      disabled: true,
    },
    {
      id: 3,
      title: "Marvel-Quiz",
      description:
        "Marvel-Quiz est une application web interactive développée avec React, Bootstrap, Redux, et Firebase. Cette application permet aux fans de l'univers Marvel de tester leurs connaissances à travers des quiz divertissants et engageants.",
      github: "https://github.com/LucaM0001/marvel-quiz",
      demo: "https://marvel-quiz-e7a08.web.app/",
      image: "/marvel-quiz.png",
      disabled: false,
    },
    {
      id: 4,
      title: "Chat-App",
      description:
        "Une application de chat instantané avec React, Bootstrap, Node.js, Socket.IO, et MongoDB. Elle permet des communications en temps réel avec messages instantanés, notifications push, et partage de fichiers.",
      github: "https://github.com/LucaM0001/Chat-App",
      demo: "https://tonprofil.github.io/projet3",
      image: "/chat-app.png",
      disabled: false,
    },
  ])

  return (
    <section id="projects" className="container py-5">
      <h2 className="text-center mb-5">Mes Récents Projets</h2>
      <div className="row">
        {projects.map((project) => (
          <div className="col-md-4 mb-4" key={project.id}>
            <div className="card shadow-sm border-light rounded">
              <img
                src={project.image}
                alt={project.title}
                className="card-img-top rounded"
              />
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <div className="d-flex justify-content-between">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-dark"
                  >
                    <FaGithub /> GitHub
                  </a>

                  {!project.disabled ? (
                    <a
                      href={project.demo}
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      <FaLink /> Démo
                    </a>
                  ) : (
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      <FaLink /> Démo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects

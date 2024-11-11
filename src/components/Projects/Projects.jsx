import React from "react"
import { FaGithub, FaLink } from "react-icons/fa"

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Projet 1",
      description: "Une description courte du projet 1.",
      github: "https://github.com/tonprofil/projet1",
      demo: "https://tonprofil.github.io/projet1",
      image: "https://via.placeholder.com/400x300?text=Image+Projet+1", // Placeholder pour le projet 1
    },
    {
      id: 2,
      title: "Projet 2",
      description: "Une description courte du projet 2.",
      github: "https://github.com/tonprofil/projet2",
      demo: "https://tonprofil.github.io/projet2",
      image: "https://via.placeholder.com/400x300?text=Image+Projet+2", // Placeholder pour le projet 2
    },
    {
      id: 3,
      title: "Projet 3",
      description: "Une description courte du projet 3.",
      github: "https://github.com/tonprofil/projet3",
      demo: "https://tonprofil.github.io/projet3",
      image: "https://via.placeholder.com/400x300?text=Image+Projet+3", // Placeholder pour le projet 3
    },
  ]

  return (
    <section id="projects" className="container py-5">
      <h2 className="text-center mb-5">Mes Projets</h2>
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
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    <FaLink /> Démo
                  </a>
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

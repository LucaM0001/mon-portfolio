import React, { useRef } from "react"
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  Button,
  ButtonGroup,
} from "react-bootstrap"
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaGlobe,
  FaJava,
  FaJsSquare,
  FaReact,
  FaLinux,
  FaWindows,
  FaProjectDiagram,
  FaGraduationCap,
  FaLanguage,
  FaFutbol,
  FaBasketballBall,
  FaGamepad,
  FaTableTennis,
  FaFilm,
  FaSitemap,
  FaBirthdayCake,
  FaMapMarkerAlt,
  FaFlag,
  FaHome,
} from "react-icons/fa"
import {
  SiCsharp,
  SiMysql,
  SiCodeigniter,
  SiFirebase,
  SiMongodb,
  SiCanva,
  SiHtml5,
  SiCss3,
  SiPhp,
} from "react-icons/si"
import html2canvas from "html2canvas" // Importation de html2canvas
import "./CuriculumVitae.css"
import { useReactToPrint } from "react-to-print"

const CuriculumVitae = () => {
  const cvRef = useRef(null)

  // Fonction pour l'exportation en image avec format et qualité personnalisés
  const handleExportAsImage = (format = "png", quality = 1.0) => {
    html2canvas(cvRef.current).then((canvas) => {
      // Convertir le canvas en image selon le format choisi
      const imageData = canvas.toDataURL(`image/${format}`, quality)

      // Créer un lien pour télécharger l'image
      const link = document.createElement("a")
      link.href = imageData
      link.download = `cv-luca.${format}` // Nom du fichier avec l'extension choisie
      link.click()
    })
  }

  const handlePrint = useReactToPrint({
    contentRef: cvRef,
    documentTitle: "CV de Luca Mamitiaina",
  })

  return (
    <div style={{ marginTop: "6rem" }}>
      {/* Boutons d'exportation */}
      <div className="text-center mt-4">
        <ButtonGroup aria-label="Export options">
          <Button variant="primary" onClick={handlePrint}>
            Exporter en PDF
          </Button>
          <Button
            variant="secondary"
            onClick={() => handleExportAsImage("png")}
          >
            Exporter en Image (PNG)
          </Button>
          <Button variant="info" onClick={() => handleExportAsImage("jpeg")}>
            Exporter en Image (JPEG)
          </Button>
        </ButtonGroup>
      </div>

      <Container className="my-5 cv-container" ref={cvRef}>
        {/* Profil */}
        <Card className="mb-4 shadow-sm profile-card">
          <Card.Body>
            <Row>
              <Col md={4} className="text-center profile-section">
                <img
                  src="/Luca.jpg"
                  alt="Profile"
                  className="rounded-circle profile-img mb-3"
                />
                <h3 className="name">Luca Mamitiaina Randriania</h3>
                <p className="job-title">Développeur Web</p>
              </Col>
              <Col md={8} className="contact-info">
                <ListGroup variant="flush">
                  {/* Contact Information */}
                  <ListGroup.Item className="contact-group">
                    <h5>Contact</h5>
                    <div>
                      <FaEnvelope className="icon email" />{" "}
                      <span>lucamamitiana@gmail.com</span>
                    </div>
                    <div>
                      <FaPhone className="icon phone" />{" "}
                      <span>0349009168 / 0327484251</span>
                    </div>
                    <div>
                      <FaLinkedin className="icon icon-link" />{" "}
                      <a href="https://www.linkedin.com/in/luca-mamitiana-randri-aniaina-5497b7286">
                        LinkedIn
                      </a>
                    </div>
                    <div>
                      <FaGithub className="icon icon-github" />{" "}
                      <a href="https://github.com/LucaM0001">GitHub</a>
                    </div>
                    <div>
                      <FaGlobe className="icon icon-portfolio" />{" "}
                      <a href="https://mon-portfolio-iota-ecru.vercel.app">
                        Portfolio
                      </a>
                    </div>
                  </ListGroup.Item>

                  {/* Personal Information */}
                  <ListGroup.Item className="personal-group">
                    <h5>Informations personnelles</h5>
                    <div>
                      <FaBirthdayCake className="icon birthday" />{" "}
                      <strong>Date de naissance :</strong> 20 Novembre 2003
                    </div>
                    <div>
                      <FaMapMarkerAlt className="icon location" />{" "}
                      <strong>Lieu de naissance :</strong> Moramanga
                    </div>
                    <div>
                      <FaFlag className="icon nationality" />{" "}
                      <strong>Nationalité :</strong> Malagasy
                    </div>
                    <div>
                      <FaHome className="icon home" />{" "}
                      <strong>Logement :</strong> Lot VS 58 AH
                    </div>
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        {/* Compétences Techniques */}
        <Card className="mb-4 shadow-sm section-card">
          <Card.Body>
            <h4 className="section-title">Compétences Techniques</h4>
            <Row>
              <Col md={6}>
                <p>
                  <strong>Langages :</strong>{" "}
                  <SiCsharp className="skill-icon csharp" /> C#,{" "}
                  <FaJava className="skill-icon js" /> Java, Pascal
                </p>
                <p>
                  <strong>Développement Web :</strong>{" "}
                  <SiHtml5 className="skill-icon html" /> HTML,{" "}
                  <SiCss3 className="skill-icon css" /> CSS,{" "}
                  <FaJsSquare className="skill-icon js" /> JavaScript,{" "}
                  <SiPhp className="skill-icon php" /> PHP,{" "}
                  <FaReact className="skill-icon react" /> ReactJS,{" "}
                  <SiCodeigniter className="skill-icon codeigniter" />{" "}
                  CodeIgniter
                </p>
                <p>
                  <strong>Base de données :</strong>{" "}
                  <SiMysql className="skill-icon mysql" /> MySQL, Access,{" "}
                  <SiFirebase className="skill-icon firebase" /> Firebase,{" "}
                  <SiMongodb className="skill-icon mongodb" /> MongoDB
                </p>
              </Col>
              <Col md={6}>
                <p>
                  <strong>Outils :</strong> Microsoft Office,{" "}
                  <SiCanva className="skill-icon" /> Canva
                </p>
                <p>
                  <strong>Méthodes d'analyse :</strong>{" "}
                  <FaSitemap className="skill-icon method" /> MERISE, Agile et
                  Scrum
                </p>
                <p>
                  <strong>Systèmes d'exploitation :</strong>{" "}
                  <FaLinux className="skill-icon os Linux" /> Linux (Debian),{" "}
                  <FaWindows className="skill-icon os Windows" /> Windows
                </p>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        {/* Projets */}
        <Card className="mb-4 shadow-sm section-card">
          <Card.Body>
            <h4 className="section-title">Projets</h4>
            <ul>
              <li>
                <FaProjectDiagram className="skill-icon project" />{" "}
                <strong>MG-Store (2024)</strong> : Application Web de commerce
                en ligne (React, Bootstrap, Firebase)
                <div>
                  <a
                    href="https://github.com/LucaM0001/MG-Store"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="icon-link" />{" "}
                    https://github.com/LucaM0001/MG-Store
                  </a>
                </div>
              </li>
              <li>
                <FaProjectDiagram className="skill-icon project" />{" "}
                <strong>Marvel-Quiz (2023)</strong> : Application interactive de
                quiz sur l'univers Marvel (React, Bootstrap, Redux, Firebase)
                <div>
                  <a
                    href="https://github.com/LucaM0001/Marvel-Quiz"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="icon-link" />{" "}
                    https://github.com/LucaM0001/Marvel-Quiz
                  </a>
                </div>
              </li>
              <li>
                <FaProjectDiagram className="skill-icon project" />{" "}
                <strong>BookVault (2022)</strong> : Gestion de bibliothèque
                (CodeIgniter, MySQL, Bootstrap)
                <div>
                  <a
                    href="https://github.com/LucaM0001/BookVault"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="icon-link" />{" "}
                    https://github.com/LucaM0001/BookVault
                  </a>
                </div>
              </li>
              <li>
                <FaProjectDiagram className="skill-icon project" />{" "}
                <strong>Chat-App (2021)</strong> : Application de chat en temps
                réel (React, Bootstrap, Node.js, Socket.IO, MongoDB)
                <div>
                  <a
                    href="https://github.com/LucaM0001/Chat-App"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="icon-link" />{" "}
                    https://github.com/LucaM0001/Chat-App
                  </a>
                </div>
              </li>
              <li>
                <FaProjectDiagram className="skill-icon project" />{" "}
                <strong>OrganizeMe (2020)</strong> : Gestion de tâches (ReactJS,
                Bootstrap, LocalStorage)
                <div>
                  <a
                    href="https://github.com/LucaM0001/OrganizeMe"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="icon-link" />{" "}
                    https://github.com/LucaM0001/OrganizeMe
                  </a>
                </div>
              </li>
              <li>
                <FaProjectDiagram className="skill-icon project" />{" "}
                <strong>CountryWise (2020)</strong> : API REST d'informations
                géographiques (ReactJS, Bootstrap)
                <div>
                  <a
                    href="https://github.com/LucaM0001/CountryWise"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="icon-link" />{" "}
                    https://github.com/LucaM0001/CountryWise
                  </a>
                </div>
              </li>
              <li>
                <FaProjectDiagram className="skill-icon project" />{" "}
                <strong>CodeCraft (2019)</strong> : Application de codage en
                ligne (HTML, CSS, JS, Firebase)
                {/* Pas de lien GitHub pour ce projet */}
              </li>
            </ul>
          </Card.Body>
        </Card>

        {/* Langues */}
        <Card className="mb-4 shadow-sm section-card">
          <Card.Body>
            <h4 className="section-title">Langues</h4>
            <div className="d-flex justify-content-around">
              <div>
                <FaLanguage className="skill-icon language" />{" "}
                <strong>Malagasy</strong> : Langue maternelle
              </div>
              <div>
                <FaLanguage className="skill-icon language" />{" "}
                <strong>Français</strong> : Courant
              </div>
              <div>
                <FaLanguage className="skill-icon language" />{" "}
                <strong>Anglais</strong> : Niveau intermédiaire
              </div>
            </div>
          </Card.Body>
        </Card>

        {/* Loisirs */}
        <Card className="mb-4 shadow-sm section-card">
          <Card.Body>
            <h4 className="section-title">Loisirs</h4>
            <div className="d-flex justify-content-around">
              <div>
                <FaFutbol className="hobby skill-icon sports" /> Football
              </div>
              <div>
                <FaBasketballBall className="hobby skill-icon sports" />{" "}
                Basketball
              </div>
              <div>
                {" "}
                <FaGamepad className="hobby skill-icon gaming" /> Jeux vidéo
              </div>
              <div>
                <FaTableTennis className="hobby skill-icon sports" /> Tennis de
                table
              </div>
              <div>
                <FaFilm className="hobby skill-icon entertainment" /> Cinéma
              </div>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </div>
  )
}

export default CuriculumVitae

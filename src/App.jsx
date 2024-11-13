import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header/Header"
import About from "./components/About/About"
import Projects from "./components/Projects/Projects"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import { ToastContainer } from "react-toastify"
import "react-toastify/ReactToastify.min.css"
import CuriculumVitae from "./components/CuriculumVitae/CuriculumVitae"

const App = () => {
  return (
    <>
      <ToastContainer position="top-left" />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/curiculumvitae" element={<CuriculumVitae />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App

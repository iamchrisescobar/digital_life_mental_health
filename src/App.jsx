import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import DataCritique from './pages/DataCritique.jsx'
import AboutUs from './pages/AboutUs.jsx'
import Sources from './pages/Sources.jsx'
import Narrative from './pages/Narrative.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/data-critique" element={<DataCritique />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/narrative" element={<Narrative />} />
          <Route path="/sources" element={<Sources />} />
        </Routes>
      </main>
      <footer className="footer">
        <p>© {new Date().getFullYear()} Digital Life & Student Mental Health</p>
      </footer>
    </>
  )
}

import React, { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pendingPathRef = useRef(null)
  const location = useLocation()
  const navigate = useNavigate()

  // Close the mobile menu on route change
  useEffect(() => { setOpen(false) }, [location.pathname])

  // Reload after nav-based route changes to force a fresh render of the destination page
  useEffect(() => {
    if (pendingPathRef.current && pendingPathRef.current === location.pathname) {
      pendingPathRef.current = null
      window.location.reload()
    }
  }, [location.pathname])

  const handleNavClick = targetPath => event => {
    event.preventDefault()

    // If the user clicks the link for the current page, just reload
    if (location.pathname === targetPath) {
      window.location.reload()
      return
    }

    pendingPathRef.current = targetPath
    navigate(targetPath)
  }

  return (
    <header className="nav-wrapper">
      <nav className="nav">
        <div className="brand">
          <Link to="/" className="brand-link" onClick={handleNavClick('/')}>
            Digital Life &amp; Student Mental Health
          </Link>
        </div>

        {/* Desktop links */}
        <ul className="links">
          <li><NavLink to="/" onClick={handleNavClick('/')} className={({isActive}) => isActive ? 'active' : ''}>Home</NavLink></li>
          <li><NavLink to="/data-critique" onClick={handleNavClick('/data-critique')} className={({isActive}) => isActive ? 'active' : ''}>Data Critique</NavLink></li>
          <li><NavLink to="/about" onClick={handleNavClick('/about')} className={({isActive}) => isActive ? 'active' : ''}>About Us</NavLink></li>
          <li><NavLink to="/sources" onClick={handleNavClick('/sources')} className={({isActive}) => isActive ? 'active' : ''}>Sources</NavLink></li>
        </ul>

        <ThemeToggle />
        
        {/* Hamburger for small screens */}
        <button
          aria-label="Menu"
          className="hamburger"
          onClick={() => setOpen(v => !v)}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>

        {/* Mobile dropdown */}
        {open && (
          <div className="mobile-menu">
            <NavLink to="/" onClick={handleNavClick('/')} className="mobile-link">Home</NavLink>
            <NavLink to="/data-critique" onClick={handleNavClick('/data-critique')} className="mobile-link">Data Critique</NavLink>
            <NavLink to="/about" onClick={handleNavClick('/about')} className="mobile-link">About Us</NavLink>
            <NavLink to="/sources" onClick={handleNavClick('/sources')} className="mobile-link">Sources</NavLink>
          </div>
        )}
      </nav>
    </header>
  )
}

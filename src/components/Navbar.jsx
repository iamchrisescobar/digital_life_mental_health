import React, { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  // Close the mobile menu on route change
  useEffect(() => { setOpen(false) }, [location.pathname])

  return (
    <header className="nav-wrapper">
      <nav className="nav">
        <div className="brand">
          <Link to="/" className="brand-link">
            Digital Life &amp; Student Mental Health
          </Link>
        </div>

        {/* Desktop links */}
        <ul className="links">
          <li><NavLink to="/" className={({isActive}) => isActive ? 'active' : ''}>Home</NavLink></li>
          <li><NavLink to="/data-critique" className={({isActive}) => isActive ? 'active' : ''}>Data Critique</NavLink></li>
          <li><NavLink to="/about" className={({isActive}) => isActive ? 'active' : ''}>About Us</NavLink></li>
          <li><NavLink to="/sources" className={({isActive}) => isActive ? 'active' : ''}>Sources</NavLink></li>
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
            <NavLink to="/" className="mobile-link">Home</NavLink>
            <NavLink to="/data-critique" className="mobile-link">Data Critique</NavLink>
            <NavLink to="/about" className="mobile-link">About Us</NavLink>
            <NavLink to="/sources" className="mobile-link">Sources</NavLink>
          </div>
        )}
      </nav>
    </header>
  )
}

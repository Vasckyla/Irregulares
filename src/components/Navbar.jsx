
import { NavLink } from 'react-router-dom'
import './navbar.css'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="navbar-content">
        <div className="brand">Irregulares</div>
        <button className="burger" onClick={() => setOpen(!open)}>
          ☰
        </button>
        <nav className={open ? 'open' : ''}>
          <ul>
            <li><NavLink to="/" end onClick={() => setOpen(false)}>Inicio</NavLink></li>
            <li><NavLink to="/resenas" onClick={() => setOpen(false)}>Reseñas</NavLink></li>
            <li><NavLink to="/blog" onClick={() => setOpen(false)}>Blog</NavLink></li>
            <li><NavLink to="/podcast" onClick={() => setOpen(false)}>Podcast</NavLink></li>
            <li><NavLink to="/contacto" onClick={() => setOpen(false)}>Contacto</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

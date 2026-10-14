import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const enlaces = [
  { to: '/', label: 'Inicio' },
  { to: '/sobre-nosotras', label: 'Sobre nosotras' },
  { to: '/areas', label: 'Áreas de práctica' },
  { to: '/preguntas-frecuentes', label: 'Preguntas frecuentes' },
  { to: '/contacto', label: 'Contacto' }
]

export default function Header() {
  const [abierto, setAbierto] = useState(false)
  const { pathname } = useLocation()

  return (
    <header className="site-header">
      <div className="container nav">
        <Link to="/" className="brand" aria-label="Inicio">
          <span className="brand-mark" aria-hidden="true">M</span>
          <span>
            Montenegro {'&'} Asociadas
            <small>Abogadas de Familia</small>
          </span>
        </Link>
        <nav className="nav-links" aria-label="Navegación principal">
          {enlaces.map(e => (
            <Link key={e.to} to={e.to} aria-current={pathname === e.to ? 'page' : undefined}>
              {e.label}
            </Link>
          ))}
        </nav>
        <button
          className="menu-toggle"
          aria-label={abierto ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={abierto}
          aria-controls="mobile-menu"
          onClick={() => setAbierto(!abierto)}
        >
          <span></span>
        </button>
      </div>
      {abierto && (
        <nav id="mobile-menu" className={`mobile-menu ${abierto ? 'open' : ''}`} aria-label="Navegación móvil">
          {enlaces.map(e => (
            <Link
              key={e.to}
              to={e.to}
              onClick={() => setAbierto(false)}
              aria-current={pathname === e.to ? 'page' : undefined}
            >
              {e.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}

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
    <header className="sticky top-0 z-50 bg-blanco-roto/96 backdrop-blur border-b border-borde">
      <div className="max-w-site mx-auto px-5 flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2 font-serif text-petroleo text-lg font-semibold">
          <span className="w-9 h-9 rounded-full bg-petroleo text-dorado grid place-items-center font-bold">M</span>
          <span>
            Montenegro & Asociadas
            <small className="block font-sans text-xs tracking-widest uppercase text-pizarra">Abogadas de Familia</small>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6" aria-label="Navegación principal">
          {enlaces.map(e => (
            <Link
              key={e.to}
              to={e.to}
              aria-current={pathname === e.to ? 'page' : undefined}
              className={`text-sm font-medium transition-colors relative py-1
                ${pathname === e.to ? 'text-petroleo font-semibold' : 'text-grafito hover:text-dorado'}`}
            >
              {e.label}
              {pathname === e.to && (
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-dorado" />
              )}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden w-10 h-10 grid place-items-center rounded bg-transparent border-0 cursor-pointer"
          onClick={() => setAbierto(!abierto)}
          aria-label={abierto ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={abierto}
          aria-controls="mobile-menu"
        >
          <span className="block w-5 h-0.5 bg-petroleo relative">
            <span className={`absolute left-0 w-full h-0.5 bg-petroleo transition-all ${abierto ? 'top-0 rotate-45' : '-top-1.5'}`} />
            <span className={`absolute left-0 w-full h-0.5 bg-petroleo transition-all ${abierto ? 'top-0 -rotate-45' : 'top-1.5'}`} />
          </span>
        </button>
      </div>

      {abierto && (
        <nav id="mobile-menu" className="md:hidden bg-white border-t border-borde" aria-label="Navegación móvil">
          {enlaces.map(e => (
            <Link
              key={e.to}
              to={e.to}
              onClick={() => setAbierto(false)}
              aria-current={pathname === e.to ? 'page' : undefined}
              className={`block px-5 py-3 border-b border-borde font-medium
                ${pathname === e.to ? 'bg-blanco-roto text-petroleo border-l-4 border-l-dorado' : 'text-grafito'}`}
            >
              {e.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}

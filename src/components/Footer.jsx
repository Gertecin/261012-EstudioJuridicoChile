import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-petroleo text-white/78 mt-8 pt-12 pb-6">
      <div className="max-w-site mx-auto px-5 grid gap-8 md:grid-cols-[2fr_1fr_1fr]">
        <div>
          <h4 className="text-white text-base mb-2 font-serif">Montenegro & Asociadas</h4>
          <p className="text-sm">Estudio jurídico de familia en Viña del Mar.</p>
        </div>

        <div>
          <h4 className="text-white text-base mb-2 font-serif">Navegación</h4>
          <p><Link to="/sobre-nosotras" className="hover:text-dorado">Sobre nosotras</Link></p>
          <p><Link to="/areas" className="hover:text-dorado">Áreas de práctica</Link></p>
          <p><Link to="/preguntas-frecuentes" className="hover:text-dorado">Preguntas frecuentes</Link></p>
          <p><Link to="/contacto" className="hover:text-dorado">Contacto</Link></p>
        </div>

        <div>
          <h4 className="text-white text-base mb-2 font-serif">Contacto</h4>
          {/* 1.1 Color igual al de los enlaces de navegación */}
          <p className="text-white/78">Av. Libertad 1234, Of. 801<br />Viña del Mar</p>
          <p className="text-white/78">+56 32 200 0000<br />contacto@ejemplo.cl</p>
        </div>
      </div>

      {/* 1.2 Copyright reubicado al centro, texto legal a la izquierda */}
      <div className="max-w-site mx-auto px-5 mt-8 pt-4 border-t border-white/12 flex flex-wrap gap-4 justify-between items-center text-xs text-white/55">
        <p className="text-white/78">
          <Link to="/terminos-legales" className="hover:text-dorado">Términos legales</Link>
          {' · '}
          <Link to="/contacto" className="hover:text-dorado">Política de privacidad</Link>
        </p>
        <p className="text-center flex-grow">© {year} Montenegro & Asociadas. Todos los derechos reservados.</p>
        <span className="hidden sm:inline">Viña del Mar, Chile</span>
      </div>
    </footer>
  )
}

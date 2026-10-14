import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h4>Montenegro {'&'} Asociadas</h4>
          <p>Estudio jurídico de familia en Viña del Mar.</p>
        </div>
        <div>
          <h4>Navegación</h4>
          <p><Link to="/sobre-nosotras">Sobre nosotras</Link></p>
          <p><Link to="/areas">Áreas de práctica</Link></p>
          <p><Link to="/preguntas-frecuentes">Preguntas frecuentes</Link></p>
          <p><Link to="/contacto">Contacto</Link></p>
        </div>
        <div>
          <h4>Contacto</h4>
          <p>Av. Libertad 1234, Of. 801<br />Viña del Mar</p>
          <p>+56 32 200 0000<br />contacto@ejemplo.cl</p>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {year} Montenegro {'&'} Asociadas. Todos los derechos reservados.</span>
        <span><Link to="/terminos-legales">Términos legales</Link> · <Link to="/contacto">Política de privacidad</Link></span>
      </div>
    </footer>
  )
}

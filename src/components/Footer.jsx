import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer" style={{ background: '#1E293B', color: 'rgba(255,255,255,0.85)', padding: '3rem 0 1.5rem', marginTop: '2rem' }}>
      <div className="container" style={{ maxWidth: '1180px', margin: '0 auto', padding: '0 1.25rem' }}>
        <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
          <div>
            <h4 style={{ color: '#fff', fontSize: '1rem', marginBottom: '.8rem', fontFamily: 'Playfair Display, serif' }}>Montenegro {'&'} Asociadas</h4>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '.95rem', lineHeight: '1.6' }}>Estudio jurídico de familia en Viña del Mar.</p>
          </div>
          <div>
            <h4 style={{ color: '#fff', fontSize: '1rem', marginBottom: '.8rem', fontFamily: 'Playfair Display, serif' }}>Navegación</h4>
            <p><Link to="/sobre-nosotras" style={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'none' }}>Sobre nosotras</Link></p>
            <p><Link to="/areas" style={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'none' }}>Áreas de práctica</Link></p>
            <p><Link to="/preguntas-frecuentes" style={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'none' }}>Preguntas frecuentes</Link></p>
            <p><Link to="/contacto" style={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'none' }}>Contacto</Link></p>
          </div>
          <div>
            <h4 style={{ color: '#fff', fontSize: '1rem', marginBottom: '.8rem', fontFamily: 'Playfair Display, serif' }}>Contacto</h4>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '.95rem', lineHeight: '1.6' }}>Av. Libertad 1234, Of. 801<br />Viña del Mar</p>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '.95rem', lineHeight: '1.6' }}>+56 32 200 0000<br />contacto@ejemplo.cl</p>
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.12)', marginTop: '2rem', paddingTop: '1.2rem', display: 'flex', flexWrap: 'wrap', gap: '.8rem', justifyContent: 'space-between', fontSize: '.85rem', color: 'rgba(255,255,255,0.65)' }}>
          <span>© {year} Montenegro {'&'} Asociadas. Todos los derechos reservados.</span>
          <span>
            <Link to="/terminos-legales" style={{ color: 'rgba(255,255,255,0.65)', textDecoration: 'none' }}>Términos legales</Link>
            {' · '}
            <Link to="/privacidad" style={{ color: 'rgba(255,255,255,0.65)', textDecoration: 'none' }}>Política de privacidad</Link>
          </span>
        </div>
      </div>
    </footer>
  )
}

import { Link } from 'react-router-dom'

export default function TerminosLegales() {
  return (
    <>
      <section className="section">
        <div className="container">
          <span className="eyebrow">Legal</span>
          <h1>Términos legales</h1>
          <p className="lead">Condiciones de uso del sitio web de Montenegro {'&'} Asociadas. Última actualización: 2025.</p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="card" style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '.5rem' }}>1. Titular del sitio</h3>
            <p>El presente sitio web es propiedad de Montenegro {'&'} Asociadas, con domicilio en Av. Libertad 1234, Oficina 801, Viña del Mar, Chile. Correo de contacto: contacto@ejemplo.cl.</p>
          </div>
          <div className="card" style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '.5rem' }}>2. Objeto</h3>
            <p>Estos términos regulan el acceso y uso del sitio institucional. La navegación por el sitio implica la aceptación de las condiciones aquí descritas.</p>
          </div>
          <div className="card" style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '.5rem' }}>3. Propiedad intelectual</h3>
            <p>Todos los contenidos del sitio (textos, imágenes, logotipos, diseño) son propiedad de Montenegro {'&'} Asociadas o de sus legítimos titulares, y están protegidos por la legislación chilena e internacional sobre propiedad intelectual.</p>
          </div>
          <div className="card" style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '.5rem' }}>4. Uso del formulario de contacto</h3>
            <p>La información enviada a través del formulario de contacto se almacena de forma local en el navegador del usuario con fines de demostración. En la versión de producción, los datos serán tratados conforme a la política de privacidad y la Ley N° 19.628 sobre Protección de la Vida Privada.</p>
          </div>
          <div className="card" style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '.5rem' }}>5. Exclusión de responsabilidad</h3>
            <p>Los contenidos del sitio tienen carácter meramente informativo y no constituyen asesoría jurídica. Cada caso requiere análisis particular por parte de una abogada habilitada.</p>
          </div>
          <div className="card" style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '.5rem' }}>6. Legislación aplicable</h3>
            <p>Estos términos se rigen por la legislación de la República de Chile. Cualquier controversia será sometida a los tribunales competentes de la ciudad de Valparaíso.</p>
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link to="/" className="btn btn-outline">← Volver al inicio</Link>
          </div>
        </div>
      </section>
    </>
  )
}

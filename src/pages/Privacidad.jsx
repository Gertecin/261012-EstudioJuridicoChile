import { Link } from 'react-router-dom'

export default function Privacidad() {
  return (
    <>
      <section className="section">
        <div className="container">
          <span className="eyebrow">Legal</span>
          <h1>Política de privacidad</h1>
          <p className="lead">Cómo tratamos tus datos personales en Montenegro {'&'} Asociadas. Última actualización: 2025.</p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="card" style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '.5rem' }}>1. Responsable del tratamiento</h3>
            <p>Montenegro {'&'} Asociadas, con domicilio en Av. Libertad 1234, Oficina 801, Viña del Mar, Chile, es responsable del tratamiento de los datos personales que nos proporciones a través de este sitio web. Correo de contacto: contacto@ejemplo.cl.</p>
          </div>

          <div className="card" style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '.5rem' }}>2. Datos que recopilamos</h3>
            <p>Recopilamos únicamente los datos que nos proporcionas voluntariamente al completar el formulario de contacto: nombre completo, correo electrónico, teléfono, materia de consulta y mensaje. También utilizamos cookies técnicas para el funcionamiento del sitio.</p>
          </div>

          <div className="card" style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '.5rem' }}>3. Finalidad del tratamiento</h3>
            <p>Tus datos serán utilizados exclusivamente para:</p>
            <ul style={{ paddingLeft: '1.1rem', margin: '.5rem 0', color: 'var(--gris-pizarra)' }}>
              <li>Responder a tu consulta inicial.</li>
              <li>Prestar los servicios jurídicos que eventualmente contrates.</li>
              <li>Cumplir con obligaciones legales y regulatorias.</li>
            </ul>
          </div>

          <div className="card" style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '.5rem' }}>4. Base legal</h3>
            <p>El tratamiento se basa en tu consentimiento expreso al enviar el formulario, así como en la ejecución de un contrato de prestación de servicios jurídicos cuando corresponda.</p>
          </div>

          <div className="card" style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '.5rem' }}>5. Conservación de los datos</h3>
            <p>Conservaremos tus datos mientras dure la relación profesional y, posteriormente, durante los plazos legales aplicables (hasta 5 años según la Ley N° 19.628).</p>
          </div>

          <div className="card" style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '.5rem' }}>6. Derechos ARCO</h3>
            <p>Puedes ejercer tus derechos de Acceso, Rectificación, Cancelación y Oposición escribiendo a contacto@ejemplo.cl. Te responderemos en un plazo máximo de 10 días hábiles.</p>
          </div>

          <div className="card" style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '.5rem' }}>7. Cookies</h3>
            <p>Este sitio utiliza únicamente cookies técnicas necesarias para su funcionamiento. No utilizamos cookies de seguimiento ni publicitarias. Puedes gestionar tu preferencia en el banner de cookies.</p>
          </div>

          <div className="card" style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '.5rem' }}>8. Legislación aplicable</h3>
            <p>Esta política se rige por la Ley N° 19.628 sobre Protección de la Vida Privada de la República de Chile.</p>
          </div>

          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link to="/" className="btn btn-outline">← Volver al inicio</Link>
          </div>
        </div>
      </section>
    </>
  )
}

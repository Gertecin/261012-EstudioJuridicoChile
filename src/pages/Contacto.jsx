import ContactForm from '../components/ContactForm'

export default function Contacto() {
  return (
    <>
      <section className="section">
        <div className="container">
          <span className="eyebrow">Contacto</span>
          <h1>Cuéntanos tu situación y te respondemos pronto.</h1>
          <p className="lead">Completa el formulario con los datos básicos de tu consulta. Todas las comunicaciones están protegidas por el secreto profesional.</p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="split">
            <ContactForm />

            <div>
              <div className="contact-info">
                <h2 style={{ fontSize: '1.4rem', marginBottom: '1.5rem' }}>Información de contacto</h2>
                <div className="item">
                  <div className="icon" aria-hidden="true">✉</div>
                  <div>
                    <strong>Correo</strong>
                    <span>contacto@ejemplo.cl</span>
                  </div>
                </div>
                <div className="item">
                  <div className="icon" aria-hidden="true">☎</div>
                  <div>
                    <strong>Teléfono</strong>
                    <span>+56 32 200 0000</span>
                  </div>
                </div>
                <div className="item">
                  <div className="icon" aria-hidden="true">⌂</div>
                  <div>
                    <strong>Oficina</strong>
                    <span>Av. Libertad 1234, Oficina 801<br />Viña del Mar</span>
                  </div>
                </div>
                <div className="item">
                  <div className="icon" aria-hidden="true">◷</div>
                  <div>
                    <strong>Horario</strong>
                    <span>Lunes a viernes, 09:00 a 18:30 hrs.<br />Atención remota disponible.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

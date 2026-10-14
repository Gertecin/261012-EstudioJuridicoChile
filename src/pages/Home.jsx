import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <span className="eyebrow">Viña del Mar · Quinta Región</span>
          <h1>Acompañamos a tu familia en cada decisión importante.</h1>
          <p className="lead">Somos un estudio de abogadas especializado en derecho de familia. Ofrecemos asesoría clara, humana y resolutiva, ya sea que busques un acuerdo de mutuo acuerdo o debas enfrentar un proceso ante los Tribunales de Familia.</p>
          <div className="hero-actions">
            <Link to="/contacto" className="btn btn-primary">Agendar una consulta</Link>
            <Link to="/areas" className="btn btn-ghost">Conocer nuestras áreas</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">Por qué elegirnos</span>
          <h2>Una mirada profesional, cercana y serena.</h2>
          <p className="lead" style={{ marginBottom: '2.2rem' }}>Entendemos que consultar por temas de familia suele ser difícil. Por eso trabajamos con transparencia en los plazos, los costos y las alternativas reales que tienes a tu disposición.</p>
          <div className="grid grid-3">
            <article className="card">
              <div className="icon" aria-hidden="true">⚖</div>
              <h3>Experiencia local</h3>
              <p>Litigamos y meditamos habitualmente ante los Tribunales de Familia de Viña del Mar, Valparaíso y Quilpué.</p>
            </article>
            <article className="card">
              <div className="icon" aria-hidden="true">✦</div>
              <h3>Enfoque humano</h3>
              <p>Priorizamos los acuerdos y la mediación cuando es posible, cuidando el bienestar de niños, niñas y adolescentes.</p>
            </article>
            <article className="card">
              <div className="icon" aria-hidden="true">◈</div>
              <h3>Honorarios claros</h3>
              <p>Te explicamos desde la primera reunión cómo se estructura el proceso y cuáles serán los costos asociados.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <span className="eyebrow">Áreas destacadas</span>
          <h2>Te acompañamos en los procesos más frecuentes.</h2>
          <div className="grid grid-3" style={{ marginTop: '1.5rem' }}>
            <article className="card">
              <h3>Divorcios y separaciones</h3>
              <p>Divorcios de mutuo acuerdo, unilateral, por cese de la convivencia y liquidación de bienes.</p>
            </article>
            <article className="card">
              <h3>Cuidado personal y visitas</h3>
              <p>Fijación, modificación y reglamentación de relaciones directas y regulares con enfoque en el interés superior del niño.</p>
            </article>
            <article className="card">
              <h3>Pensiones de alimentos</h3>
              <p>Fijación, aumento, rebaja y cumplimiento. Representación en audiencias y convenios ante el tribunal.</p>
            </article>
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link to="/areas" className="btn btn-outline">Ver todas las áreas</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <span className="eyebrow">Sobre el estudio</span>
            <h2>Más de una década defendiendo el bienestar de las familias.</h2>
            <p className="lead">Nacimos en Viña del Mar con la convicción de que el derecho de familia debe ejercerse con escucha activa, rigor técnico y respeto por los tiempos de cada persona.</p>
            <Link to="/sobre-nosotras" className="btn btn-outline">Conoce al equipo</Link>
          </div>
          <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=900&q=70" alt="Abogadas del estudio en reunión de trabajo" />
        </div>
      </section>
    </>
  )
}

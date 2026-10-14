import { Link } from 'react-router-dom'
import FAQ from '../components/FAQ'

export default function PreguntasFrecuentes() {
  return (
    <>
      <section className="section">
        <div className="container">
          <span className="eyebrow">Preguntas frecuentes</span>
          <h1>Resolvemos tus dudas antes de la primera reunión.</h1>
          <p className="lead">Estas son las consultas que más recibimos en el estudio. Si tu pregunta no está aquí, escríbenos y te respondemos a la brevedad.</p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <FAQ />
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/contacto" className="btn btn-primary">Agenda tu consulta</Link>
          </div>
        </div>
      </section>
    </>
  )
}

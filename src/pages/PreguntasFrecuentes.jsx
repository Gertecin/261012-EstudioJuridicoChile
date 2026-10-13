import { Link } from 'react-router-dom'
import FAQ from '../components/FAQ'

export default function PreguntasFrecuentes() {
  return (
    <>
      <section className="py-16">
        <div className="max-w-site mx-auto px-5">
          <span className="inline-block uppercase tracking-widest text-xs font-semibold text-dorado mb-2">Preguntas frecuentes</span>
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Resolvemos tus dudas antes de la primera reunión.</h1>
          <p className="text-pizarra text-lg max-w-2xl">Estas son las consultas que más recibimos en el estudio. Si tu pregunta no está aquí, escríbenos y te respondemos a la brevedad.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-site mx-auto px-5">
          <FAQ />
          <div className="text-center mt-10">
            <Link to="/contacto" className="inline-block bg-dorado text-petroleo font-semibold px-6 py-3 rounded hover:bg-dorado-hover hover:text-white transition">Agenda tu consulta</Link>
          </div>
        </div>
      </section>
    </>
  )
}

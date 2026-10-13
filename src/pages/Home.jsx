import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <section className="relative bg-[linear-gradient(120deg,rgba(30,41,59,.88),rgba(30,41,59,.72)_60%,rgba(30,41,59,.55))] bg-cover bg-center text-white py-20 md:py-28" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1600&q=70')" }}>
        <div className="max-w-site mx-auto px-5">
          <span className="inline-block uppercase tracking-widest text-xs font-semibold text-dorado mb-3">Viña del Mar · Quinta Región</span>
          <h1 className="text-white text-4xl md:text-5xl font-serif font-semibold mb-4">Acompañamos a tu familia en cada decisión importante.</h1>
          <p className="text-white/90 text-lg max-w-2xl mb-6">Somos un estudio de abogadas especializado en derecho de familia. Ofrecemos asesoría clara, humana y resolutiva, ya sea que busques un acuerdo de mutuo acuerdo o debas enfrentar un proceso ante los Tribunales de Familia.</p>
          <div className="flex flex-wrap gap-3">
            <Link to="/contacto" className="bg-dorado text-petroleo font-semibold px-6 py-3 rounded hover:bg-dorado-hover hover:text-white transition">Agendar una consulta</Link>
            <Link to="/areas" className="border border-white/50 text-white font-semibold px-6 py-3 rounded hover:bg-white/10 transition">Conocer nuestras áreas</Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-site mx-auto px-5">
          <span className="inline-block uppercase tracking-widest text-xs font-semibold text-dorado mb-2">Por qué elegirnos</span>
          <h2 className="text-3xl md:text-4xl font-serif mb-3">Una mirada profesional, cercana y serena.</h2>
          <p className="text-pizarra max-w-2xl mb-8">Entendemos que consultar por temas de familia suele ser difícil. Por eso trabajamos con transparencia en los plazos, los costos y las alternativas reales que tienes a tu disposición.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '⚖', t: 'Experiencia local', d: 'Litigamos y meditamos habitualmente ante los Tribunales de Familia de Viña del Mar, Valparaíso y Quilpué.' },
              { icon: '✦', t: 'Enfoque humano', d: 'Priorizamos los acuerdos y la mediación cuando es posible, cuidando el bienestar de niños, niñas y adolescentes.' },
              { icon: '◈', t: 'Honorarios claros', d: 'Te explicamos desde la primera reunión cómo se estructura el proceso y cuáles serán los costos asociados.' }
            ].map((c, i) => (
              <article key={i} className="bg-white border border-borde rounded p-6 hover:-translate-y-1 hover:shadow-lg transition">
                <div className="w-11 h-11 rounded-full bg-dorado/15 text-dorado-hover grid place-items-center text-xl mb-4">{c.icon}</div>
                <h3 className="text-xl font-serif mb-2">{c.t}</h3>
                <p className="text-pizarra text-sm">{c.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-site mx-auto px-5">
          <span className="inline-block uppercase tracking-widest text-xs font-semibold text-dorado mb-2">Áreas destacadas</span>
          <h2 className="text-3xl md:text-4xl font-serif mb-6">Te acompañamos en los procesos más frecuentes.</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { t: 'Divorcios y separaciones', d: 'Divorcios de mutuo acuerdo, unilateral, por cese de la convivencia y liquidación de bienes.' },
              { t: 'Cuidado personal y visitas', d: 'Fijación, modificación y reglamentación de relaciones directas y regulares con enfoque en el interés superior del niño.' },
              { t: 'Pensiones de alimentos', d: 'Fijación, aumento, rebaja y cumplimiento. Representación en audiencias y convenios ante el tribunal.' }
            ].map((a, i) => (
              <article key={i} className="bg-white border border-borde rounded p-6 hover:-translate-y-1 hover:shadow-lg transition">
                <h3 className="text-xl font-serif mb-2">{a.t}</h3>
                <p className="text-pizarra text-sm">{a.d}</p>
              </article>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/areas" className="inline-block border border-petroleo text-petroleo font-semibold px-6 py-3 rounded hover:bg-petroleo hover:text-white transition">Ver todas las áreas</Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-site mx-auto px-5 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block uppercase tracking-widest text-xs font-semibold text-dorado mb-2">Sobre el estudio</span>
            <h2 className="text-3xl md:text-4xl font-serif mb-3">Más de una década defendiendo el bienestar de las familias.</h2>
            <p className="text-pizarra mb-6">Nacimos en Viña del Mar con la convicción de que el derecho de familia debe ejercerse con escucha activa, rigor técnico y respeto por los tiempos de cada persona.</p>
            <Link to="/sobre-nosotras" className="inline-block border border-petroleo text-petroleo font-semibold px-6 py-3 rounded hover:bg-petroleo hover:text-white transition">Conoce al equipo</Link>
          </div>
          <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=900&q=70" alt="Abogadas del estudio en reunión de trabajo" className="rounded shadow-md aspect-[4/5] object-cover w-full" />
        </div>
      </section>
    </>
  )
}

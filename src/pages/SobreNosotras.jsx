export default function SobreNosotras() {
  const equipo = [
    { n: 'Carolina Montenegro', d: 'Socia fundadora. Abogada Universidad de Valparaíso, magíster en Derecho de Familia. Mediadora familiar acreditada.', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=70' },
    { n: 'Valentina Ríos', d: 'Abogada PUCV, especialista en cuidado personal y pensiones de alimentos. Experiencia en litigación oral ante Tribunales de Familia.', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=70' },
    { n: 'Francisca Soto', d: 'Abogada UV, diplomada en Niñez y Adolescencia. Acompaña procesos de adopción, filiación y protección de niños y niñas.', img: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=600&q=70' }
  ]

  return (
    <>
      <section className="py-16">
        <div className="max-w-site mx-auto px-5">
          <span className="inline-block uppercase tracking-widest text-xs font-semibold text-dorado mb-2">Sobre nosotras</span>
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Un equipo comprometido con las familias de la Quinta Región.</h1>
          <p className="text-pizarra text-lg max-w-2xl">Somos tres abogadas con formación de posgrado en derecho de familia y mediación. Hace más de diez años que acompañamos procesos de separación, filiación, alimentos y adopción con un enfoque práctico y humano.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-site mx-auto px-5 grid md:grid-cols-2 gap-10 items-center">
          <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=70" alt="Oficina moderna del estudio" className="rounded shadow-md aspect-[4/5] object-cover w-full" />
          <div>
            <span className="inline-block uppercase tracking-widest text-xs font-semibold text-dorado mb-2">Nuestra forma de trabajar</span>
            <h2 className="text-3xl font-serif mb-3">Escuchar primero, explicar después, actuar con claridad.</h2>
            <p className="text-pizarra mb-4">En la primera reunión buscamos entender tu situación completa: la jurídica, pero también la personal y familiar. A partir de ahí te presentamos un plan con pasos concretos, tiempos estimados y costos transparentes.</p>
            <ul className="divide-y divide-borde">
              {[
                { t: 'Confidencialidad', d: 'Todo lo que conversamos está protegido por el secreto profesional.' },
                { t: 'Transparencia', d: 'Te informamos en cada etapa qué está pasando y qué viene.' },
                { t: 'Cercanía', d: 'Atendemos presencialmente en Viña del Mar y de forma remota en toda la región.' }
              ].map((v, i) => (
                <li key={i} className="py-3 flex gap-3">
                  <div>
                    <strong className="block font-serif text-petroleo">{v.t}</strong>
                    <span className="text-sm text-pizarra">{v.d}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-site mx-auto px-5">
          <span className="inline-block uppercase tracking-widest text-xs font-semibold text-dorado mb-2">Equipo</span>
          <h2 className="text-3xl md:text-4xl font-serif mb-6">Las abogadas que te atenderán.</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {equipo.map((m, i) => (
              <article key={i} className="bg-white border border-borde rounded p-6 hover:-translate-y-1 hover:shadow-lg transition">
                <img src={m.img} alt={`Retrato de ${m.n}`} className="aspect-square object-cover rounded mb-4 w-full" />
                <h3 className="text-xl font-serif mb-2">{m.n}</h3>
                <p className="text-pizarra text-sm">{m.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

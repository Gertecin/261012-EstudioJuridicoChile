export default function SobreNosotras() {
  const equipo = [
    { n: 'Carolina Montenegro', d: 'Socia fundadora. Abogada Universidad de Valparaíso, magíster en Derecho de Familia. Mediadora familiar acreditada.', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=70' },
    { n: 'Valentina Ríos', d: 'Abogada PUCV, especialista en cuidado personal y pensiones de alimentos. Experiencia en litigación oral ante Tribunales de Familia.', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=70' },
    { n: 'Francisca Soto', d: 'Abogada UV, diplomada en Niñez y Adolescencia. Acompaña procesos de adopción, filiación y protección de niños y niñas.', img: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=600&q=70' }
  ]

  return (
    <>
      <section className="section">
        <div className="container">
          <span className="eyebrow">Sobre nosotras</span>
          <h1>Un equipo comprometido con las familias de la Quinta Región.</h1>
          <p className="lead">Somos tres abogadas con formación de posgrado en derecho de familia y mediación. Hace más de diez años que acompañamos procesos de separación, filiación, alimentos y adopción con un enfoque práctico y humano.</p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container split">
          <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=70" alt="Oficina moderna del estudio" />
          <div>
            <span className="eyebrow">Nuestra forma de trabajar</span>
            <h2>Escuchar primero, explicar después, actuar con claridad.</h2>
            <p>En la primera reunión buscamos entender tu situación completa: la jurídica, pero también la personal y familiar. A partir de ahí te presentamos un plan con pasos concretos, tiempos estimados y costos transparentes.</p>
            <ul className="values">
              <li><strong>Confidencialidad</strong><span>Todo lo que conversamos está protegido por el secreto profesional.</span></li>
              <li><strong>Transparencia</strong><span>Te informamos en cada etapa qué está pasando y qué viene.</span></li>
              <li><strong>Cercanía</strong><span>Atendemos presencialmente en Viña del Mar y de forma remota en toda la región.</span></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">Equipo</span>
          <h2>Las abogadas que te atenderán.</h2>
          <div className="grid grid-3" style={{ marginTop: '1.5rem' }}>
            {equipo.map((m, i) => (
              <article key={i} className="card">
                <img src={m.img} alt={`Retrato de ${m.n}`} style={{ aspectRatio: '1/1', objectFit: 'cover', borderRadius: 'var(--radio)', marginBottom: '1rem' }} />
                <h3>{m.n}</h3>
                <p>{m.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

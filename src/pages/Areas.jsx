import { Link } from 'react-router-dom'

const areas = [
  { t: 'Divorcios y separaciones', d: 'Representamos divorcios de mutuo acuerdo, unilateral y por cese de la convivencia. Redactamos los acuerdos de relación directa, alimentos y liquidación de bienes para presentarlos ante el tribunal.', l: ['Divorcio de mutuo acuerdo', 'Divorcio unilateral y por cese de convivencia', 'Liquidación de sociedad conyugal o ACC'], img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=900&q=70' },
  { t: 'Cuidado personal y visitas', d: 'Tramitamos fijación, modificación y reglamentación del cuidado personal (tuición) y de las relaciones directas y regulares, siempre con foco en el interés superior de niños, niñas y adolescentes.', l: ['Cuidado personal compartido o unilateral', 'Reglamentación de visitas', 'Modificación por cambio de circunstancias'], img: 'https://images.unsplash.com/photo-1536640712-4d4c3e441807?auto=format&fit=crop&w=900&q=70' },
  { t: 'Pensiones de alimentos', d: 'Fijamos, aumentamos o rebajamos pensiones de alimentos. Representamos en audiencias, solicitamos medidas de apremio cuando corresponde y asesoramos en convenios que se homologan en el tribunal.', l: ['Fijación y aumento de alimentos', 'Rebaja y cesación', 'Cobranza y medidas de apremio'], img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=70' },
  { t: 'Adopción y filiación', d: 'Acompañamos procesos de adopción nacional ante el Sename y tribunales competentes, así como demandas de filiación y rectificación de partidas.', l: ['Adopción nacional', 'Demanda de filiación extramatrimonial', 'Rectificación de partidas'], img: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&w=900&q=70' },
  { t: 'Mediación familiar', d: 'Contamos con mediadoras familiares acreditadas. La mediación es requisito previo obligatorio en varias materias y resulta una herramienta muy útil para alcanzar acuerdos duraderos.', l: ['Mediación previa obligatoria', 'Mediación voluntaria integral', 'Homologación de acuerdos'], img: 'https://images.unsplash.com/photo-1575508223428-5e77c6005d04?auto=format&fit=crop&w=900&q=70' },
  { t: 'Violencia intrafamiliar y protección', d: 'Asesoramos y patrocinamos en demandas por violencia intrafamiliar, solicitudes de medidas de protección para niños, niñas y adolescentes, y órdenes de alejamiento.', l: ['Denuncia y patrocinio VIF', 'Medidas de protección de niños, niñas y adolescentes', 'Órdenes de alejamiento'], img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=70' }
]

export default function Areas() {
  return (
    <>
      <section className="py-16">
        <div className="max-w-site mx-auto px-5">
          <span className="inline-block uppercase tracking-widest text-xs font-semibold text-dorado mb-2">Áreas de práctica</span>
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Te acompañamos en cada etapa de tu proceso familiar.</h1>
          <p className="text-pizarra text-lg max-w-2xl">Trabajamos las materias más consultadas ante los Tribunales de Familia y en procesos de mediación previa. Si no ves tu caso aquí, escríbenos igual: lo conversamos sin compromiso.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-site mx-auto px-5 grid md:grid-cols-2 gap-6">
          {areas.map((a, i) => (
            <article key={i} className="bg-white border border-borde rounded overflow-hidden hover:-translate-y-1 hover:shadow-lg transition">
              <img src={a.img} alt={a.t} className="aspect-[16/10] object-cover w-full" />
              <div className="p-6">
                <h3 className="text-xl font-serif mb-2">{a.t}</h3>
                <p className="text-pizarra text-sm mb-3">{a.d}</p>
                <ul className="list-disc pl-5 text-sm text-pizarra space-y-1">
                  {a.l.map((it, j) => <li key={j}>{it}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/contacto" className="inline-block bg-dorado text-petroleo font-semibold px-6 py-3 rounded hover:bg-dorado-hover hover:text-white transition">Consulta por tu caso</Link>
        </div>
      </section>
    </>
  )
}

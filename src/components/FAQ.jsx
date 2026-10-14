import { useState } from 'react'

const preguntas = [
  { q: '¿Necesito un abogado para divorciarme de mutuo acuerdo?', a: 'Sí. En Chile el divorcio de mutuo acuerdo debe ser presentado por un abogado ante el Tribunal de Familia, junto con el convenio regulador que incluye cuidado personal, visitas y alimentos de los hijos, además de la liquidación de bienes si corresponde. Nosotras redactamos el convenio y lo presentamos por ti.' },
  { q: '¿Qué es la mediación previa y es obligatoria?', a: 'La mediación familiar es una reunión con un mediador acreditado donde se buscan acuerdos sobre materias como alimentos, cuidado personal y visitas. Es un requisito previo obligatorio antes de demandar en varias materias, salvo en casos de violencia intrafamiliar. Si se llega a un acuerdo, se homologa en el tribunal y tiene mérito de sentencia.' },
  { q: '¿Cómo se calcula la pensión de alimentos?', a: 'No existe una fórmula única. El tribunal considera las necesidades del niño o niña (alimentación, salud, educación, vivienda, vestido, recreación) y las posibilidades económicas de ambos padres. Se puede fijar como porcentaje de la renta o en unidades tributarias. Si el alimentante no declara ingresos, la ley presume ciertos montos según el registro del Servicio de Impuestos Internos.' },
  { q: '¿Qué pasa si no pagan la pensión de alimentos?', a: 'La ley contempla medidas de apremio progresivas: retención de impuestos, prohibición de vender bienes, retención de licencia de conducir y, en casos graves, arresto nocturno. También es posible solicitar la inscripción en el Registro Nacional de Deudores de Pensiones de Alimentos. Te acompañamos en cada etapa.' },
  { q: '¿Puedo solicitar el cuidado personal si no estoy casado o casada?', a: 'Sí. El cuidado personal puede solicitarse independientemente del estado civil de los padres. Lo relevante es el interés superior del niño, niña o adolescente y quién ha ejercido efectivamente el cuidado. Se puede acordar de mutuo acuerdo ante notario o solicitarse al Tribunal de Familia cuando no hay consenso.' },
  { q: '¿Cuánto demora un proceso de familia?', a: 'Depende de la materia y de si hay acuerdo entre las partes. Un divorcio de mutuo acuerdo puede resolverse en pocas semanas una vez presentada la demanda. Un juicio contencioso de alimentos o cuidado personal puede extenderse varios meses. En la primera reunión te damos un estimado realista según tu caso.' },
  { q: '¿Atienden de forma remota?', a: 'Sí. Atendemos de forma presencial en nuestra oficina de Viña del Mar y también realizamos reuniones por videollamada para personas que viven en otras comunas de la Quinta Región o fuera de ella. Las audiencias ante el tribunal pueden ser, según la materia, presenciales o telemáticas.' },
  { q: '¿Cómo son los honorarios?', a: 'Trabajamos con honorarios transparentes, informados por escrito antes de iniciar el proceso. Dependiendo de la materia podemos cobrar una suma fija por el procedimiento completo o una tarifa por hora de trabajo. La primera reunión informativa tiene un valor reducido y, si decides contratarnos, se descuenta del total.' }
]

export default function FAQ() {
  const [abiertos, setAbiertos] = useState({})

  const toggle = (i) => {
    setAbiertos(prev => ({ ...prev, [i]: !prev[i] }))
  }

  return (
    <div className="faq-list">
      {preguntas.map((p, i) => {
        const abierto = !!abiertos[i]
        return (
          <div key={i} className="faq-item" data-open={abierto ? 'true' : 'false'}>
            <button
              type="button"
              className="faq-trigger"
              onClick={() => toggle(i)}
              aria-expanded={abierto}
              aria-controls={`faq-panel-${i}`}
            >
              {p.q}
              <span className="chev" aria-hidden="true">▾</span>
            </button>
            <div className="faq-panel" id={`faq-panel-${i}`} role="region" style={{ maxHeight: abierto ? '500px' : '0' }}>
              <div>{p.a}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

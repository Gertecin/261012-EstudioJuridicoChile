import ContactForm from '../components/ContactForm'

export default function Contacto() {
  return (
    <>
      <section className="py-16">
        <div className="max-w-site mx-auto px-5">
          <span className="inline-block uppercase tracking-widest text-xs font-semibold text-dorado mb-2">Contacto</span>
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Cuéntanos tu situación y te respondemos pronto.</h1>
          <p className="text-pizarra text-lg max-w-2xl">Completa el formulario con los datos básicos de tu consulta. Todas las comunicaciones están protegidas por el secreto profesional.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-site mx-auto px-5 grid md:grid-cols-2 gap-10">
          <ContactForm />

          <div>
            <h2 className="text-2xl font-serif mb-6">Información de contacto</h2>
            {[
              { i: '✉', t: 'Correo', d: 'contacto@ejemplo.cl' },
              { i: '☎', t: 'Teléfono', d: '+56 32 200 0000' },
              { i: '', t: 'Oficina', d: 'Av. Libertad 1234, Oficina 801\nViña del Mar' },
              { i: '◷', t: 'Horario', d: 'Lunes a viernes, 09:00 a 18:30 hrs.\nAtención remota disponible.' }
            ].map((c, i) => (
              <div key={i} className="flex gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-petroleo text-dorado grid place-items-center flex-shrink-0">{c.i}</div>
                <div>
                  <strong className="block font-serif text-petroleo">{c.t}</strong>
                  <span className="text-sm text-pizarra whitespace-pre-line">{c.d}</span>
                </div>
              </div>
            ))}

            <div id="privacidad" className="bg-white border border-borde rounded p-6 mt-6">
              <h3 className="text-lg font-serif mb-2">Política de privacidad (marcador)</h3>
              <p className="text-sm text-pizarra">[TEXTO MARCADOR — A REEMPLAZAR POR EL TEXTO DEFINITIVO REVISADO POR EL ESTUDIO.] Los datos personales proporcionados serán tratados por Montenegro & Asociadas con la finalidad de responder a su consulta y, en su caso, prestar los servicios jurídicos contratados. Sus antecedentes no serán compartidos con terceros salvo obligación legal. Puede ejercer sus derechos de acceso, rectificación, cancelación y oposición escribiendo a contacto@ejemplo.cl, conforme a la Ley N° 19.628 sobre Protección de la Vida Privada.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

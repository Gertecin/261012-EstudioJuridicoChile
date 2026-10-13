import { Link } from 'react-router-dom'

export default function TerminosLegales() {
  return (
    <>
      <section className="py-16">
        <div className="max-w-site mx-auto px-5">
          <span className="inline-block uppercase tracking-widest text-xs font-semibold text-dorado mb-2">Legal</span>
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Términos legales</h1>
          <p className="text-pizarra text-lg max-w-2xl">Condiciones de uso del sitio web de Montenegro & Asociadas. Última actualización: 2025.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-5 space-y-8 text-pizarra">
          <div>
            <h2 className="text-2xl font-serif text-petroleo mb-2">1. Titular del sitio</h2>
            <p>El presente sitio web es propiedad de Montenegro & Asociadas, con domicilio en Av. Libertad 1234, Oficina 801, Viña del Mar, Chile. Correo de contacto: contacto@ejemplo.cl.</p>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-petroleo mb-2">2. Objeto</h2>
            <p>Estos términos regulan el acceso y uso del sitio institucional. La navegación por el sitio implica la aceptación de las condiciones aquí descritas.</p>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-petroleo mb-2">3. Propiedad intelectual</h2>
            <p>Todos los contenidos del sitio (textos, imágenes, logotipos, diseño) son propiedad de Montenegro & Asociadas o de sus legítimos titulares, y están protegidos por la legislación chilena e internacional sobre propiedad intelectual.</p>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-petroleo mb-2">4. Uso del formulario de contacto</h2>
            <p>La información enviada a través del formulario de contacto se almacena de forma local en el navegador del usuario con fines de demostración. En la versión de producción, los datos serán tratados conforme a la política de privacidad y la Ley N° 19.628 sobre Protección de la Vida Privada.</p>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-petroleo mb-2">5. Exclusión de responsabilidad</h2>
            <p>Los contenidos del sitio tienen carácter meramente informativo y no constituyen asesoría jurídica. Cada caso requiere análisis particular por parte de una abogada habilitada.</p>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-petroleo mb-2">6. Legislación aplicable</h2>
            <p>Estos términos se rigen por la legislación de la República de Chile. Cualquier controversia será sometida a los tribunales competentes de la ciudad de Valparaíso.</p>
          </div>

          <div className="pt-4 border-t border-borde">
            <Link to="/" className="text-dorado-hover font-semibold hover:underline">← Volver al inicio</Link>
          </div>
        </div>
      </section>
    </>
  )
}

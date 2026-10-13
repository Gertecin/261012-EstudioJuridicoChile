import { useState } from 'react'

export default function ContactForm() {
  const [feedback, setFeedback] = useState({ tipo: '', texto: '' })
  const [form, setForm] = useState({ nombre: '', email: '', telefono: '', area: '', mensaje: '', privacidad: false })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFeedback({ tipo: '', texto: '' })

    if (!form.nombre || !form.email || !form.mensaje || !form.privacidad) {
      setFeedback({ tipo: 'err', texto: 'Por favor completá nombre, correo, mensaje y aceptá la política de privacidad.' })
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setFeedback({ tipo: 'err', texto: 'El correo ingresado no parece válido.' })
      return
    }

    const consulta = { ...form, fecha: new Date().toISOString() }
    const KEY = 'estudio.consultas'
    const lista = JSON.parse(localStorage.getItem(KEY) || '[]')
    lista.push(consulta)
    localStorage.setItem(KEY, JSON.stringify(lista))

    setForm({ nombre: '', email: '', telefono: '', area: '', mensaje: '', privacidad: false })
    setFeedback({ tipo: 'ok', texto: `Gracias, ${consulta.nombre}. Recibimos tu consulta y te contactaremos a la brevedad al correo indicado.` })
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-borde rounded p-6 shadow-sm space-y-4" noValidate>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-petroleo mb-1">Nombre completo *</label>
          <input type="text" name="nombre" value={form.nombre} onChange={handleChange} required className="w-full px-3 py-2 border border-borde rounded bg-blanco-roto focus:border-dorado focus:ring-2 focus:ring-dorado/25 outline-none" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-petroleo mb-1">Teléfono</label>
          <input type="tel" name="telefono" value={form.telefono} onChange={handleChange} placeholder="+56 9 0000 0000" className="w-full px-3 py-2 border border-borde rounded bg-blanco-roto focus:border-dorado focus:ring-2 focus:ring-dorado/25 outline-none" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-petroleo mb-1">Correo electrónico *</label>
        <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full px-3 py-2 border border-borde rounded bg-blanco-roto focus:border-dorado focus:ring-2 focus:ring-dorado/25 outline-none" />
      </div>

      <div>
        <label className="block text-sm font-semibold text-petroleo mb-1">Materia de consulta</label>
        <select name="area" value={form.area} onChange={handleChange} className="w-full px-3 py-2 border border-borde rounded bg-blanco-roto focus:border-dorado focus:ring-2 focus:ring-dorado/25 outline-none">
          <option value="">Selecciona un área</option>
          <option>Divorcio o separación</option>
          <option>Cuidado personal o visitas</option>
          <option>Pensión de alimentos</option>
          <option>Adopción o filiación</option>
          <option>Mediación familiar</option>
          <option>Violencia intrafamiliar</option>
          <option>Otra</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-petroleo mb-1">Cuéntanos brevemente tu consulta *</label>
        <textarea name="mensaje" value={form.mensaje} onChange={handleChange} required rows={5} placeholder="Ej.: Estoy evaluando un divorcio de mutuo acuerdo y tenemos dos hijos menores..." className="w-full px-3 py-2 border border-borde rounded bg-blanco-roto focus:border-dorado focus:ring-2 focus:ring-dorado/25 outline-none resize-y" />
      </div>

      <label className="flex gap-2 items-start text-sm text-pizarra">
        <input type="checkbox" name="privacidad" checked={form.privacidad} onChange={handleChange} required className="mt-1" />
        <span>He leído y acepto la <a href="#privacidad" className="text-petroleo underline">política de privacidad</a> y el tratamiento confidencial de mis antecedentes. *</span>
      </label>

      <button type="submit" className="w-full bg-dorado text-petroleo font-semibold py-3 rounded hover:bg-dorado-hover hover:text-white transition">Enviar consulta</button>

      {feedback.texto && (
        <div role="status" aria-live="polite" className={`p-3 rounded text-sm ${feedback.tipo === 'ok' ? 'bg-dorado/15 text-petroleo border border-dorado' : 'bg-red-100 text-red-800 border border-red-300'}`}>
          {feedback.texto}
        </div>
      )}
    </form>
  )
}

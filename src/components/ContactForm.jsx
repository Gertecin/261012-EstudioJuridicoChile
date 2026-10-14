import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function ContactForm() {
  const [feedback, setFeedback] = useState({ tipo: '', texto: '' })
  const [form, setForm] = useState({ 
    nombre: '', 
    email: '', 
    telefono: '', 
    area: '', 
    mensaje: '', 
    privacidad: false 
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFeedback({ tipo: '', texto: '' })

    // Validación mínima
    if (!form.nombre || !form.email || !form.mensaje || !form.privacidad) {
      setFeedback({ 
        tipo: 'err', 
        texto: 'Por favor completa nombre, correo, mensaje y acepta la política de privacidad.' 
      })
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setFeedback({ 
        tipo: 'err', 
        texto: 'El correo ingresado no parece válido.' 
      })
      return
    }

    // Guardar en localStorage
    const consulta = { ...form, fecha: new Date().toISOString() }
    const KEY = 'estudio.consultas'
    const lista = JSON.parse(localStorage.getItem(KEY) || '[]')
    lista.push(consulta)
    localStorage.setItem(KEY, JSON.stringify(lista))

    // Resetear formulario y mostrar éxito
    setForm({ nombre: '', email: '', telefono: '', area: '', mensaje: '', privacidad: false })
    setFeedback({ 
      tipo: 'ok', 
      texto: `Gracias, ${consulta.nombre}. Recibimos tu consulta y te contactaremos a la brevedad al correo indicado.` 
    })
  }

  return (
    <form id="contact-form" className="form-wrap" onSubmit={handleSubmit} noValidate>
      <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>Enviar una consulta</h2>
      
      <div className="form-row two">
        <div>
          <label htmlFor="nombre">Nombre completo *</label>
          <input 
            type="text" 
            id="nombre" 
            name="nombre" 
            value={form.nombre} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label htmlFor="telefono">Teléfono</label>
          <input 
            type="tel" 
            id="telefono" 
            name="telefono" 
            value={form.telefono} 
            onChange={handleChange} 
            placeholder="+56 9 0000 0000" 
          />
        </div>
      </div>

      <div className="form-row">
        <div>
          <label htmlFor="email">Correo electrónico *</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={form.email} 
            onChange={handleChange} 
            required 
          />
        </div>
      </div>

      <div className="form-row">
        <div>
          <label htmlFor="area">Materia de consulta</label>
          <select 
            id="area" 
            name="area" 
            value={form.area} 
            onChange={handleChange}
          >
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
      </div>

      <div className="form-row">
        <div>
          <label htmlFor="mensaje">Cuéntanos brevemente tu consulta *</label>
          <textarea 
            id="mensaje" 
            name="mensaje" 
            value={form.mensaje} 
            onChange={handleChange} 
            required 
            rows={5} 
            placeholder="Ej.: Estoy evaluando un divorcio de mutuo acuerdo y tenemos dos hijos menores..." 
          />
        </div>
      </div>

      <div className="form-row">
        <label className="checkbox">
          <input 
            type="checkbox" 
            id="privacidad" 
            name="privacidad" 
            checked={form.privacidad} 
            onChange={handleChange} 
            required 
          />
          <span>
            He leído y acepto la {' '}
            {/* CAMBIO REALIZADO: Ahora apunta a la nueva ruta /privacidad */}
            <Link to="/privacidad" style={{ color: 'var(--azul-petroleo)', textDecoration: 'underline' }}>
              política de privacidad
            </Link>
            {' '} y el tratamiento confidencial de mis antecedentes. *
          </span>
        </label>
      </div>

      <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
        Enviar consulta
      </button>

      {feedback.texto && (
        <div 
          id="form-feedback" 
          className={`form-feedback ${feedback.tipo}`} 
          role="status" 
          aria-live="polite"
        >
          {feedback.texto}
        </div>
      )}
    </form>
  )
}

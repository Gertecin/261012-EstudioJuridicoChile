import { useState, useEffect } from 'react'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const KEY = 'estudio.cookies'
    const pref = localStorage.getItem(KEY)
    if (!pref) setVisible(true)
  }, [])

  const guardar = (valor) => {
    localStorage.setItem('estudio.cookies', valor)
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div id="cookie-banner" className={`cookie-banner ${visible ? 'show' : ''}`} role="dialog" aria-live="polite" aria-label="Aviso de cookies">
      <div className="cookie-inner">
        <p>Usamos cookies técnicas para el funcionamiento del sitio. Puedes aceptar o rechazar; tu preferencia se guardará para no volver a consultarte.</p>
        <div className="cookie-actions">
          <button className="btn btn-outline" onClick={() => guardar('rejected')} style={{ color: '#fff', borderColor: 'rgba(255,255,255,.5)' }}>Rechazar</button>
          <button className="btn btn-primary" onClick={() => guardar('accepted')}>Aceptar</button>
        </div>
      </div>
    </div>
  )
}

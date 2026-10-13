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
    <div className="fixed inset-x-0 bottom-0 z-50 bg-white border-t border-borde shadow-[0_-8px_24px_rgba(15,23,42,0.08)] p-4" role="dialog" aria-label="Aviso de cookies">
      <div className="max-w-site mx-auto flex flex-col md:flex-row items-start md:items-center gap-4">
        <p className="text-sm text-pizarra flex-grow">Usamos cookies técnicas para el funcionamiento del sitio. Puedes aceptar o rechazar; tu preferencia se guardará para no volver a consultarte.</p>
        <div className="flex gap-2">
          <button onClick={() => guardar('rejected')} className="px-4 py-2 text-sm font-semibold border border-white/50 text-white rounded hover:bg-white/10">Rechazar</button>
          <button onClick={() => guardar('accepted')} className="px-4 py-2 text-sm font-semibold bg-dorado text-petroleo rounded hover:bg-dorado-hover hover:text-white">Aceptar</button>
        </div>
      </div>
    </div>
  )
}

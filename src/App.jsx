import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import CookieBanner from './components/CookieBanner'
import Home from './pages/Home'
import SobreNosotras from './pages/SobreNosotras'
import Areas from './pages/Areas'
import PreguntasFrecuentes from './pages/PreguntasFrecuentes'
import Contacto from './pages/Contacto'
import TerminosLegales from './pages/TerminosLegales'
import Privacidad from './pages/Privacidad'

const paginas = {
  '/': {
    titulo: 'Inicio | Estudio de Abogadas de Familia en Viña del Mar',
    descripcion: 'Estudio jurídico especializado en derecho de familia en Viña del Mar. Divorcios, cuidado personal, alimentos, adopción y mediación. Atención cercana y confiable.'
  },
  '/sobre-nosotras': {
    titulo: 'Sobre Nosotras | Estudio de Abogadas de Familia en Viña del Mar',
    descripcion: 'Conoce al equipo de abogadas especializadas en derecho de familia en Viña del Mar. Trayectoria, valores y forma de trabajo centrada en las personas.'
  },
  '/areas': {
    titulo: 'Áreas de Práctica | Derecho de Familia Viña del Mar',
    descripcion: 'Divorcios, cuidado personal, pensiones de alimentos, adopción, filiación, violencia intrafamiliar y mediación. Asesoría integral en derecho de familia.'
  },
  '/preguntas-frecuentes': {
    titulo: 'Preguntas Frecuentes | Derecho de Familia Viña del Mar',
    descripcion: 'Resolvemos las dudas más comunes sobre divorcios, alimentos, cuidado personal, mediación y Tribunales de Familia en Viña del Mar.'
  },
  '/contacto': {
    titulo: 'Contacto | Estudio de Abogadas de Familia Viña del Mar',
    descripcion: 'Agenda una consulta con nuestro estudio de abogadas de familia en Viña del Mar. Formulario, teléfono y dirección. Atención presencial y remota.'
  },
  '/terminos-legales': {
    titulo: 'Términos Legales | Estudio de Abogadas de Familia Viña del Mar',
    descripcion: 'Condiciones de uso del sitio web de Montenegro & Asociadas, estudio jurídico de familia en Viña del Mar, Chile.'
  },
  '/privacidad': {
    titulo: 'Política de Privacidad | Estudio de Abogadas de Familia Viña del Mar',
    descripcion: 'Política de privacidad de Montenegro & Asociadas. Conoce cómo tratamos tus datos personales conforme a la Ley N° 19.628.'
  }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  'name': 'Montenegro & Asociadas — Estudio de Abogadas de Familia',
  'image': 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=70',
  'url': 'https://gertecin.github.io/261012-EstudioJuridicoChile/',
  'telephone': '+56 32 200 0000',
  'priceRange': '$$',
  'address': {
    '@type': 'PostalAddress',
    'streetAddress': 'Av. Libertad 1234, Oficina 801',
    'addressLocality': 'Viña del Mar',
    'addressRegion': 'Valparaíso',
    'postalCode': '2520000',
    'addressCountry': 'CL'
  },
  'geo': { '@type': 'GeoCoordinates', 'latitude': -33.02, 'longitude': -71.55 },
  'openingHours': 'Mo-Fr 09:00-18:30',
  'areaServed': 'Viña del Mar, Valparaíso, Quinta Región'
}

export default function App() {
  const { pathname } = useLocation()

  useEffect(() => {
    const pagina = paginas[pathname] || paginas['/']

    // Actualizar título
    document.title = pagina.titulo

    // Actualizar meta description
    let meta = document.querySelector('meta[name="description"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.name = 'description'
      document.head.appendChild(meta)
    }
    meta.content = pagina.descripcion

    // Actualizar JSON-LD
    let script = document.querySelector('script[type="application/ld+json"]')
    if (!script) {
      script = document.createElement('script')
      script.type = 'application/ld+json'
      document.head.appendChild(script)
    }
    script.textContent = JSON.stringify(jsonLd)

    // Scroll al inicio al cambiar de ruta
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="min-h-screen flex flex-col bg-blanco-roto">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre-nosotras" element={<SobreNosotras />} />
          <Route path="/areas" element={<Areas />} />
          <Route path="/preguntas-frecuentes" element={<PreguntasFrecuentes />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/terminos-legales" element={<TerminosLegales />} />
          <Route path="/privacidad" element={<Privacidad />} />
        </Routes>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  )
}

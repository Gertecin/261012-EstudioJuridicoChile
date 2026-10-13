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

const titulos = {
  '/': 'Inicio | Estudio de Abogadas de Familia en Viña del Mar',
  '/sobre-nosotras': 'Sobre Nosotras | Estudio de Abogadas de Familia',
  '/areas': 'Áreas de Práctica | Derecho de Familia Viña del Mar',
  '/preguntas-frecuentes': 'Preguntas Frecuentes | Derecho de Familia',
  '/contacto': 'Contacto | Estudio de Abogadas de Familia Viña del Mar',
  '/terminos-legales': 'Términos Legales | Estudio de Abogadas de Familia'
}

export default function App() {
  const { pathname } = useLocation()

  useEffect(() => {
    document.title = titulos[pathname] || titulos['/']
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
        </Routes>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  )
}

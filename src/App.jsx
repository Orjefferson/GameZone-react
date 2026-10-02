import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppNavbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToHash from './components/ScrollToHash'
import LandingPage from './pages/LandingPage'
import Comunidade from './pages/Comunidade'
import NoticiaGta from './pages/NoticiaGta'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <AppNavbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/comunidade" element={<Comunidade />} />
        <Route path="/noticias/gta-vi" element={<NoticiaGta />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
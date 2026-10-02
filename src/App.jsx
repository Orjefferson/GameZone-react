import AppNavbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import Lancamentos from './sections/Lancamentos'
import Generos from './sections/Generos'
import Noticias from './sections/Noticias'
import ChamadaFinal from './sections/ChamadaFinal'

function App() {
  return (
    <>
      <AppNavbar />
      <main>
        <Hero />
        <Lancamentos />
        <Generos />
        <Noticias />
        <ChamadaFinal />
      </main>
      <Footer />
    </>
  )
}
export default App
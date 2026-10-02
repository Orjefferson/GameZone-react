import AppNavbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import Lancamentos from './sections/Lancamentos'
import Generos from './sections/Generos'

function App() {
  return (
    <>
      <AppNavbar />
      <main>
        <Hero />
        <Lancamentos />
        <Generos />
      </main>
      <Footer />
    </>
  )
}
export default App
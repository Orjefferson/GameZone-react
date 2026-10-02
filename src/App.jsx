import AppNavbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import Lancamentos from './sections/Lancamentos'

function App() {
  return (
    <>
      <AppNavbar />
      <main>
        <Hero />
        <Lancamentos />
      </main>
      <Footer />
    </>
  )
}
export default App
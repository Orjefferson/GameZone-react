import AppNavbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <div id="topo" />
      <AppNavbar />
      <main>
        <p className="gz-wrap gz-section">Conteúdo das seções entra aqui.</p>
      </main>
      <Footer />
    </>
  )
}

export default App
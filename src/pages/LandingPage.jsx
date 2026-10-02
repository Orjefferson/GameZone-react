import Hero from '../sections/Hero'
import Lancamentos from '../sections/Lancamentos'
import Generos from '../sections/Generos'
import Noticias from '../sections/Noticias'
import ChamadaFinal from '../sections/ChamadaFinal'

export default function LandingPage() {
  return (
    <main>
      <Hero />
      <Lancamentos />
      <Generos />
      <Noticias />
      <ChamadaFinal />
    </main>
  )
}
import generos from '../data/generos'
import CardGenero from '../components/CardGenero'

export default function Generos() {
  return (
    <section className="gz-generos" id="generos" aria-label="Gêneros">
      <h2>Qual é seu próximo jogo?</h2>
      <p className="gz-generos-sub">
        Encontre experiências baseadas no seu estilo.
      </p>

      <div className="gz-tipojogo">
        {generos.map((genero) => (
          <CardGenero key={genero.id} genero={genero} />
        ))}
      </div>

      <a href="#generos" className="gz-minicard btn_outglow">
        Veja todos os Gêneros &gt;
      </a>
    </section>
  )
}
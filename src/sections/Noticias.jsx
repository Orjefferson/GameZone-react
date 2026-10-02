import { useMemo, useState } from 'react'
import noticias, { filtros, maisLidas } from '../data/noticias'
import ChipFiltro from '../components/ChipFiltro'
import NoticiaDestaque from '../components/NoticiaDestaque'
import CardNoticia from '../components/CardNoticia'

export default function Noticias() {
  const [filtro, setFiltro] = useState('Todos')
  const [email, setEmail] = useState('')

  const destaque = useMemo(
    () => noticias.find((n) => n.destaque),
    [],
  )

  const lista = useMemo(() => {
    return noticias.filter((n) => {
      if (n.destaque) return false // destaque já tem bloco próprio
      if (filtro === 'Todos') return true
      return n.categoria === filtro
    })
  }, [filtro])

  function handleNewsletter(e) {
    e.preventDefault()
    // só UI por enquanto
    setEmail('')
  }

  return (
    <section className="gz-noticias" id="noticias" aria-label="Notícias">
      <header className="gz-noticias-header">
        <span className="gz-hero-kicker">Atualizações · Reviews · Esports</span>
        <h2>
          Notícias <span className="gz-accent">Gamezone.</span>
        </h2>
        <p>Cobertura diária de lançamentos, análises e o que movimenta a cena gamer.</p>
      </header>

      <div className="gz-news-filters" role="navigation" aria-label="Filtros de notícias">
        {filtros.map((f) => (
          <ChipFiltro
            key={f}
            label={f}
            ativo={filtro === f}
            onClick={() => setFiltro(f)}
          />
        ))}
      </div>

      <NoticiaDestaque noticia={destaque} />

      <div className="gz-news-layout">
        <div className="gz-news-grid">
          {lista.map((n) => (
            <CardNoticia key={n.id} noticia={n} />
          ))}
        </div>

        <aside className="gz-news-aside" aria-label="Complementos">
          <div className="gz-news-aside-card">
            <h3>Mais lidas</h3>
            <ol className="gz-news-rank">
              {maisLidas.map((item, i) => (
                <li key={item.id}>
                  <span className="gz-news-rank-num">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <a href="#noticias">{item.titulo}</a>
                    <small>{item.meta}</small>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="gz-news-aside-card gz-news-newsletter">
            <h3>Newsletter</h3>
            <p>
              Receba o resumo semanal com lançamentos, reviews e destaques da
              comunidade.
            </p>
            <form onSubmit={handleNewsletter}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu e-mail"
                aria-label="E-mail para newsletter"
                required
              />
              <button type="submit" aria-label="Assinar newsletter">
                <i className="bi bi-send-fill" aria-hidden="true" />
              </button>
            </form>
          </div>
        </aside>
      </div>
    </section>
  )
}
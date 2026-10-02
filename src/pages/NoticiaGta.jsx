import { useState } from 'react'
import { Link } from 'react-router-dom'
import materiaGta from '../data/materiaGta'
import noticias from '../data/noticias'
import '../styles/article.css'

export default function NoticiaGta() {
  const [email, setEmail] = useState('')
  const relacionadas = noticias.filter((n) => !n.destaque).slice(0, 4)

  function handleNewsletter(e) {
    e.preventDefault()
    setEmail('')
  }

  return (
    <main className="gz-article-wrap">
      <nav className="gz-breadcrumb" aria-label="Navegação da matéria">
        <Link to="/#noticias">Notícias</Link>
        <span className="gz-breadcrumb-sep">/</span>
        <span>{materiaGta.categoria}</span>
        <span className="gz-breadcrumb-sep">/</span>
        <span>GTA VI</span>
      </nav>

      <div className="gz-article-layout">
        <article className="gz-article">
          <div className="gz-article-cover">
            <img src={materiaGta.imagem} alt={`Arte promocional: ${materiaGta.titulo}`} />
          </div>

          <header className="gz-article-header">
            <span className="gz-chip">Destaque</span>
            <span className="gz-chip is-outline">{materiaGta.categoria}</span>
            <h1>{materiaGta.titulo}</h1>
            <div className="gz-news-meta">
              <time dateTime={materiaGta.data}>
                <i className="bi bi-calendar3" aria-hidden="true" /> {materiaGta.dataLabel}
              </time>
              <span>
                <i className="bi bi-person" aria-hidden="true" /> {materiaGta.autor}
              </span>
              <span>
                <i className="bi bi-clock" aria-hidden="true" /> {materiaGta.leitura}
              </span>
            </div>
          </header>

          <div className="gz-article-content">
            {materiaGta.paragrafosIntro.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}

            <blockquote>{materiaGta.citacao}</blockquote>

            {materiaGta.secoes.map((sec) => (
              <section key={sec.titulo}>
                <h2>{sec.titulo}</h2>
                {sec.paragrafos.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
                {sec.lista && (
                  <ul>
                    {sec.lista.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            <div className="gz-article-tags">
              {materiaGta.tags.map((tag) => (
                <span key={tag} className="gz-chip is-outline">
                  {tag}
                </span>
              ))}
            </div>

            <div className="gz-article-nav">
              <Link to="/#noticias" className="btn_outglow">
                ← Voltar às notícias
              </Link>
              <Link to="/comunidade" className="btn_purp">
                Comentar na comunidade &gt;
              </Link>
            </div>
          </div>
        </article>

        <aside className="gz-news-aside" aria-label="Complementos">
          <div className="gz-news-aside-card">
            <h2>Leia também</h2>
            <ul className="gz-related-list">
              {relacionadas.map((n) => (
                <li key={n.id}>
                  <Link to="/#noticias">{n.titulo}</Link>
                  <small>
                    {n.tag || n.categoria} · {n.dataLabel}
                  </small>
                </li>
              ))}
            </ul>
          </div>

          <div className="gz-news-aside-card gz-news-newsletter">
            <h2>Newsletter</h2>
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
    </main>
  )
}
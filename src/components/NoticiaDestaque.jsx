export default function NoticiaDestaque({ noticia }) {
  if (!noticia) return null

  return (
    <article className="gz-news-featured">
      <div className="gz-news-featured-media">
        <img src={noticia.imagem} alt={noticia.titulo} />
      </div>
      <div className="gz-news-featured-body">
        <div className="gz-news-featured-copy">
          <span className="gz-chip">Destaque</span>
          <h3>{noticia.titulo}</h3>
          <p>{noticia.resumo}</p>
          <div className="gz-news-meta">
            <time dateTime={noticia.data}>
              <i className="bi bi-calendar3" aria-hidden="true" /> {noticia.dataLabel}
            </time>
            <span>
              <i className="bi bi-person" aria-hidden="true" /> {noticia.autor}
            </span>
            <span>
              <i className="bi bi-clock" aria-hidden="true" /> {noticia.leitura}
            </span>
          </div>
        </div>
        {/* depois: /noticias/gta-vi */}
        <a href="#noticias" className="btn_purp">
          Ler matéria &gt;
        </a>
      </div>
    </article>
  )
}

export default function CardNoticia({ noticia }) {
    return (
      <article className="gz-news-card">
        <div className="gz-news-card-media">
          <img src={noticia.imagem} alt={noticia.titulo} />
        </div>
        <div className="gz-news-card-body">
          <span className="gz-chip">{noticia.tag || noticia.categoria}</span>
          <h3>{noticia.titulo}</h3>
          <p>{noticia.resumo}</p>
          <div className="gz-news-meta">
            <time dateTime={noticia.data}>{noticia.dataLabel}</time>
            <span>{noticia.leitura}</span>
          </div>
          <a href="#" className="btn_purp">
            Ler mais &gt;
          </a>
        </div>
      </article>
    )
  }
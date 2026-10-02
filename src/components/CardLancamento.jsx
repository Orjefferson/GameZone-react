const platImg = {
    win: '/img/win-plat-logo.png',
    ps: '/img/ps-plat-logo.png',
    sw: '/img/sw-plat-logo.png',
    xbox: '/img/xbox-plat-logo.png',
  }

  export default function CardLancamento({ jogo }) {
    return (
      <article className="gz-card-home">
        <div className="gz-img-wraper">
          <img
            className="gz-img-home"
            src={jogo.imagem}
            alt={jogo.nome}
          />
        </div>
  
        <div className="gz-card-body-home">
          <span className="gz-badge">{jogo.genero}</span>
          <h3 className="gz-card-title-home">{jogo.nome}</h3>
          <p className="gz-card-text-home">{jogo.resumo}</p>
        </div>
  
        <div className="gz-card-rating-plat">
          <div>
            <img src="/img/star.png" alt="" />
            <span>{jogo.nota}</span>
          </div>
          <div>
            {jogo.plataformas.map((p) => (
              <img key={p} src={platImg[p]} alt={p} />
            ))}
          </div>
        </div>
      </article>
    )
  }
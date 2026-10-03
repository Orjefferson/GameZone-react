export default function Hero() {
  return (
    <section className="gz-hero" id="topo" aria-label="Apresentação">
      <div className="gz-hero-inner">
        <div className="gz-hero-text">
          <span className="gz-hero-kicker">Bem vindo à</span>
          <h1>
            Game<span className="gz-accent">zone.</span>
          </h1>
          <h2>
            <span className="gz-accent">Explore.</span> jogue. Conecte-se.
          </h2>
          <p>
            O seu destino definitivo para descobrir os melhores jogos, notícias
            e uma comunidade apaixonada por games.
          </p>
          <div className="gz-hero-actions">
            <a href="#lancamentos" className="btn_purp">
              Explorar Jogos &gt;
            </a>
            <a href="#cta" className="btn_outglow">
              Saiba Mais
            </a>
          </div>
        </div>

        <div>
          <img
            className="gz-hero-character"
            src="/img/personagem_banner.png"
            alt="Personagem em destaque da GameZone"
          />
        </div>
      </div>
    </section>
  )
}

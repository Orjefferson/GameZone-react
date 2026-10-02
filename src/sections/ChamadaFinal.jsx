export default function ChamadaFinal() {
    return (
      <section className="gz-cta" id="cta" aria-label="Comunidade">
        <span className="gz-hero-kicker">Fóruns · Grupos · Enquetes</span>
        <h2>
          Entre na comunidade <span className="gz-accent">Gamezone.</span>
        </h2>
        <p className="gz-cta-sub">
          Discuta lançamentos, monte grupos e vote nas enquetes com outros
          jogadores.
        </p>
  
        <div className="gz-cta-actions">
          {/* depois: href="/comunidade" com React Router */}
          <a href="#cta" className="btn_purp">
            Explorar comunidade &gt;
          </a>
          <a
            href="https://discord.com"
            className="btn_outglow"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/img/discord.png" alt="" className="gz-cta-discord" />
            Discord
          </a>
        </div>
      </section>
    )
  }
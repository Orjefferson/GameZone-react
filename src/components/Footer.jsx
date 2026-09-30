export default function Footer() {
  return (
    <footer className="gz-footer">
      <div className="gz-foot-col">
        <img src="/img/logo.png" alt="Logo GameZone" className="gz-foot-logo" />
        <p>Conectando Jogadores.</p>
        <p>Criando Histórias</p>
        <p>construindo o futuro dos Games.</p>
        <div className="gz-social">
            <img src="/img/discord.png" alt="Discord" />
            <img src="/img/instagram.png" alt="Instagram" />
            <img src="/img/twitter.png" alt="Twitter" />
            <img src="/img/youtube.png" alt="YouTube" />
        </div>
      </div>

      <div className="gz-foot-col">
        <h4>Navegação</h4>
        <p>
          <a href="#lancamentos">Lançamentos</a>
          <br />
          <a href="#noticias">Notícias</a>
          <br />
          <a href="#cta">Comunidade</a>
          <br />
          <a href="#cta">Sobre</a>
        </p>
      </div>

      <div className="gz-foot-col">
        <p>
          <a href="#noticias">Reviews</a>
          <br />
          <a href="#lancamentos">Próximos Lançamentos</a>
          <br />
          <a href="#cta">Loja</a>
        </p>
      </div>

      <div className="gz-foot-col">
        <h4>Fique por dentro</h4>
        <p>Receba as ultimas notícias e lançamentos em primeira mão!</p>
        <form className="gz-newsletter" onSubmit={(e) => e.preventDefault()}>
          <input id="email" type="email" name="email" aria-label="E-mail" />
          <button id="send" type="submit" aria-label="Enviar">
            <img src="/img/send.png" alt="" />
          </button>
        </form>
      </div>
    </footer>
  );
}

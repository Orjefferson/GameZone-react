export default function CardGrupo({ grupo }) {
    return (
      <article className="gz-group-card">
        <div className="gz-group-card-top">
          <h2>{grupo.nome}</h2>
          <span className="gz-chip">{grupo.tag}</span>
        </div>
        <p className="gz-muted">{grupo.descricao}</p>
        <p className="gz-muted">
          <i className="bi bi-people me-1" aria-hidden="true" />
          {grupo.membros} membros
        </p>
        <button type="button" className="btn_outglow">
          Entrar no grupo
        </button>
      </article>
    )
  }
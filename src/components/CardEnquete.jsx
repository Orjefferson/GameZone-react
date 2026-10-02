import { useState } from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'

export default function CardEnquete({ enquete }) {
  const aberta = enquete.status === 'Aberta'
  const [escolha, setEscolha] = useState(null)
  const [votou, setVotou] = useState(false)
  const [opcoes, setOpcoes] = useState(enquete.opcoes)

  function handleVotar() {
    if (!escolha || votou) return

    setOpcoes((prev) =>
      prev.map((op) =>
        op.id === escolha ? { ...op, votos: Math.min(100, op.votos + 1) } : op,
      ),
    )
    setVotou(true)
  }

  const mostrarFormulario = aberta && !votou

  return (
    <article className="gz-poll-card">
      <div className="gz-group-card-top">
        <h2>{enquete.titulo}</h2>
        <span className={`gz-chip${aberta ? '' : ' is-outline'}`}>
          {enquete.status}
        </span>
      </div>
      <p className="gz-muted">{enquete.descricao}</p>

      <div className={mostrarFormulario ? 'gz-poll-layout' : undefined}>
        {mostrarFormulario && (
          <fieldset className="gz-poll-options">
            <legend>Sua escolha</legend>
            {opcoes.map((op) => (
              <label key={op.id} className="gz-poll-option">
                <input
                  type="radio"
                  name={enquete.id}
                  value={op.id}
                  checked={escolha === op.id}
                  onChange={() => setEscolha(op.id)}
                />
                {op.label}
              </label>
            ))}
            <button
              type="button"
              className="btn_purp"
              disabled={!escolha}
              onClick={handleVotar}
            >
              Votar
            </button>
          </fieldset>
        )}

        <div className="gz-poll-results">
          <p className="gz-muted">
            {votou || !aberta ? 'Resultado' : 'Resultado parcial'}
          </p>
          {opcoes.map((op) => (
            <div key={op.id} className="gz-poll-bar">
              <label>
                {op.label} — {op.votos}%
                {votou && escolha === op.id ? ' (seu voto)' : ''}
              </label>
              <ProgressBar
                now={op.votos}
                label={`${op.votos}%`}
                aria-label={`${op.label} ${op.votos} por cento`}
              />
            </div>
          ))}
        </div>
      </div>
    </article>
  )
}

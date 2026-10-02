import { useState } from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'

export default function CardEnquete({ enquete }) {
  const aberta = enquete.status === 'Aberta'
  const [escolha, setEscolha] = useState(null)
  const [votou, setVotou] = useState(false)

  return (
    <article className="gz-poll-card">
      <div className="gz-group-card-top">
        <h2>{enquete.titulo}</h2>
        <span className="gz-chip">{enquete.status}</span>
      </div>
      <p className="gz-muted">{enquete.descricao}</p>

      {aberta && !votou && (
        <fieldset className="gz-poll-options">
          <legend>Sua escolha</legend>
          {enquete.opcoes.map((op) => (
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
            onClick={() => setVotou(true)}
          >
            Votar
          </button>
        </fieldset>
      )}

      <div className="gz-poll-results">
        <p className="gz-muted">{votou || !aberta ? 'Resultado' : 'Resultado parcial'}</p>
        {enquete.opcoes.map((op) => (
          <div key={op.id} className="gz-poll-bar">
            <label>
              {op.label} — {op.votos}%
            </label>
            <ProgressBar now={op.votos} label={`${op.votos}%`} />
          </div>
        ))}
      </div>
    </article>
  )
}
import Accordion from 'react-bootstrap/Accordion'
import { useState } from 'react'

export default function TopicoForum({ topico, eventKey }) {
  const [comentario, setComentario] = useState('')
  const [lista, setLista] = useState(topico.comentarios)

  function handleComentar(e) {
    e.preventDefault()
    const texto = comentario.trim()
    if (!texto) return
    setLista((prev) => [
      ...prev,
      {
        id: Date.now(),
        autor: 'Você',
        iniciais: 'VC',
        quando: 'agora',
        texto,
      },
    ])
    setComentario('')
  }

  return (
    <Accordion.Item eventKey={eventKey} className="gz-topic-item">
      <Accordion.Header>
        <span className="gz-topic-header">
          <span className="gz-topic-title">{topico.titulo}</span>
          <span className="gz-topic-meta">
            <span className="gz-chip">{topico.categoria}</span>
            <span>{topico.autor}</span>
            <span>{topico.quando}</span>
            <span>{topico.respostas} respostas</span>
          </span>
        </span>
      </Accordion.Header>
      <Accordion.Body>
        <p>{topico.texto}</p>
        <hr />
        <h3 className="h6 mb-3">Comentários</h3>
        {lista.map((c) => (
          <div key={c.id} className="gz-comment">
            <div className="gz-avatar">{c.iniciais}</div>
            <div>
              <div className="gz-comment-author">
                {c.autor} <small>{c.quando}</small>
              </div>
              <p>{c.texto}</p>
            </div>
          </div>
        ))}
        <form className="gz-comment-form" onSubmit={handleComentar}>
          <label htmlFor={`c-${topico.id}`}>Responder ao tópico</label>
          <textarea
            id={`c-${topico.id}`}
            value={comentario}
            onChange={(e) => setComentario(e.target.value)}
            placeholder="Escreva um comentário..."
          />
          <button type="submit" className="btn_purp">
            Comentar
          </button>
        </form>
      </Accordion.Body>
    </Accordion.Item>
  )
}
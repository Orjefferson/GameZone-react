import { useState } from 'react'
import Modal from 'react-bootstrap/Modal'

export default function CardGrupo({ grupo }) {
  const [entrou, setEntrou] = useState(false)
  const [modalAberto, setModalAberto] = useState(false)

  function handleEntrar() {
    if (entrou) return
    setEntrou(true)
    setModalAberto(true)
  }

  return (
    <>
      <article className="gz-group-card">
        <div className="gz-group-card-top">
          <h2>{grupo.nome}</h2>
          <span className="gz-chip">{grupo.tag}</span>
        </div>
        <p className="gz-muted gz-group-card-desc">{grupo.descricao}</p>
        <div className="gz-group-card-foot">
          <p className="gz-muted">
            <i className="bi bi-people me-1" aria-hidden="true" />
            {grupo.membros + (entrou ? 1 : 0)} membros
          </p>
          <button
            type="button"
            className={entrou ? 'btn_purp' : 'btn_outglow'}
            onClick={handleEntrar}
            disabled={entrou}
          >
            {entrou ? 'Membro' : 'Entrar no grupo'}
          </button>
        </div>
      </article>

      <Modal
        show={modalAberto}
        onHide={() => setModalAberto(false)}
        centered
        contentClassName="gz-modal"
      >
        <Modal.Header closeButton closeVariant="white">
          <Modal.Title>Grupo</Modal.Title>
        </Modal.Header>
        <Modal.Body>Você entrou no grupo {grupo.nome}.</Modal.Body>
        <Modal.Footer>
          <button
            type="button"
            className="btn_purp"
            onClick={() => setModalAberto(false)}
          >
            Fechar
          </button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

import { useMemo, useState } from 'react'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import Accordion from 'react-bootstrap/Accordion'
import ChipFiltro from '../components/ChipFiltro'
import TopicoForum from '../components/TopicoForum'
import CardGrupo from '../components/CardGrupo'
import CardEnquete from '../components/CardEnquete'
import {
  filtrosTopico,
  topicos,
  grupos,
  enquetes,
} from '../data/comunidade'
import '../styles/community.css'

export default function Comunidade() {
  const [filtro, setFiltro] = useState('Todos')

  const topicosFiltrados = useMemo(
    () =>
      topicos.filter((t) => filtro === 'Todos' || t.categoria === filtro),
    [filtro],
  )

  return (
    <main className="gz-comunidade">
      <header className="gz-page-hero gz-community-hero">
        <span className="gz-hero-kicker">Fóruns · Grupos · Enquetes</span>
        <h1>
          Comunidade <span className="gz-accent">Gamezone.</span>
        </h1>
        <p>
          Fóruns, grupos e enquetes para falar de jogos com outros jogadores.
        </p>
      </header>

      <div className="gz-comunidade-wrap">
        <Tabs defaultActiveKey="foruns" className="gz-community-tabs mb-4">
          <Tab
            eventKey="foruns"
            title={
              <>
                <i className="bi bi-chat-dots me-1" aria-hidden="true" />
                Fóruns
              </>
            }
          >
            <div className="gz-news-filters mb-3">
              {filtrosTopico.map((f) => (
                <ChipFiltro
                  key={f}
                  label={f}
                  ativo={filtro === f}
                  onClick={() => setFiltro(f)}
                />
              ))}
            </div>

            {topicosFiltrados.length === 0 ? (
              <div className="gz-empty" role="status">
                <i className="bi bi-chat-dots gz-empty-icon" aria-hidden="true" />
                <h2 className="gz-empty-title">Nenhum tópico encontrado</h2>
                <p className="gz-empty-text">
                  Não há discussões na categoria <strong>{filtro}</strong> no
                  momento.
                </p>
                <button
                  type="button"
                  className="btn_outglow"
                  onClick={() => setFiltro('Todos')}
                >
                  Ver todos os tópicos
                </button>
              </div>
            ) : (
              <Accordion>
                {topicosFiltrados.map((t) => (
                  <TopicoForum key={t.id} topico={t} eventKey={t.id} />
                ))}
              </Accordion>
            )}
          </Tab>

          <Tab
            eventKey="grupos"
            title={
              <>
                <i className="bi bi-people me-1" aria-hidden="true" />
                Grupos
              </>
            }
          >
            <div className="gz-groups-grid">
              {grupos.map((g) => (
                <CardGrupo key={g.id} grupo={g} />
              ))}
            </div>
          </Tab>

          <Tab
            eventKey="enquetes"
            title={
              <>
                <i className="bi bi-bar-chart me-1" aria-hidden="true" />
                Enquetes
              </>
            }
          >
            <div className="gz-polls-grid">
              {enquetes.map((e) => (
                <CardEnquete key={e.id} enquete={e} />
              ))}
            </div>
          </Tab>
        </Tabs>
      </div>
    </main>
  )
}
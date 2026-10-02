import { useEffect, useRef, useState } from 'react'
import lancamentos from '../data/lancamentos'
import CardLancamento from '../components/CardLancamento'

export default function Lancamentos() {
  const trackRef = useRef(null)
  const [podeScrollar, setPodeScrollar] = useState(false)

  function atualizarSetas() {
    const el = trackRef.current
    if (!el) return
    // sobra conteúdo além da área visível?
    setPodeScrollar(el.scrollWidth > el.clientWidth + 1)
  }

  useEffect(() => {
    atualizarSetas()

    const el = trackRef.current
    if (!el) return

    // recalcula se a janela mudar (mobile ↔ desktop)
    window.addEventListener('resize', atualizarSetas)

    // recalcula se o próprio track mudar de tamanho
    const ro = new ResizeObserver(atualizarSetas)
    ro.observe(el)

    return () => {
      window.removeEventListener('resize', atualizarSetas)
      ro.disconnect()
    }
  }, [])

  function scrollByCard(dir) {
    const el = trackRef.current
    if (!el) return
    const card = el.querySelector('.gz-carousel-item')
    const step = card ? card.offsetWidth : 280
    el.scrollBy({ left: dir * step, behavior: 'smooth' })
  }

  return (
    <section className="gz-lancamentos" id="lancamentos" aria-label="Lançamentos">
      <div className="gz-sml-title">
        <img src="/img/fire.png" alt="" />
        <h2>Lançamentos</h2>
      </div>

      <div className="gz-carousel">
        {podeScrollar && (
          <button
            type="button"
            className="gz-carousel-btn gz-carousel-prev"
            onClick={() => scrollByCard(-1)}
            aria-label="Anterior"
          >
            <i className="bi bi-chevron-left" aria-hidden="true" />
          </button>
        )}

        <div className="gz-carousel-track" ref={trackRef}>
          {lancamentos.map((jogo) => (
            <div className="gz-carousel-item" key={jogo.id}>
              <CardLancamento jogo={jogo} />
            </div>
          ))}
        </div>

        {podeScrollar && (
          <button
            type="button"
            className="gz-carousel-btn gz-carousel-next"
            onClick={() => scrollByCard(1)}
            aria-label="Próximo"
          >
            <i className="bi bi-chevron-right" aria-hidden="true" />
          </button>
        )}
      </div>
    </section>
  )
}
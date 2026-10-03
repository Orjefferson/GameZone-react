import estatisticas from '../data/estatisticas'

export default function Estatisticas() {
  return (
    <section
      className="gz-estatisticas"
      id="estatisticas"
      aria-label="Estatísticas"
    >
      {estatisticas.map((item, index) => (
        <div key={item.id} className="gz-sts-item">
          {index > 0 && <span className="gz-sts-borda" aria-hidden="true" />}
          <div className="gz-card-sts">
            <img src={item.icone} alt={item.alt} />
            <div>
              <h3>{item.valor}</h3>
              <span>{item.label}</span>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

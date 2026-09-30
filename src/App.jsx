function App() {
  return (
    <main className="gz-wrap gz-section">
      <h1>GameZone</h1>
      <p style={{ fontFamily: 'var(--gz-font-body)', color: 'var(--gz-text-muted)' }}>
        Teste dos componentes base
      </p>
      <a href="#teste" className="btn_purp">Botão roxo</a>{' '}
      <a href="#teste" className="btn_outglow">Botão outline</a>
      <div style={{ marginTop: '1rem' }}>
        <span className="gz-chip">Ativo</span>{' '}
        <span className="gz-chip is-outline">Outline</span>
      </div>
    </main>
  )
}

export default App
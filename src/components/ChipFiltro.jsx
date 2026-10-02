export default function ChipFiltro({ label, ativo, onClick }) {
    return (
      <button
        type="button"
        className={`gz-chip${ativo ? '' : ' is-outline'}`}
        onClick={onClick}
        aria-pressed={ativo}
      >
        {label}
      </button>
    )
  }
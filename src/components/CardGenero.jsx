export default function CardGenero({ genero }) {
    return (
      <a href={`#generos`} className="gz-minicard" aria-label={`Gênero ${genero.nome}`}>
        <img src={genero.icone} alt="" />
        <h3>{genero.nome}</h3>
      </a>
    )
  }
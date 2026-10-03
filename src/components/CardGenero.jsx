import { Link } from "react-router-dom";

export default function CardGenero({ genero }) {
  return (
    <Link
      to="/#lancamentos"
      className="gz-minicard"
      aria-label={`Ver lançamentos de ${genero.nome}`}
    >
      <img src={genero.icone} alt="" />
      <h3>{genero.nome}</h3>
    </Link>
  );
}

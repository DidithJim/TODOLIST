interface Props {
    filtro: string;
    setFiltro: (filtro: string) => void;
  }
  
  export default function Filtro({ filtro, setFiltro }: Props) {
    return (
      <div className="botones-filtro">
        {["todas", "completadas", "pendientes"].map((f) => (
          <button
            key={f}
            onClick={() => setFiltro(f)}
            className={filtro === f ? "activo" : ""}
          >
            {f}
          </button>
        ))}
      </div>
    );
  }
  
import { Tarea } from "../types/Tarea";

interface Props {
  tarea: Tarea;
  alCambiar: (id: number) => void;
  alEliminar: (id: number) => void;
}

export default function TareaItem({ tarea, alCambiar, alEliminar }: Props) {
  return (
    <li className="tarea-item">
      <input
        type="checkbox"
        checked={tarea.completada}
        onChange={() => alCambiar(tarea.id)}
      />
      <span style={{ textDecoration: tarea.completada ? "line-through" : "none" }}>
        {tarea.titulo}
      </span>
      <button onClick={() => alEliminar(tarea.id)}>Eliminar</button>
    </li>
  );
}

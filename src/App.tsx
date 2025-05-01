import { useEffect, useState } from "react";
import { Tarea } from "./types/Tarea";
import TareaItem from "./components/TareaItem";
import Filtro from "./components/Filtro";
import { usarTema } from "./context/TemaContexto";
import { guardaTareas, cargaTareas } from "./utils/localStorage";

function App() {
  const [tareas, setTareas] = useState<Tarea[]>(cargaTareas);
  const [filtro, setFiltro] = useState("todas");
  const { tema, cambiarTema } = usarTema();

  useEffect(() => {
    if (tareas.length === 0) {
      fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
        .then((res) => res.json())
        .then((datos) =>
          setTareas(
            datos.map((t: any) => ({
              id: t.id,
              titulo: t.title,
              completada: t.completed,
            }))
          )
        );
    }
  }, []);

  useEffect(() => {
    guardaTareas(tareas);
  }, [tareas]);

  const cambiarEstadoTarea = (id: number) =>
    setTareas((anteriores) =>
      anteriores.map((tarea) =>
        tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
      )
    );

  const eliminarTarea = (id: number) =>
    setTareas((anteriores) => anteriores.filter((tarea) => tarea.id !== id));

  const tareasFiltradas = tareas.filter((tarea) => {
    if (filtro === "completadas") return tarea.completada;
    if (filtro === "pendientes") return !tarea.completada;
    return true;
  });

  return (
    <div className={`app ${tema}`}>
      <header>
        <h1>Todo List</h1>
        <button onClick={cambiarTema}>Tema</button>
      </header>
      <Filtro filtro={filtro} setFiltro={setFiltro} />
      <ul>
        {tareasFiltradas.map((tarea) => (
          <TareaItem
            key={tarea.id}
            tarea={tarea}
            alCambiar={cambiarEstadoTarea}
            alEliminar={eliminarTarea}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;

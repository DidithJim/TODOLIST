import { Tarea } from "../types/Tarea";

const STORAGE__KEY = "tareas";

export const cargaTareas = () : Tarea [] => {
    const datos = localStorage.getItem(STORAGE__KEY);
    return datos ? JSON.parse (datos) : [];
};

export const guardaTareas = (tareas: Tarea[]) =>{
    localStorage.setItem(STORAGE__KEY, JSON.stringify(tareas));
}



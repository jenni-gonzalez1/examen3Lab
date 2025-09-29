import { crearTarea } from '../tarea/tarea.js';

export function crearListaTareas() {
  const contenedor = document.createElement('div');
  contenedor.classList.add('tareas');

  function agregarTarea(texto) {
    const tarea = crearTarea(texto);
    contenedor.appendChild(tarea);
  }

  return { contenedor, agregarTarea };
}

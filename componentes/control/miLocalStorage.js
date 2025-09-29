const KEY = 'misTareas';

export function guardarTareas(tareas) {
  localStorage.setItem(KEY, JSON.stringify(tareas));
}

export function obtenerTareas() {
  return JSON.parse(localStorage.getItem(KEY)) || [];
}

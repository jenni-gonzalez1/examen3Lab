const lista = 'carrito';

function guardarTareas(tarea) {
    const productosActuales = obtenerTareas();

    tareas.push(tarea);

    localStorage.setItem(CARRITO, JSON.stringify(tareas));
}

function obtenerTareas() {
    return JSON.parse(localStorage.getItem(Lista)) || [];
}

function eliminarTareas(indice) {
    const tareas = obtenerTareas();
    tareas.splice(indice, 1); 
    localStorage.setItem(Lista, JSON.stringify(tareas));
}

function limpiarTareas() {
    localStorage.removeItem(Lista);
}


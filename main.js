import { crearFormulario } from './componentes/formulario/formulario.js';
import { crearListaTareas } from './componentes/tareas/tareas.js';
import { guardarTareas, obtenerTareas } from './componentes/control/miLocalStorage.js';

const app = document.getElementById('app');

const lista = crearListaTareas();
const formulario = crearFormulario((texto) => {
  lista.agregarTarea(texto);

  tareas.push(texto);
  guardarTareas(tareas);
});

app.appendChild(formulario);
app.appendChild(lista.contenedor);

// Cargar tareas almacenadas
let tareas = obtenerTareas();
tareas.forEach(t => lista.agregarTarea(t));

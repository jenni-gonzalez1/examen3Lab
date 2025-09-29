const contenedorFormulario = document.getElementById('formulario');

const inputTarea = document.createElement('input');
inputTarea.type = 'text';
inputTarea.placeholder = 'Nombre-de-la-tarea';
inputTarea.id = 'input-tarea';

const seccion = document.getElementById('seccion-lista');

const botonAgregar = document.createElement('button');
botonAgregar.textContent = 'Agregar';
botonAgregar.id = 'btn-agregar';

 // Crear contenedor donde estara la lista de tareas
  const contenedor = document.createElement('div-tarea1');
  contenedor.id = "contenedor-tareas";
  contenedor.style.border = "1px solid #ccc";
  contenedor.style.padding = "15px";
  contenedor.style.marginTop = "5px";
  contenedor.style.borderRadius = "8px";
  contenedor.style.width = "100px";
  contenedor.style.backgroundColor = "#f9f9f9";
  contenedor.style.margin = "50px auto";

contenedorFormulario.appendChild(inputTarea);
contenedorFormulario.appendChild(botonAgregar);

botonAgregar.addEventListener('click', () => {
  const nombreTarea = inputTarea.value.trim();

  if (nombreTarea !== '') {
    console.log('Tarea agregada:', nombreTarea);
    inputTarea.value = ''; 
  } else {
    alert('escribe una tarea.');
  }
});
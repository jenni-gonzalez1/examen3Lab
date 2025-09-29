export function crearFormulario(onSubmit) {
  const form = document.createElement('form');
  form.classList.add('formulario');

  const input = document.createElement('input');
  input.type = 'text';
  input.placeholder = 'Escribe una tarea';
  input.required = true;

  const boton = document.createElement('button');
  boton.type = 'submit';
  boton.textContent = 'Agregar';

  form.appendChild(input);
  form.appendChild(boton);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    onSubmit(input.value);
    input.value = '';
  });

  return form;
}

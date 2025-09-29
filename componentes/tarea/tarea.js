export function crearTarea(texto) {
  const div = document.createElement('div');
  div.classList.add('tarea');

  const label = document.createElement('label');
  label.textContent = texto;

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  div.appendChild(label);
  div.appendChild(checkbox);

  return div;
}

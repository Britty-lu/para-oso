const sobre = document.getElementById('sobre');
const carta = document.getElementById('carta');
const btn = document.getElementById('btnSiguiente');

sobre.addEventListener('click', () => {
  carta.classList.add('mostrar');
});

carta.addEventListener('click', () => {
  carta.classList.add('guardar');

  setTimeout(() => {
    btn.classList.add('mostrar');
  }, 600);
});

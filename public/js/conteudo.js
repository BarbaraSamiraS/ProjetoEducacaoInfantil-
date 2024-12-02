const topicos = document.querySelector('.topicos');
const btnTop = document.querySelector('.iconTop');
const btnBottom = document.querySelector('.iconBottom');
const caixas = document.querySelectorAll('.caixa'); // Seleciona todas as caixas

let currentIndex = 0; // Índice do cubo atual
const cubes = document.querySelectorAll('.cube'); // Seleciona todos os cubos
const viewportHeight = document.querySelector('.tamanho').offsetHeight; // Altura visível
const maxIndex = cubes.length - 1; // Último índice disponível

// Atualiza a posição, visibilidade dos botões e classes das caixas
function updatePosition() {
  const offset = -(currentIndex * viewportHeight); // Calcula o deslocamento
  topicos.style.transform = `translateY(${offset}px)`; // Aplica o deslocamento

  // Atualiza a visibilidade dos botões
  btnTop.style.display = currentIndex === 0 ? 'none' : 'block';
  btnBottom.style.display = currentIndex === maxIndex ? 'none' : 'block';

  // Atualiza a classe "active" nas caixas
  caixas.forEach((caixa, index) => {
    caixa.classList.toggle('active', index === currentIndex);
  });
}

// Evento para o botão "Anterior" (iconTop)
btnTop.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--; // Vai para o cubo anterior
    updatePosition();
  }
});

// Evento para o botão "Próximo" (iconBottom)
btnBottom.addEventListener('click', () => {
  if (currentIndex < maxIndex) {
    currentIndex++; // Vai para o próximo cubo
    updatePosition();
  }
});

// Inicializa a posição e visibilidade dos botões
updatePosition();

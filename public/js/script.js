// Seleciona os elementos necessários
const slides = document.querySelectorAll('.card-container');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const linkCount = document.querySelector("#phone_button");


let currentSlide = 0;

// Função para atualizar os slides
function updateSlide() {
  slides.forEach((slide, index) => { 
    slide.classList.toggle('on', index === currentSlide); 
  });
}

// Evento para o botão "Anterior"
prevButton.addEventListener('click', () => {
  currentSlide = (currentSlide > 0) ? currentSlide - 1 : slides.length - 1;
  updateSlide();
});

// Evento para o botão "Próximo"
nextButton.addEventListener('click', () => {
  currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
  updateSlide();
});

// Inicializa o slider
updateSlide();

document.addEventListener("DOMContentLoaded", () => {
  const navItems = document.querySelectorAll("#nav_list .nav-item");

  navItems.forEach((navItem) => {
      navItem.addEventListener("click", () => {
          navItems.forEach((item) => item.classList.remove("active"));

          navItem.classList.add("active");
      });
  });
});



linkCount.addEventListener("click", (e) => {
  e.preventDefault(); 

  sessionStorage.setItem("indice", "count");

  setTimeout(() => {
    window.location.href = "login";
  }, 100); 
});
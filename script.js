const carrusel = document.querySelector('.carrusel');
const slides = carrusel.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(slideIndex) {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.transform = 'translateX(0)';
    } else {
      slide.style.transform = 'translateX(100%)';
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

setInterval(nextSlide, 5000); // Cambia de slide cada 5 segundos

showSlide(currentSlide);



let currentSlide = 0;
const totalSlides = 9; // Total number of cards
const cardsToShow = 4; // Number of cards to show at a time
const cardContainer = document.querySelector(".card-containerR");

function updateSlide() {
  const offset = -currentSlide * (100 / cardsToShow);
  cardContainer.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  if (currentSlide < totalSlides - cardsToShow) {
    currentSlide++;
    updateSlide();
  }
}

function prevSlide() {
  if (currentSlide > 0) {
    currentSlide--;
    updateSlide();
  }
}
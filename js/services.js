let currentSlideR = 0;
const cardsToShowR = 4; // Number of cards visible at a time
const cardContainerR = document.querySelector(".card-containerR");
const totalCardsR = cardContainer.children.length;

// Function to update the position of the card container
function updateSlideR() {
  const offsetR = -currentSlideR * (100 / cardsToShowR); // Adjust based on visible cards
  cardContainerR.style.transform = `translateX(${offsetR}%)`;
}

// Function to navigate to the next slide
function nextSlideR() {
  if (currentSlideR < totalCardsR - cardsToShowR) {
    currentSlideR++;
    updateSlideR();
  }
}

// Function to navigate to the previous slide
function prevSlideR() {
  if (currentSlideR > 0) {
    currentSlideR--;
    updateSlideR();
  }
}

// Attach event listeners to navigation buttons
document.querySelector(".nextR").addEventListener("click", nextSlideR);
document.querySelector(".prevR").addEventListener("click", prevSlideR);

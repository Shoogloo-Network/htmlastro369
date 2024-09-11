


















function prevSlideMobile() {
  const container = document.querySelector(".card-container-mobile");
  container.scrollBy({ left: -container.clientWidth, behavior: "smooth" });
}

function nextSlideMobile() {
  const container = document.querySelector(".card-container-mobile");
  container.scrollBy({ left: container.clientWidth, behavior: "smooth" });
}

function prevTestimonialMobile() {
  const container = document.querySelector(".testimonial-container-mobile");
  container.scrollBy({ left: -container.clientWidth, behavior: "smooth" });
}

function nextTestimonialMobile() {
  const container = document.querySelector(".testimonial-container-mobile");
  container.scrollBy({ left: container.clientWidth, behavior: "smooth" });
}

function currentSlideMobile(n) {
  const container = document.querySelector(".testimonial-container-mobile");
  const cardWidth = container.querySelector(
    ".testimonial-card-mobile"
  ).clientWidth;
  container.scrollTo({ left: (n - 1) * cardWidth, behavior: "smooth" });
}

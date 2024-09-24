// For Mobile Responsivness
function loadStylesheets() {
  console.log("Checking screen width:", window.innerWidth);

  if (window.innerWidth <= 992) {
    console.log(
      "Screen width is 992px or less. Loading Bootstrap and style1.css"
    );

    // Add Bootstrap CSS
    var bootstrapLink = document.createElement("link");
    bootstrapLink.rel = "stylesheet";
    bootstrapLink.href =
      "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css";
    document.head.appendChild(bootstrapLink);

    // Add custom CSS
    var customLink = document.createElement("link");
    customLink.rel = "stylesheet";
    customLink.href = "css/styles1.css";
    document.head.appendChild(customLink);

    // Remove main styles.css
    var mainStylesheet = document.getElementById("main-stylesheet");
    if (mainStylesheet) {
      mainStylesheet.parentNode.removeChild(mainStylesheet);
      console.log("Removed main styles.css");
    }
  } else {
    console.log("Screen width is greater than 992px. Loading styles.css");

    // Ensure main styles.css is added back if screen width is greater than 992px
    if (!document.getElementById("main-stylesheet")) {
      var mainLink = document.createElement("link");
      mainLink.rel = "stylesheet";
      mainLink.href = "css/styles.css";
      mainLink.id = "main-stylesheet";
      document.head.appendChild(mainLink);
      console.log("Added main styles.css");
    }

    // Remove Bootstrap and custom CSS if they exist
    var existingBootstrapLink = document.querySelector(
      'link[href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"]'
    );
    var existingCustomLink = document.querySelector(
      'link[href="css/style1.css"]'
    );

    if (existingBootstrapLink) {
      document.head.removeChild(existingBootstrapLink);
      console.log("Removed Bootstrap CSS");
    }

    if (existingCustomLink) {
      document.head.removeChild(existingCustomLink);
      console.log("Removed custom styles1.css");
    }
  }
}

// Load stylesheets on initial load
loadStylesheets();

// Load stylesheets on window resize
window.addEventListener("resize", function () {
  loadStylesheets();
});

let currentSlide = 0;
const totalSlides = 9; // Total number of cards
const cardsToShow = 4; // Number of cards to show at a time
const cardContainer = document.querySelector(".card-container");

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



//for header image slider
let imageSliderCurrentIndex = 0;
const imageSliderSlides = document.querySelector('.image-slider-slides');
const imageSliderDots = document.querySelectorAll('.image-slider-dot');

function imageSliderShowSlide(index) {
    const totalSlides = document.querySelectorAll('.image-slider-hero-image').length;
    if (index >= totalSlides) {
        imageSliderCurrentIndex = 0;
    } else if (index < 0) {
        imageSliderCurrentIndex = totalSlides - 1;
    } else {
        imageSliderCurrentIndex = index;
    }
    imageSliderSlides.style.transform = `translateX(-${imageSliderCurrentIndex * 100}%)`;
    imageSliderUpdateDots();
}

function imageSliderUpdateDots() {
    imageSliderDots.forEach((dot, index) => {
        dot.classList.remove('active');
        if (index === imageSliderCurrentIndex) {
            dot.classList.add('active');
        }
    });
}

function imageSliderNextSlide() {
    imageSliderShowSlide(imageSliderCurrentIndex + 1);
}

function imageSliderCurrentSlide(index) {
    imageSliderShowSlide(index);
}

// Automatic slide change
setInterval(imageSliderNextSlide, 3000);

// Initialize the slider
imageSliderShowSlide(imageSliderCurrentIndex);



//Testimonial
let currentTestimonial = 0;
const totalTestimonials = document.querySelectorAll(".testimonial-card").length;
const testimonialContainer = document.querySelector(".testimonial-container");

function updateTestimonial() {
  const offset = -currentTestimonial * 100;
  testimonialContainer.style.transform = `translateX(${offset}%)`;
}

function nextTestimonial() {
  currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
  updateTestimonial();
}

function prevTestimonial() {
  currentTestimonial =
    (currentTestimonial - 1 + totalTestimonials) % totalTestimonials;
  updateTestimonial();
}

// Automatic slide change
setInterval(nextTestimonial, 5000); // Change slide every 5 seconds

// For mobile view
document.querySelector(".hamburger").addEventListener("click", function () {
  document.querySelector(".navbar").classList.toggle("active");
});

//for showing popup

document.querySelector("#login").addEventListener("click", function () {
  document.querySelector("#pop-up").classList.toggle("pop-up-register-show");
});

// to hide
document
  .querySelector(".pop-up-register-form-div")
  .addEventListener("click", function () {
    event.stopPropagation();
  });
document.querySelector("#pop-up").addEventListener("click", function () {
  document.querySelector("#pop-up").classList.remove("pop-up-register-show");
});


// For advisor profile

document.querySelectorAll(".astrologer-image").forEach(function(element) {
  element.addEventListener("click", function() {
    window.location.href = "./advisorProfile.html";
  });
});

 // Select all elements with the class 'call-button'
 const buttons = document.querySelectorAll('.call-button');

 // Add a click event listener to each button
 buttons.forEach(button => {
     button.addEventListener('click', () => {
         // Redirect to index.html
         window.location.href = './loginSignup.html';
     });
 });

//for clicking on user icon

document.querySelector(".user-profile").addEventListener("click", function () {
  const loginHover = document.querySelector(".login-hover");
  if (loginHover.style.display === "block") {
    loginHover.style.display = "none";
  } else {
    loginHover.style.display = "block";
  }
});

// for mega menu
let hideMenuTimeout;

document
  .querySelector(".mega-hover")
  .addEventListener("mouseover", function () {
    clearTimeout(hideMenuTimeout);
    document.querySelector(".menu-section").style.display = "block";
  });

document.querySelector(".mega-hover").addEventListener("mouseout", function () {
  hideMenuTimeout = setTimeout(function () {
    document.querySelector(".menu-section").style.display = "none";
  }, 500);
});

document
  .querySelector(".menu-section")
  .addEventListener("mouseover", function () {
    clearTimeout(hideMenuTimeout);
    document.querySelector(".menu-section").style.display = "block";
  });

document
  .querySelector(".menu-section")
  .addEventListener("mouseout", function () {
    hideMenuTimeout = setTimeout(function () {
      document.querySelector(".menu-section").style.display = "none";
    }, 500);
  });

let hideTimeout1, hideTimeout2, hideTimeout3;

document.getElementById("submenu1").addEventListener("mouseover", function () {
  clearTimeout(hideTimeout1);
  document.querySelector(".item1-submenu").style.display = "block";
  console.log("Mouse Over Event Attached for submenu1");
});

document.getElementById("submenu1").addEventListener("mouseout", function () {
  hideTimeout1 = setTimeout(function () {
    document.querySelector(".item1-submenu").style.display = "none";
    console.log("Mouse Out Event Attached for submenu1");
  }, 200);
});

document
  .querySelector(".item1-submenu")
  .addEventListener("mouseover", function () {
    clearTimeout(hideTimeout1);
    document.querySelector(".item1-submenu").style.display = "block";
  });

document
  .querySelector(".item1-submenu")
  .addEventListener("mouseout", function () {
    hideTimeout1 = setTimeout(function () {
      document.querySelector(".item1-submenu").style.display = "none";
    }, 200);
  });

document.getElementById("submenu2").addEventListener("mouseover", function () {
  clearTimeout(hideTimeout2);
  document.querySelector(".item2-submenu").style.display = "block";
  console.log("Mouse Over Event Attached for submenu2");
});

document.getElementById("submenu2").addEventListener("mouseout", function () {
  hideTimeout2 = setTimeout(function () {
    document.querySelector(".item2-submenu").style.display = "none";
    console.log("Mouse Out Event Attached for submenu2");
  }, 200);
});

document
  .querySelector(".item2-submenu")
  .addEventListener("mouseover", function () {
    clearTimeout(hideTimeout2);
    document.querySelector(".item2-submenu").style.display = "block";
  });

document
  .querySelector(".item2-submenu")
  .addEventListener("mouseout", function () {
    hideTimeout2 = setTimeout(function () {
      document.querySelector(".item2-submenu").style.display = "none";
    }, 200);
  });

document.getElementById("submenu3").addEventListener("mouseover", function () {
  clearTimeout(hideTimeout3);
  document.querySelector(".item3-submenu").style.display = "block";
  console.log("Mouse Over Event Attached for submenu3");
});

document.getElementById("submenu3").addEventListener("mouseout", function () {
  hideTimeout3 = setTimeout(function () {
    document.querySelector(".item3-submenu").style.display = "none";
    console.log("Mouse Out Event Attached for submenu3");
  }, 200);
});

document
  .querySelector(".item3-submenu")
  .addEventListener("mouseover", function () {
    clearTimeout(hideTimeout3);
    document.querySelector(".item3-submenu").style.display = "block";
  });

document
  .querySelector(".item3-submenu")
  .addEventListener("mouseout", function () {
    hideTimeout3 = setTimeout(function () {
      document.querySelector(".item3-submenu").style.display = "none";
    }, 200);
  });





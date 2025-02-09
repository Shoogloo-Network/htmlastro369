
function toggleLoginMenu() {
  const userProfileContainer = document.querySelector('.user-profile-container');
  
  if (window.innerWidth <= 768) { // Adjust this breakpoint as needed
      userProfileContainer.classList.toggle('active'); // Toggle active class
  }
}
function toggleMenu() {
  const navbar = document.querySelector('.navbarMobile');
  
  // Check if the screen width is less than or equal to 768px (mobile view)
  if (window.innerWidth <= 768) {
    navbar.classList.toggle('active');
  }
}

document.querySelectorAll('.dropbtn').forEach((ele) => {
  ele.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default anchor behavior
    const dropdown = this.parentElement; // Get parent dropdown
    dropdown.classList.toggle('active'); // Toggle active class

    // Get the icon directly related to the clicked dropdown
    const icon = dropdown.querySelector('.dropdown-icon'); // Adjust to get the specific icon
    if (dropdown.classList.contains('active')) {
      icon.innerHTML = '&#9650;'; // Up arrow
    } else {
      icon.innerHTML = '&#9660;'; // Down arrow
    }
  });
});

let currentSlide = 0;
const totalSlides = 8; // Total number of cards
const cardsToShow = 4; // Number of cards to show at a time
const cardContainer = document.querySelector(".card-container");

function updateSlide() {
  const offset = -currentSlide*5 ;
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
setInterval(imageSliderNextSlide, 10000);

// Initialize the slider
imageSliderShowSlide(imageSliderCurrentIndex);



//Testimonial
let currentTestimonial = 0;
const totalTestimonials = document.querySelectorAll(".testimonial-card").length;
const testimonialContainer = document.querySelector(".testimonial-container");

function updateTestimonial() {
  const offset = -currentTestimonial * 100;
  // Calculate the width of the scrollbar
const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;

// Adjust the offset by subtracting the scrollbar width
testimonialContainer.style.transform = `translateX(calc(${offset}% - ${scrollBarWidth}px))`;

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







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
// Astro-Product-List
document.querySelectorAll(".astro-shop-product-list").forEach(function(element,index){
  if(index===0){
    element.addEventListener("mouseenter",()=>{
    document.querySelector(".astro-shop-main-menu").style.display="block";
    console.log("hover")
  });

  element.addEventListener("mouseleave",()=>{
    document.querySelector(".astro-shop-main-menu").style.display="none";
    console.log("hover");
  });
  }
});


document.querySelectorAll(".astro-shop-main-menu").forEach(function(element){
  element.addEventListener("mouseenter",()=>{
    document.querySelector(".astro-shop-sub-menu").style.display="block";
    console.log("hover")
  });

  element.addEventListener("mouseleave",()=>{
    document.querySelector(".astro-shop-sub-menu").style.display="none";
    console.log("hover");
  });
});

document.querySelectorAll(".astro-shop-menu-2").forEach(function(element){
  element.addEventListener("mouseenter",()=>{
    document.querySelector(".astro-shop-sub-menu2").style.display="block";
    console.log("hover")
  });

  element.addEventListener("mouseleave",()=>{
    document.querySelector(".astro-shop-sub-menu2").style.display="none";
    console.log("hover");
  });
});

// product slider
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

// Select all filter options
const filterOptions = document.querySelectorAll('.filter-option');

filterOptions.forEach(option => {
    option.addEventListener('click', function() {
        // Remove 'active' class from all options
        filterOptions.forEach(opt => opt.classList.remove('activeFilter'));
        
        // Add 'active' class to the clicked option
        option.classList.add('activeFilter');
    });
});


//for clicking on user icon

document
 .querySelector(".user-profile")
 .addEventListener("click", function () {
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

document
 .querySelector(".mega-hover")
 .addEventListener("mouseout", function () {
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

document
 .getElementById("submenu1")
 .addEventListener("mouseover", function () {
   clearTimeout(hideTimeout1);
   document.querySelector(".item1-submenu").style.display = "block";
   console.log("Mouse Over Event Attached for submenu1");
 });

document
 .getElementById("submenu1")
 .addEventListener("mouseout", function () {
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

document
 .getElementById("submenu2")
 .addEventListener("mouseover", function () {
   clearTimeout(hideTimeout2);
   document.querySelector(".item2-submenu").style.display = "block";
   console.log("Mouse Over Event Attached for submenu2");
 });

document
 .getElementById("submenu2")
 .addEventListener("mouseout", function () {
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

document
 .getElementById("submenu3")
 .addEventListener("mouseover", function () {
   clearTimeout(hideTimeout3);
   document.querySelector(".item3-submenu").style.display = "block";
   console.log("Mouse Over Event Attached for submenu3");
 });

document
 .getElementById("submenu3")
 .addEventListener("mouseout", function () {
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



 


// For Filter section
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".expertise-section").addEventListener("click", function() {
        console.log("clicked");
        const checkbox = document.querySelector(".filter-checkbox1");
        if (checkbox.style.display === "block") {
            checkbox.style.display = "none";
            document.querySelector(".expertise-down-arrow").style.display="none";
            document.querySelector(".expertise-right-arrow").style.display="block";
        } else {
            checkbox.style.display = "block";
            document.querySelector(".expertise-right-arrow").style.display="none";
            document.querySelector(".expertise-down-arrow").style.display="block";
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".expertise-section1").addEventListener("click", function() {
        console.log("clicked");
        const checkbox = document.querySelector(".filter-checkbox2");
        if (checkbox.style.display === "block") {
            checkbox.style.display = "none";
            document.querySelector(".expertise-down-arrow1").style.display="none";
            document.querySelector(".expertise-right-arrow1").style.display="block";
        } else {
            checkbox.style.display = "block";
            document.querySelector(".expertise-right-arrow1").style.display="none";
            document.querySelector(".expertise-down-arrow1").style.display="block";
        }
    });
});


// toggle profile pop up

document.querySelector("#partnerBtn").addEventListener("click",function(){
  document.querySelector("#partnerDetails").style.display="block";
  document.querySelector("#myDetails").style.display="none";
  
});

document.querySelector("#myDetailsBtn").addEventListener("click",function(){
  document.querySelector("#myDetails").style.display="block";
  document.querySelector("#partnerDetails").style.display="none";
  
})

// Close Btn

document.querySelectorAll(".closePopUp").forEach(function(element){
element.addEventListener("click",function(){
  document.querySelector(".advisorsPopUp").style.display="none";
  document.querySelector("#partnerDetails").style.display="none";
  document.querySelector("#myDetails").style.display="block";
});
});

//call-button2 
document.querySelectorAll(".call-button2").forEach(function(element){
  element.addEventListener("click",function(){
    document.querySelector(".advisorsPopUp").style.display="block";
  });
  });

// For advisor profile

document.querySelectorAll(".astrologer-image").forEach(function(element) {
  element.addEventListener("click", function() {
    window.location.href = "./advisorProfile.html";
  });
});

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


 
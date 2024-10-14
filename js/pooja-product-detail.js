// window.onload = function() {
//     window.location.hash = 'div2';
//   };
  // Set the countdown duration to 4 hours (in milliseconds)
  let countdownDuration = 4 * 60 * 60 * 1000;
  
  // Update the countdown timer every second
  let countdownTimer = setInterval(function() {
      // Calculate the remaining time
      let hours = Math.floor(countdownDuration / (1000 * 60 * 60));
      let minutes = Math.floor((countdownDuration % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((countdownDuration % (1000 * 60)) / 1000);
  
      // Display the result in the timer span
      document.getElementById("timer").textContent = `${hours}h : ${minutes}m : ${seconds}s`;
  
      // Decrease the countdown time by 1 second (1000ms)
      countdownDuration -= 1000;
  
      // If the countdown is finished, clear the interval and display "Time's up"
      if (countdownDuration < 0) {
          clearInterval(countdownTimer);
          document.getElementById("timer").textContent = "Time's up!";
      }
  }, 1000);
  
  
  
  
  // Select the button
  const buyNowButton = document.querySelector('.btn-buy');
  
  // Add an event listener for the click event
  buyNowButton.addEventListener('click', function() {
      // Change the window location to the checkout page
      window.location.href = './checkout.html';
  });
  
  
  
  // JavaScript to toggle accordion and icon
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  
  accordionHeaders.forEach(header => {
      header.addEventListener('click', function() {
          // Toggle the 'accordion-active' class for the corresponding content
          const productDescription = header.nextElementSibling; // Get the content element (next sibling)
        //   productDescription.style.display = 'block';
          // Toggle visibility
          if (productDescription.classList.contains('accordion-active')) {
              productDescription.classList.remove('accordion-active'); // Hide content
              productDescription.style.display = 'none'; // Hide content using inline style
  
              // Change the icon back to plus
              const accordionIcon = header.querySelector('.accordion-icon i');
              accordionIcon.classList.remove('fa-minus');
              accordionIcon.classList.add('fa-plus');
          } else {
              productDescription.classList.add('accordion-active'); // Show content
              productDescription.style.display = 'block'; // Show content using inline style
  
              // Change the icon to minus
              const accordionIcon = header.querySelector('.accordion-icon i');
              accordionIcon.classList.remove('fa-plus');
              accordionIcon.classList.add('fa-minus');
          }
      });
  });
  
      function changeImage(element) {
          const mainImage = document.getElementById('mainProductImage');
          mainImage.src = element.src;
  
          // Remove active class from all thumbnails
          document.querySelectorAll('.thumbnail-container img').forEach(img => {
              img.classList.remove('active');
          });
  
          // Add active class to the clicked thumbnail
          element.classList.add('active');
      }
  
    
    
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
    
    
    
     
    
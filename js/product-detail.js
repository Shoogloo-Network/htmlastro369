

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
  
  
  
   
  
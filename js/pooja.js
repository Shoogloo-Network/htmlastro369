document.addEventListener('DOMContentLoaded', function() {
    const activeLink = document.querySelector('.active-pooja-1');
    const submenu = document.querySelector('.sub-menu-pooja-1'); // Get the next sibling (submenu)
    const activeLinkDesgin = document.querySelector('.active-pooja-design');
    const submenuDesgin= document.querySelector('.sub-menu-pooja-design');
  
    activeLink.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent the default link behavior
      submenuDesgin.style.display = "none"; // Hide the submenu
      activeLinkDesgin.classList.remove("active-pooja"); // Corrected: removed the dot
      // Toggle the display property of the submenu
      if (submenu.style.display === "block") {
        submenu.style.display = "none"; // Hide the submenu
        activeLink.classList.remove("active-pooja");
      } else {
        submenu.style.display = "block"; // Show the submenu
        activeLink.classList.add("active-pooja"); // Corrected: removed the dot
      }
    });
    activeLinkDesgin.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent the default link behavior
      submenu.style.display = "none"; // Hide the submenu
      activeLink.classList.remove("active-pooja");
      // Toggle the display property of the submenu
      if (submenuDesgin.style.display === "block") {
        submenuDesgin.style.display = "none"; // Hide the submenu
        activeLinkDesgin.classList.remove("active-pooja"); // Corrected: removed the dot
      } else {
        submenuDesgin.style.display = "block"; // Show the submenu
        activeLinkDesgin.classList.add("active-pooja"); // Corrected: removed the dot
      }
    });
    
  });


  const poojaClick = document.querySelectorAll(".card-pooja");

  poojaClick.forEach((element)=>{
    element.addEventListener("click",()=>{
      window.location.href="./pooja-product-detail.html";
    })
  })
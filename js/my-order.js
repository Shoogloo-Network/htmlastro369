
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
  // Set the initial background color for the first button
document.addEventListener("DOMContentLoaded", function() {
    const firstButton = document.querySelector('.filter-btn:first-child');
    if (firstButton) {
        firstButton.style.backgroundColor = '#007bff';
        firstButton.style.color = 'white';
    }
});

// Get all accordion items
const allOrders = document.querySelectorAll('.accordion-item');

// Function to filter orders based on status and change button styles
function filterOrders(status, clickedButton) {
    
    const statusLower = status.toLowerCase();

    allOrders.forEach(order => {
        // Find the span element that contains the order status
        const orderStatusElement = order.querySelector('.accordion-header .order-status');

        if (orderStatusElement) {
            const orderStatus = orderStatusElement.textContent.trim().toLowerCase();

            // Show or hide the order based on the filter
            order.style.display = (statusLower === 'all' || orderStatus === statusLower) ? 'block' : 'none';
        }
    });

    // Reset styles of all buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        
        btn.style.backgroundColor = ''; // Reset background color
        btn.style.color = ''; // Reset text color
    });

    
    // Change the background color of the clicked button
    if (clickedButton) {
        clickedButton.style.backgroundColor = '#007bff'; // Set active background color
        clickedButton.style.color = 'white'; // Change text color to white
    }
}

// Function to toggle accordion content
function toggleAccordion(event) {
    const icon = event.currentTarget.querySelector('.icon'); // Use currentTarget
    const content = event.currentTarget.nextElementSibling;

    // Ensure the icon and content exist before manipulating them
    if (icon && content) {
        // Toggle display of the content
        if (content.style.display === 'block') {
            content.style.display = 'none';
            icon.textContent = '+'; // Change icon to plus
        } else {
            content.style.display = 'block';
            icon.textContent = '-'; // Change icon to minus
        }
    }
}

// Attach event listeners to accordion headers
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', toggleAccordion);
});

// Default: Show all orders on page load
filterOrders('all'); // Show all orders initially




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





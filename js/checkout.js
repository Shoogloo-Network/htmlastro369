
document.addEventListener("DOMContentLoaded", function() {
  const contactSection = document.querySelector('.contact-section');
  const deliverySection = document.querySelector('.delivery-section');
  const orderSummary = document.querySelector('.order-summary');
  const checkoutForm = document.querySelector('.checkout-form');

  // Initialize visibility
  contactSection.classList.remove('hidden');
  deliverySection.classList.add('hidden');
  orderSummary.classList.add('hidden');

  // Handle button clicks
  document.querySelector('.mobileBtnContact').addEventListener('click', function() {
      contactSection.classList.add('hidden');
      deliverySection.classList.remove('hidden');
  });

  document.querySelector('.mobileBtnAddress').addEventListener('click', function() {
      deliverySection.classList.add('hidden');
      checkoutForm.classList.add('hidden')
      orderSummary.classList.remove('hidden');
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



    // Get the current date
    const currentDate = new Date();
    
    // Calculate the date 50 years ago
    const maxDate = new Date();
    maxDate.setFullYear(currentDate.getFullYear() - 16);

    // Set the minimum date to the beginning of 1974
    const minDate = new Date(1974, 0, 1); // January 1, 1974

    // Format the dates to YYYY-MM-DD
    const maxYear = maxDate.getFullYear();
    const maxMonth = String(maxDate.getMonth() + 1).padStart(2, '0');
    const maxDay = String(maxDate.getDate()).padStart(2, '0');
    
    const minYear = minDate.getFullYear();
    const minMonth = String(minDate.getMonth() + 1).padStart(2, '0');
    const minDay = String(minDate.getDate()).padStart(2, '0');

    // Set the min and max attributes of the input
    document.getElementById('dob').setAttribute('min', `${minYear}-${minMonth}-${minDay}`);
    document.getElementById('dob').setAttribute('max', `${maxYear}-${maxMonth}-${maxDay}`);


// Get all payment-method divs
const paymentMethods = document.querySelectorAll('.payment-method');

// Add event listener to each payment-method div
paymentMethods.forEach((method) => {
    method.addEventListener('click', (e) => {
        // Prevent label from triggering the radio button twice
        if (e.target.tagName === 'LABEL') {
            e.preventDefault();
        }

        // Find the radio button inside the clicked div and check it
        const radio = method.querySelector('input[type="radio"]');
        if (!radio.checked) {
            radio.checked = true;

            // Trigger the change event to update the border
            radio.dispatchEvent(new Event('change'));
        }
    });
});

// Get all radio buttons
const radios = document.querySelectorAll('.payment-method input[type="radio"]');

// Function to update borders based on the checked radio button
radios.forEach((radio) => {
    radio.addEventListener('change', () => {
        // Reset all payment-method borders and padding
        paymentMethods.forEach((method) => {
            method.style.border = '1px solid transparent'; // Reset border
            method.style.padding = '0'; // Reset padding
        });

        // Apply border and padding to the parent of the checked radio button
        if (radio.checked) {
            const methodDiv = radio.closest('.payment-method');
            methodDiv.style.border = '1px solid #007bff'; // Change to desired border color
            methodDiv.style.padding = '5px'; // Add padding to the selected method
        }
    });
});

// Initial setting for the default checked radio button
const initialChecked = document.querySelector('.payment-method input[type="radio"]:checked');
if (initialChecked) {
    const methodDiv = initialChecked.closest('.payment-method');
    methodDiv.style.border = '1px solid #007bff'; // Set border for the default checked radio button
    methodDiv.style.padding = '5px'; // Set padding for the default checked radio button
}


//for clicking on user icon

document.querySelector(".user-profile").addEventListener("click", function () {
  const loginHover = document.querySelector(".login-hover");
  if (loginHover.style.display === "block") {
    loginHover.style.display = "none";
  } else {
    loginHover.style.display = "block";
  }
});

function initializeMegaMenu() {
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
}

// Apply the mega menu only for desktop views
function checkWindowSize() {
  if (window.innerWidth >= 1024) {
    initializeMegaMenu(); // Apply the event listeners
  }
}

// Call the checkWindowSize function on load and resize
window.addEventListener("load", checkWindowSize);
window.addEventListener("resize", checkWindowSize);

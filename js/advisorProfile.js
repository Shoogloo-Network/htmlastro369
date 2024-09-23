
// Default date and time to current date and time
window.onload = function() {
    const currentDate = new Date();
    const dateInput = document.getElementById('appointment-date');

    // Set the date to today's date
    const formattedDate = currentDate.toISOString().split('T')[0];
    dateInput.value = formattedDate;

    // Generate times based on working hours (e.g., 9 AM to 5 PM)
    const timeSlotsContainer = document.querySelector('.time-slots');
    timeSlotsContainer.innerHTML = ''; // Clear previous slots

    const startHour = 9; // 9 AM
    const endHour = 17;  // 5 PM

    for (let hour = startHour; hour < endHour; hour++) {
        const amPm = hour >= 12 ? 'PM' : 'AM';
        const displayHour = hour > 12 ? hour - 12 : hour;
        const timeSlot = document.createElement('button');
        timeSlot.classList.add('time-slot');
        timeSlot.textContent = `${displayHour}:00 ${amPm}`;
        timeSlotsContainer.appendChild(timeSlot);
    }
};

// Handle selecting time slots
document.querySelectorAll('.time-slot').forEach(button => {
    button.addEventListener('click', function () {
        document.querySelectorAll('.time-slot').forEach(slot => slot.classList.remove('selected'));
        button.classList.add('selected');
    });
});

// Confirm Appointment
document.querySelector('.book-appointment-btn').addEventListener('click', function () {
    const selectedDuration = document.getElementById('session-duration-dropdown').value;
    const selectedDate = document.getElementById('appointment-date').value;
    const selectedTime = document.querySelector('.time-slot.selected')?.textContent;

    if (selectedDuration && selectedDate && selectedTime) {
        alert(`Appointment booked for ${selectedDuration} minutes on ${selectedDate} at ${selectedTime}`);
    } else {
        alert('Please select a session duration, date, and time.');
    }
});


// Appointment section
document.getElementById("action-2-appointment").addEventListener("click", function() {
    const appointmentSection = document.getElementById("appointment-page-id");
    const isOpen = appointmentSection.style.maxHeight === "680px"; // Adjust this to your expanded height

    if (!isOpen) {
        appointmentSection.style.maxHeight = "680px"; // Expanded height
        appointmentSection.style.padding = "20px"; // Set padding to show content
        // Redirect to the section immediately without smooth scrolling
       // Calculate the position for scrolling
       const navbarHeight = 540; // Height of the navbar
       const targetPosition = appointmentSection.getBoundingClientRect().top + window.scrollY - navbarHeight; // Adjust for navbar height

       // Scroll to the section
       window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    } else {
        appointmentSection.style.padding = "0"; // No padding when collapsed
        appointmentSection.style.maxHeight = "0"; // Collapse the section
    }
});

//  bell Dot


document.querySelector(".bellDot").addEventListener("click", function() {
    var contactDetails = document.querySelector(".contactDetails");
    if (contactDetails.style.display === "block") {
        contactDetails.style.display = "none";
    } else {
        contactDetails.style.display = "block";
    }
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



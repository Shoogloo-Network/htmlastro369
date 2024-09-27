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

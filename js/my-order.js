// Get all accordion items
const allOrders = document.querySelectorAll('.accordion-item');

// Function to filter orders based on status
function filterOrders(status) {
    const statusLower = status.toLowerCase();

    allOrders.forEach(order => {
        // Find the span element that contains the order status
        const orderStatusElement = order.querySelector('.accordion-header .order-status');

        if (orderStatusElement) {
            const orderStatus = orderStatusElement.textContent.trim().toLowerCase();

            // Show or hide the order based on the filter
            if (statusLower === 'all' || orderStatus === statusLower) {
                order.style.display = 'block';
            } else {
                order.style.display = 'none';
            }
        }
    });
}

// Function to toggle accordion content
function toggleAccordion(event) {
    const icon = event.target.querySelector('.icon');
    const content = event.target.nextElementSibling;

    if (content.style.display === 'block') {
        content.style.display = 'none';
        icon.textContent = '+'; // Change icon to plus
    } else {
        content.style.display = 'block';
        icon.textContent = '-'; // Change icon to minus
    }
}

// Attach event listeners to accordion headers
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', toggleAccordion);
});

// Default: Show all orders on page load
filterOrders('all');

// Accordion functionality with plus/minus toggle
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        const icon = header.querySelector('.icon');
        const isVisible = content.style.display === 'block';

        // Close all other accordion items
        document.querySelectorAll('.accordion-content').forEach(c => c.style.display = 'none');
        document.querySelectorAll('.accordion-header .icon').forEach(i => i.textContent = '+');
        document.querySelectorAll('.accordion-item').forEach(item => item.classList.remove('active'));

        // Toggle the clicked accordion
        if (isVisible) {
            content.style.display = 'none';
            icon.textContent = '+';
        } else {
            content.style.display = 'block';
            icon.textContent = '-';
            header.parentElement.classList.add('active');
        }
    });
});

// Filter functionality
const allOrders = Array.from(document.querySelectorAll('.accordion-item'));

function filterOrders(status) {
    const statusLower = status.toLowerCase();

    allOrders.forEach(order => {
        // Find the span element that contains the order status
        const orderStatusElement = order.querySelector('.accordion-header span:nth-child(3)');
        
        if (orderStatusElement) {
            const orderStatus = orderStatusElement.textContent.split(': ')[1].toLowerCase();

            if (statusLower === 'all' || orderStatus === statusLower) {
                order.style.display = 'block';
            } else {
                order.style.display = 'none';
            }
        }
    });
}

// Default: Show all orders on page load
filterOrders('all');

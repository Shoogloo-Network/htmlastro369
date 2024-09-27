document.querySelectorAll('.track-order').forEach(button => {
    button.addEventListener('click', function() {
        const orderNumber = this.parentElement.querySelector('h4').textContent;
        const orderStatus = this.parentElement.querySelector('.order-status').textContent;
        alert(`Tracking Order: ${orderNumber} - Status: ${orderStatus}`);
    });
});

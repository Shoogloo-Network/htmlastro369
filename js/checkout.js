// Get all radio buttons
const radios = document.querySelectorAll('.payment-method input[type="radio"]');

// Function to update borders based on checked radio button
radios.forEach((radio) => {
    radio.addEventListener('change', () => {
        // Reset all payment-method borders
        document.querySelectorAll('.payment-method').forEach((method) => {
            method.style.border = '1px solid transparent'; // Reset border
            method.style.padding='0';
        });
        
        // Apply border to the parent of the checked radio button
        if (radio.checked) {
            radio.parentElement.style.border = '1px solid #007bff'; // Change to desired border color
            radio.parentElement.style.padding='5px';
        }
    });
});

// Initial setting for the default checked radio button
document.querySelector('.payment-method input[type="radio"]:checked').parentElement.style.border = '1px solid #007bff';
document.querySelector('.payment-method input[type="radio"]:checked').parentElement.style.padding = '5px';
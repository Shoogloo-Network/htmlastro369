
    // Get the current date
    const currentDate = new Date();
    
    // Calculate the date 50 years ago
    const maxDate = new Date();
    maxDate.setFullYear(currentDate.getFullYear() - 18);

    // Set the minimum date to the beginning of 2007
    const minDate = new Date(2007, 0, 1); // January 1, 2007

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

// redirect.js
function redirectBasedOnDevice() {
    console.log('Checking device width...');
    // Check the screen width
    if (window.innerWidth <= 768) {
      console.log('Mobile/Tablet detected. Redirecting to index1.html');
      // If the screen width is less than or equal to 768px, redirect to index1.html
      if (window.location.pathname !== '/index1.html') {
        window.location.href = 'index1.html';
      }
    } else {
      console.log('Desktop detected. Redirecting to index.html');
      // Otherwise, stay on index.html
      if (window.location.pathname !== '/index.html') {
        window.location.href = 'index.html';
      }
    }
  }
  
  // Call the function on page load
  redirectBasedOnDevice();
  
  // Add an event listener for window resize
  window.addEventListener('resize', redirectBasedOnDevice);
document.addEventListener('DOMContentLoaded', function() {
    const welcomePopup = document.getElementById('welcome-popup');
    
    // popup delay
    setTimeout(() => {
      welcomePopup.classList.add('show');
    }, 500);
    
    // Close popup when clicking the close button
    document.getElementById('close-popup').addEventListener('click', function() {
      welcomePopup.classList.remove('show');
    });
    
    // Close popup when clicking the explore button
    document.getElementById('explore-button').addEventListener('click', function() {
      welcomePopup.classList.remove('show');
    });
    
    // Close popup when clicking outside the popup content
    welcomePopup.addEventListener('click', function(event) {
      if (event.target === welcomePopup) {
        welcomePopup.classList.remove('show');
      }
    });
  });
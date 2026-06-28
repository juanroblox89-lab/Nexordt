// Nexordt Landing Page Script
document.addEventListener('DOMContentLoaded', function() {
    console.log('Nexordt landing page loaded');
    
    // Add interactivity here
    const heading = document.querySelector('h1');
    if (heading) {
        heading.addEventListener('click', function() {
            console.log('Heading clicked');
        });
    }
});

// Function to initialize page
function initializePage() {
    console.log('Page initialization complete');
}

// Call initialization
initializePage();

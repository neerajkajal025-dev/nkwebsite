// ==================================================
// REDIRECT CONFIGURATION
// ==================================================

const redirectLink = "https://omg10.com/4/11001122";

// ==================================================
// PROFILE DATA
// ==================================================

const profiles = [
    { name: "Tanya Jain", city: "Kolkata", age: 22, img: "assests/photo_2026-05-09_15-59-46.jpg" },
    { name: "Riya Patel", city: "Ahmedabad", age: 23, img: "assests/photo_2026-05-09_15-59-39.jpg" },
    { name: "Kavita Rawat", city: "Jaipur", age: 21, img: "assests/photo_2026-05-09_15-59-44.jpg" },
    { name: "Meera Khan", city: "Lucknow", age: 24, img: "assests/photo_2026-05-09_15-59-48.jpg" },
    { name: "Nisha Singh", city: "Patna", age: 22, img: "assests/photo_2026-05-09_15-59-50.jpg" },
    { name: "Kavya Reddy", city: "Chennai", age: 25, img: "assests/photo_2026-05-09_15-59-52.jpg" },
    { name: "Suman Sharma", city: "Delhi", age: 22, img: "assests/photo_2026-05-09_16-55-18.jpg" },
    { name: "Pooja Gupta", city: "Mumbai", age: 23, img: "assests/photo_2026-05-09_16-55-21.jpg" },
    { name: "Neha Verma", city: "Indore", age: 21, img: "assests/photo_2026-05-09_16-55-23.jpg" },
    { name: "Sneha Das", city: "Pune", age: 24, img: "assests/photo_2026-05-09_16-55-25.jpg" },
    { name: "Anjali Mishra", city: "Bhopal", age: 22, img: "assests/photo_2026-05-09_16-55-27.jpg" },
    { name: "Preeti Singh", city: "Ranchi", age: 23, img: "assests/photo_2026-05-09_16-55-29.jpg" },
    { name: "Divya Roy", city: "Chandigarh", age: 21, img: "assests/photo_2026-05-09_16-55-32.jpg" },
    { name: "Shruti Hegde", city: "Bangalore", age: 24, img: "assests/photo_2026-05-09_16-55-34.jpg" },
    { name: "Aditi Joshi", city: "Nagpur", age: 22, img: "assests/photo_2026-05-09_16-55-36.jpg" },
    { name: "Ishani Bose", city: "Kolkata", age: 23, img: "assests/photo_2026-05-09_16-55-39.jpg" },
    { name: "Simran Kaur", city: "Amritsar", age: 21, img: "assests/photo_2026-05-09_16-55-48.jpg" },
    { name: "Monica G", city: "Hyderabad", age: 24, img: "assests/photo_2026-05-09_16-55-50.jpg" },
    { name: "Roshni P", city: "Surat", age: 22, img: "assests/photo_2026-05-09_16-55-52.jpg" },
    { name: "Zoya Khan", city: "Delhi", age: 23, img: "assests/photo_2026-05-09_16-55-54.jpg" },
    { name: "Priya Malik", city: "Gurgaon", age: 21, img: "assests/photo_2026-05-09_16-55-57.jpg" },
    { name: "Aparna S", city: "Mysore", age: 24, img: "assests/photo_2026-05-09_16-55-59 (2).jpg" }
];

// ==================================================
// UTILITIES
// ==================================================

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function createDarkCard(profile) {
    return `
        <div class="profile-card">
            <div class="live-badge-top">Live</div>
            <img src="${profile.img}" alt="${profile.name}" class="profile-img">
            <div class="profile-overlay">
                <div class="profile-name-row">
                    <h3 class="profile-name">${profile.name}</h3>
                    <i class="fa-solid fa-circle-check verify-badge"></i>
                </div>
                <div class="profile-location">
                    <i class="fa-solid fa-location-dot"></i> ${profile.city}, India
                </div>
                <div class="card-buttons">
                    <button class="btn-chat"><i class="fa-solid fa-comment-dots"></i> Chat</button>
                    <button class="btn-video"><i class="fa-solid fa-video"></i> Video Call</button>
                </div>
            </div>
        </div>
    `;
}

function createWhiteCard(profile) {
    return `
        <div class="w-profile-card">
            <div class="w-profile-img-container">
                <img src="${profile.img}" class="w-profile-img">
                <div class="w-online-badge"><i class="fa-solid fa-circle" style="font-size: 8px;"></i> Online</div>
            </div>
            <div class="w-profile-info">
                <div class="w-profile-header">
                    <h3 class="w-profile-name">${profile.name}</h3>
                    <span class="w-profile-age">${profile.age} years</span>
                </div>
                <div class="w-profile-location">
                    <i class="fa-solid fa-location-dot"></i> ${profile.city}, India
                </div>
                <div class="w-card-buttons">
                    <button class="w-btn"><i class="fa-solid fa-comment-dots"></i> Chat</button>
                    <button class="w-btn"><i class="fa-solid fa-video"></i> Video Call</button>
                </div>
            </div>
        </div>
    `;
}

// ==================================================
// MAIN EXECUTION
// ==================================================

document.addEventListener('DOMContentLoaded', () => {
    // 1. Shuffle Profiles
    shuffleArray(profiles);

    // 2. Render Dark Grid (Top Section)
    const darkGrid = document.getElementById('dark-profiles-grid');
    if (darkGrid) {
        // Take first 6 for the dark grid
        const darkProfiles = profiles.slice(0, 6);
        darkGrid.innerHTML = darkProfiles.map(p => createDarkCard(p)).join('');
    }

    // 3. Render White Grid (Bottom Section)
    const whiteGrid = document.getElementById('white-profiles-grid');
    if (whiteGrid) {
        // Take next 6 for the white grid
        const whiteProfiles = profiles.slice(6, 12);
        whiteGrid.innerHTML = whiteProfiles.map(p => createWhiteCard(p)).join('');
    }

    // 4. Setup Global Redirect
    const setupRedirects = () => {
        const elementsToRedirect = document.querySelectorAll('a, button, img, .profile-card, .action-block, .video-card, .w-profile-card, .logo, .mega-cta');
        elementsToRedirect.forEach(el => {
            el.addEventListener('click', (e) => {
                e.preventDefault();
                window.location.href = redirectLink;
            });
            el.style.cursor = 'pointer';
        });
    };

    // Run redirects setup after dynamic content is added
    setupRedirects();
});

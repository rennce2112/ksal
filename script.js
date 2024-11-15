function toggleMenu() {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("show");
}

const images = [
    "photo/bg-image3.jpg",
    "photo/bk.jpg",
    "photo/eman.jpg",
    "photo/eric.jpg",
    "photo/jv.jpg",
    "photo/laurence.jpg",
    "photo/niel.jpg",
    "photo/rov.jpg",
    "photo/volt.jpg"
];

// Array of captions for each image
const captions = [
    "This is the first image caption.",
    "This is the second image caption.",
    "This is the third image caption.",
    "This is the fourth image caption.",
    "This is the fifth image caption.",
    "This is the sixth image caption.",
    "This is the seventh image caption.",
    "This is the eighth image caption.",
    "This is the ninth image caption."
];

let currentIndex = 0; // Start with the first image

// Function to show the next image and caption
function nextImage() {
    currentIndex = (currentIndex + 1) % images.length; // Cycle through images
    document.getElementById("slider-image").src = images[currentIndex];
    document.getElementById("caption").textContent = captions[currentIndex];
}

// Function to show the previous image and caption
function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Cycle backwards
    document.getElementById("slider-image").src = images[currentIndex];
    document.getElementById("caption").textContent = captions[currentIndex];
}
let lastScrollTop = 0; // Store the last scroll position

window.addEventListener("scroll", function() {
    const navbar = document.getElementById("navbar");
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    // If scrolling down, hide the navbar
    if (currentScroll > lastScrollTop) {
        navbar.classList.add("hidden");
    } 
    // If scrolling up, show the navbar
    else {
        navbar.classList.remove("hidden");
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Prevent negative scroll values
});

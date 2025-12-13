// --- 1. Hamburger Menu Logic ---
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('toggle');
    });
}

// Close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        if(hamburger) hamburger.classList.remove('toggle');
    });
});

// --- 2. Contact Modal Logic ---
const contactBtn = document.getElementById('contactBtn');
const modal = document.getElementById('contact-modal');
const closeBtn = document.querySelector('.close-btn');

// Open Modal
if (contactBtn) {
    contactBtn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.style.display = "block";
    });
}

// Close Modal (X button)
if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        modal.style.display = "none";
    });
}

// Close Modal (Click outside)
window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.style.display = "none";
    }
});


// --- 3. Scroll Animations ---
const observerOptions = {
    root: null,
    threshold: 0.1,
    rootMargin: "0px"
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target); 
        }
    });
}, observerOptions);

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
// Array of phrases to display
const phrases = [
    "Cybersecurity Analyst",
    "UI/UX Designer",
    "Problem Solver"
];

let currentIndex = 0;
const glitchText = document.getElementById("glitch-text");

function updateText() {
    // Add active class for glitch effect
    glitchText.classList.add('active');
    
    // After small delay, update text and data-attribute
    setTimeout(() => {
        currentIndex = (currentIndex + 1) % phrases.length;
        const newText = phrases[currentIndex];
        glitchText.textContent = newText;
        glitchText.setAttribute('data-text', newText);
        
        // Remove active class after glitch effect
        setTimeout(() => {
            glitchText.classList.remove('active');
        }, 300);
    }, 300);
}

// Initial delay before starting the cycle
setTimeout(() => {
    // Update text every 3 seconds
    setInterval(() => {
        updateText();
    }, 3000);
}, 1000);
// Get all required elements
const circles = document.querySelectorAll('.circle');
const fill = document.querySelector('.fill');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentStep = 1; // Start at step 1

// Update progress bar and circles
function updateProgress() {
    // Update active circles
    circles.forEach((circle, index) => {
        if (index < currentStep) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });

    // Update the width of the fill bar
    const progressPercentage = ((currentStep - 1) / (circles.length - 1)) * 100;
    fill.style.width = `${progressPercentage}%`;

    // Enable/disable buttons
    prevButton.disabled = currentStep === 1;
    nextButton.disabled = currentStep === circles.length;
}

// Add event listeners for buttons
nextButton.addEventListener('click', () => {
    if (currentStep < circles.length) {
        currentStep++;
        updateProgress();
    }
});

prevButton.addEventListener('click', () => {
    if (currentStep > 1) {
        currentStep--;
        updateProgress();
    }
});

// Initialize progress bar
updateProgress();

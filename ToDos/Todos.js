window.onload = displayClock();
function displayClock(){
    var display = new Date().toLocaleTimeString();
    document.getElementById('time-h2').innerHTML = display;
    setTimeout(displayClock, 1000); 
}

const droplets = document.querySelectorAll('.svg');

// Function to swap the droplet SVGs
function swapDropletSVG() {
    const currentSrc = this.src;
    const altSrc = this.dataset.alt;

    // Swap the SVGs
    this.src = altSrc;
    this.dataset.alt = currentSrc;
}

// Add click event to each droplet image
droplets.forEach(droplet => {
    droplet.addEventListener('click', swapDropletSVG);
});

const checkboxes = document.querySelectorAll("input[type='checkbox']");
const texts = document.querySelectorAll(".work-text");

checkboxes.forEach((checkbox, index) => {
    checkbox.addEventListener("click", function () {
        if (checkbox.checked) {
            texts[index].style.textDecoration = "line-through";
        } else {
            texts[index].style.textDecoration = "none";
        }
    });
});

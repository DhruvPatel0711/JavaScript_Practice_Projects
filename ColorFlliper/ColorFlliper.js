let hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

let button = document.querySelector(".btn");
let display = document.querySelector(".hex");

button.addEventListener("click", function(){
    let hexColor = "#"
    for(let i=0; i<6;i++){
        hexColor += hex[generatedHex()];
    }
    display.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});

generatedHex = () => {
    return Math.floor(Math.random()*hex.length);
}

button.addEventListener("mouseover", () => {
    button.style.backgroundColor = "black"; // Button becomes black
});

button.addEventListener("mouseout", () => {
    // Restore the button's background to match the body
    button.style.backgroundColor = getComputedStyle(document.body).backgroundColor;
});
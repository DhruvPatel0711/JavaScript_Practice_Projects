const decrease = document.querySelector(".btn1");
const reset = document.querySelector(".btn2");
const increase = document.querySelector(".btn3");
let number = document.querySelector(".display");

decrease.addEventListener("click", () => {
    let currentNumber = parseInt(number.textContent) || 0; 
    currentNumber -= 1;
    number.textContent = currentNumber;

    if (currentNumber < 0) {
        number.style.color = "red";
    } else if (currentNumber === 0) {
        number.style.color = "black";
    }
});

reset.addEventListener("click", () => {
    number.textContent = 0; 
    number.style.color = "black"; 
});

increase.addEventListener("click", () => {
    let currentNumber = parseInt(number.textContent) || 0; 
    currentNumber += 1;
    number.textContent = currentNumber;

    if (currentNumber > 0) {
        number.style.color = "green";
    } else if (currentNumber === 0) {
        number.style.color = "black";
    }
});

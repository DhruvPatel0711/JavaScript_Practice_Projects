let output = document.querySelector("span");
let themeButton = document.querySelector(".theme");
let body = document.body;
let buttons = document.querySelectorAll("button");
let expand = document.querySelector(".expand");
let scientific = document.getElementById("id");

themeButton.addEventListener("click", () => {
    body.classList.toggle("light-theme");
    calculator.classList.toggle("light-theme");
    display.classList.toggle("light-theme");

    buttons.forEach(button => {
        button.classList.toggle("light-theme");
    });

    // Toggle the icon for the theme button
    const icon = themeButton.querySelector("i");
    if (body.classList.contains("light-theme")) {
        icon.style.color = "#333333"; // Dark icon for light theme
    } else {
        icon.style.color = "#ffffff"; // Light icon for dark theme
    }
});

// Toggle scientific buttons visibility
expand.addEventListener("click", () => {
    scientific.classList.toggle("scientific");

    // Toggle the icon rotation or text in the expand button
    const icon = expand.querySelector("i");
    if (scientific.classList.contains("scientific")) {
        scientific.style.display = "grid";
        icon.style.transform = "rotate(-90deg)"; // Closed view
    } else {
        scientific.style.display = "none";
        icon.style.transform = "rotate(90deg)"; // Expanded view
    }
});

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const btnValue = button.textContent;
        const btnclass = button.classList.value;
        let displayValue = output.textContent;

        // Evaluate result when "=" is pressed
        if (btnValue === "=") {
            try {
                displayValue = displayValue.replace("^", "**");
                displayValue = displayValue.replace(/π/g, `*${Math.PI}`);
                displayValue = displayValue.replace(/e/g, `*${Math.E}`);
                displayValue = displayValue.replace("%", "/100");
        
                // Handle implicit multiplication with π or e
                displayValue = displayValue.replace(/(\d)(π|e)/g, "$1*$2"); // Digit before π or e
                displayValue = displayValue.replace(/(π|e)(\d)/g, "$1*$2"); // π or e before digit
                displayValue = displayValue.replace(/(sin|cos|tan|log|√)(π|e)/g, "$1*$2");
        
                // Handle square root
                displayValue = displayValue.replace(/√(\d+|\([^)]+\))/g, (match, num) => {
                    return `(${Math.sqrt(eval(num))})`;
                });
        
                // Handle trigonometric functions
                displayValue = displayValue.replace(/sin\(([^)]+)\)/g, (match, num) => {
                    return Math.sin((eval(num) * Math.PI) / 180);
                });
                displayValue = displayValue.replace(/cos\(([^)]+)\)/g, (match, num) => {
                    return Math.cos((eval(num) * Math.PI) / 180);
                });
                displayValue = displayValue.replace(/tan\(([^)]+)\)/g, (match, num) => {
                    return Math.tan((eval(num) * Math.PI) / 180);
                });
        
                // Handle logarithm
                displayValue = displayValue.replace(/log\(([^)]+)\)/g, (match, num) => {
                    return Math.log10(eval(num));
                });
        
                output.textContent = eval(displayValue);
            } catch (error) {
                output.textContent = "Syntax Error";
                console.error(error);
            }
        }
        

        // Handle scientific buttons
        else if (btnclass === "iroot") {
            // Append "√" only if the display is valid
            if (!isNaN(displayValue.slice(-1))) {
                output.textContent += "√";
            } else {
                output.textContent += "Math.sqrt(";
            }
        } else if (btnclass === "iexponential") {
            if (!isNaN(displayValue.slice(-1))) {
                output.textContent += "^";
            }
        } else if (btnclass === "ipi") {
            output.textContent += "π";
        } else if (btnclass === "i!") {
            if (!isNaN(displayValue.slice(-1))) {
                // Replace factorial immediately
                const num = parseInt(displayValue.match(/\d+$/)[0]);
                let fact = 1;
                for (let i = 1; i <= num; i++) fact *= i;
                output.textContent = displayValue.replace(/\d+$/, fact);
            }
        }

        // Clear the display
        else if (btnValue === "AC") {
            output.textContent = "0";
        }

        // Remove the last character
        else if (btnValue === "C") {
            output.textContent =
                displayValue.length > 1 ? displayValue.slice(0, -1) : "0";
        }

        // Append numbers and operators
        else {
            if (output.textContent === "0") {
                output.textContent = btnValue;
            } else {
                output.textContent += btnValue;
            }
        }
    });
});

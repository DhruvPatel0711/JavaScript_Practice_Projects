const output = document.querySelector(".output");
const submit = document.querySelector(".submit");
const range = document.querySelector(".range");
let rangeOutput = document.querySelector(".range_output");
const checkboxes = document.querySelectorAll(".checkbox input");  
const generate = document.querySelector(".generate");

const UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
const NUMBERS = "1234567890";
const SPECIAL = "!@#$%^&*";

range.addEventListener("input", () => {
    rangeOutput.textContent = range.value;
});

generate.addEventListener("click", () => {
    let selectedChars = "";
    let isChecked = false;
    
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            isChecked = true;
            if (checkbox.id === "lowercase") {
                selectedChars += LOWERCASE;
            } else if (checkbox.id === "uppercase") {
                selectedChars += UPPERCASE;
            } else if (checkbox.id === "numbers") {
                selectedChars += NUMBERS;
            } else if (checkbox.id === "symbols") {
                selectedChars += SPECIAL;
            }
        }
    });

    if (!isChecked) {
        alert("Select any field");
        return;
    }

    let password = "";
    const passwordLength = parseInt(range.value);

    for (let i = 0; i < passwordLength; i++) {
        const Rindex = Math.floor(Math.random() * selectedChars.length);
        password += selectedChars[Rindex];
    }

    output.textContent = password;
});

submit.addEventListener("click", () => {
    const password = output.textContent;

    navigator.clipboard.writeText(password).then(() => {
        submit.textContent = "Copied";
        setTimeout(() => {
            submit.textContent = "Copy";
        }, 1500);
    }).catch((err) => {
        console.error("Failed to copy password: ", err);
    });
    output.textContent = "";
    range.value = 12;
    rangeOutput.textContent = 12;
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
});

const password = document.getElementById("password");
const progressBar = document.querySelector(".progressbar");
const requirements = document.querySelector(".requirements");
const MIN_LENGTH = 6;

password.addEventListener("input", function () {
    progressBar.style.display = "block";
    let point = 0;
    const value = password.value;
    const widthPower = ["0%", "25%", "50%", "75%", "100%"];
    const colorPower = ["#8B0000", "#FF7F00", "#FFD700", "#32CD32", "#006400"]; // Darker colors for progress bar

    if (value.length >= MIN_LENGTH) {
        const arrayTest = [/[0-9]/, /[a-z]/, /[A-Z]/, /[^0-9a-zA-Z]/];
        arrayTest.forEach((regex) => {
            if (regex.test(value)) {
                point += 1;
            }
        });

        const hasRepeatingChars = /(.)\1{2,}/.test(value);
        const hasSequentialChars = /012|123|234|345|456|567|678|789|abc|abcd|bcde|cdef|defg|efgh|fghi|ghij|hijk|ijkl|jklm|klmn|lmno|mnop|nopq|opqr|pqrs|qrst|rstuv|stuvw|tuvwx|uvwxyz|XYZ|ABC|BCD|CDE|DEF|EFG|FGH|GHI|HIJ|IJK|JKL|KLM|LMN|MNO|NOP|OPQ|PQR|QRS|RST/.test(value);

        if (hasRepeatingChars || hasSequentialChars) {
            point -= 1; // Reduce strength if there are repeating or sequential characters
        }
    }

    if (point < 0) point = 0;

    progressBar.style.width = widthPower[point];
    progressBar.style.backgroundColor = colorPower[point];

    // Display feedback
    // if (value.length < MIN_LENGTH) {
    //     feedback.textContent = "Password must be at least 6 characters.";
    //     feedback.style.color = "#8B0000";  // Dark Red
    // } else if (!/[0-9]/.test(value)) {
    //     feedback.textContent = "Password must include a number.";
    //     feedback.style.color = "#FF7F00";  // Dark Orange
    // } else if (!/[a-z]/.test(value)) {
    //     feedback.textContent = "Password must include a lowercase letter.";
    //     feedback.style.color = "#FFD700";  // Dark Yellow
    // } else if (!/[A-Z]/.test(value)) {
    //     feedback.textContent = "Password must include an uppercase letter.";
    //     feedback.style.color = "#32CD32";  // Dark Green
    // } else if (!/[^0-9a-zA-Z]/.test(value)) {
    //     feedback.textContent = "Password must include a special character.";
    //     feedback.style.color = "#32CD32";  // Dark Green
    // } else if (hasRepeatingChars || hasSequentialChars) {
    //     feedback.textContent = "Password contains repeating or sequential patterns.";
    //     feedback.style.color = "#FF6347";  // Tomato Red for patterns
    // } else {
    //     feedback.textContent = "Password is valid!";
    //     feedback.style.color = "#006400";  // Dark Green
    // }


    // Hide requirements when progress bar is at 100%
    if (progressBar.style.width === "100%") {
        requirements.style.display = "none";
    } else {
        requirements.style.display = "block";
    }
});

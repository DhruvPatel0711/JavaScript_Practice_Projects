const DOB = document.querySelector(".DOB");
const recentDate = document.querySelector(".recentDate");
const calculate = document.querySelector(".calculate");
const output = document.querySelector(".output");

calculate.addEventListener("click", () => {
    let DateofBirth = new Date(DOB.value); 
    let CurrentDate = new Date(recentDate.value);

    if (isNaN(DateofBirth) || isNaN(CurrentDate)) {
        output.textContent = "Please select valid dates.";
        return;
    }

    let age = CurrentDate.getFullYear() - DateofBirth.getFullYear();

    if (
        CurrentDate.getMonth() < DateofBirth.getMonth() ||
        (CurrentDate.getMonth() === DateofBirth.getMonth() && CurrentDate.getDate() < DateofBirth.getDate())
    ) {
        age--;
    }

    output.textContent = `Your Age is: ${age} years`;
});

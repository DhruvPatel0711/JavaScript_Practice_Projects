document.addEventListener("scroll", function (event) {
    console.log("Scrolling...");
}, { passive: true });

const box = document.querySelector(".box");
const nameInput = document.querySelector(".name");
const professionInput = document.querySelector(".profession");

const objectiveTextarea = document.getElementById("objective");
const skillsTextarea = document.getElementById("skills");
const academicDetailsTextarea = document.getElementById("academic-details");
const contactTextarea = document.getElementById("contact");
const workExperienceTextarea = document.getElementById("work-experience");
const achievementsTextarea = document.getElementById("achivements");
const projectsTextarea = document.getElementById("projects");

const generateButton = document.getElementById("generate");
const outputContainer = document.querySelector(".output-container");
outputContainer.style.display = "none";

generateButton.addEventListener("click", () => {
    box.style.display = "none";
    console.log("Name:", nameInput.value);
    console.log("Profession:", professionInput.value);
    console.log("Objective:", objectiveTextarea.value);
    console.log("Skills:", skillsTextarea.value);
    console.log("Academic Details:", academicDetailsTextarea.value);
    console.log("Contact:", contactTextarea.value);
    console.log("Work Experience:", workExperienceTextarea.value);
    console.log("Achievements:", achievementsTextarea.value);
    console.log("Projects:", projectsTextarea.value);

    outputContainer.style.display = "block";

    // Add the content to the output container
    outputContainer.innerHTML = `
        <div class="output">
            <div class="heading">
                <h1>${nameInput.value}</h1>
                <h4>${professionInput.value}</h4>
            </div>
            <div class="info">
                <div class="left">
                    <div class="b-o-x">
                        <h2>Objective</h2>
                        <p>${objectiveTextarea.value}</p>
                    </div>
                    <div class="b-o-x">
                        <h2>Skills</h2>
                        <p>${skillsTextarea.value}</p>
                    </div>
                    <div class="b-o-x">
                        <h2>Academic Details</h2>
                        <p>${academicDetailsTextarea.value}</p>
                    </div>
                    <div class="b-o-x">
                        <h2>Contact</h2>
                        <p>${contactTextarea.value}</p>
                    </div>
                </div>
                <div class="right">
                    <div class="b-o-x">
                        <h2>Work Experience</h2>
                        <p>${workExperienceTextarea.value}</p>
                    </div>
                    <div class="b-o-x">
                        <h2>Achievements</h2>
                        <p>${achievementsTextarea.value}</p>
                    </div>
                    <div class="b-o-x">
                        <h2>Projects</h2>
                        <p>${projectsTextarea.value}</p>
                    </div>
                </div>
            </div>
            <div class="btn">
            <button onclick="window.print()" class="print">Print Resume</button>
            <button class="edit">Edit</button></div>
        </div>
    `;
    let edit = document.querySelector(".edit");
    edit.addEventListener("click", () =>{
        outputContainer.style.display = "none";
        box.style.display = "block";
    })
});














































// const nameInput = document.querySelector(".name");
// const professionInput = document.querySelector(".profession");
// const generateButton = document.getElementById("generate");
// const themeSelector = document.getElementById("theme");

// const outputContainer = document.querySelector(".output-container");
// const textareas = document.querySelectorAll("textarea");

// // Change Theme
// themeSelector.addEventListener("change", (e) => {
//     document.body.classList.toggle("dark", e.target.value === "dark");
// });

// // Generate Resume
// generateButton.addEventListener("click", () => {
//     const isEmpty = [...textareas].some((textarea) => textarea.value.trim() === "") || !nameInput.value.trim() || !professionInput.value.trim();
//     if (isEmpty) {
//         alert("Please fill in all fields.");
//         return;
//     }

//     outputContainer.innerHTML = `
//         <div class="resume-header">
//             <h1>${nameInput.value}</h1>
//             <h4>${professionInput.value}</h4>
//         </div>
//         <div class="resume-section">
//             <h2>Objective</h2>
//             <p>${document.getElementById("objective").value}</p>
//         </div>
//         <div class="resume-section">
//             <h2>Skills</h2>
//             <p>${document.getElementById("skills").value}</p>
//         </div>
//         <div class="resume-section">
//             <h2>Academic Details</h2>
//             <p>${document.getElementById("academic-details").value}</p>
//         </div>
//         <div class="resume-section">
//             <h2>Contact</h2>
//             <p>${document.getElementById("contact").value}</p>
//         </div>
//         <div class="resume-section">
//             <h2>Work Experience</h2>
//             <p>${document.getElementById("work-experience").value}</p>
//         </div>
//         <div class="resume-section">
//             <h2>Achievements</h2>
//             <p>${document.getElementById("achievements").value}</p>
//         </div>
//         <div class="resume-section">
//             <h2>Projects</h2>
//             <p>${document.getElementById("projects").value}</p>
//         </div>
//     `;

//     outputContainer.style.display = "block";
// });

const prev = document.querySelector(".previous");
const one = document.querySelector(".btn1");
const two = document.querySelector(".btn2");
const three = document.querySelector(".btn3");
const next = document.querySelector(".next");
const heading = document.querySelectorAll(".h1");
const para = document.querySelectorAll(".p");
const footer = document.querySelector(".ftr");


let pageNo = 1;

prev.addEventListener("click", () => {
    if (pageNo > 1) pageNo--; 
    console.log(pageNo);
    updateContent(pageNo);
});

one.addEventListener("click", () => {
    pageNo = 1;
    console.log(pageNo);
    updateContent(pageNo);
});

two.addEventListener("click", () => {
    pageNo = 2;
    console.log(pageNo);
    updateContent(pageNo);
});

three.addEventListener("click", () => {
    pageNo = 3;
    console.log(pageNo);
    updateContent(pageNo);
});

next.addEventListener("click", () => {
    if (pageNo < 3) pageNo++; 
    console.log(pageNo);
    updateContent(pageNo);
});

function updateContent(pageNo) {
    // Update all heading elements
    heading.forEach((h) => {
        h.textContent = `Heading ${pageNo}`;
    });

    // Update all paragraph elements
    para.forEach((p) => {
        p.textContent = `Description ${pageNo}`;
    });

    // Update footer text
    footer.textContent = `Page ${pageNo} of 3`;
}


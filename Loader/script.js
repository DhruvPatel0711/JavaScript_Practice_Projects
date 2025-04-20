const btn = document.querySelector(".btn");
const loader = document.querySelector(".loader");

btn.addEventListener("click", () => {
    loader.style.display = "block";
    setTimeout(() => {
        loader.style.display = 'none';
    }, 2000);
});

btn.addEventListener('mouseenter', () => {
    loader.style.backgroundColor = 'black';
    loader.style.borderTop = "4px solid white";
});

btn.addEventListener('mouseleave', () => {
    loader.style.backgroundColor = '#ccc'; // Reset to default
    loader.style.borderTop = "4px solid black";
});
const minPriceInput = document.querySelector('.Min-price'); 
const maxPriceInput = document.querySelector('.Max-price'); 
const minSlider = document.querySelector('.minslider');
const maxSlider = document.querySelector('.maxslider');

let updateNumberInputs = () =>{
    minPriceInput.value = minSlider.value;
    maxPriceInput.value = maxSlider.value;
}
let updateSliders = () =>{
    minSlider.value = minPriceInput.value;
    maxSlider.value = maxPriceInput.value;
}

minSlider.addEventListener('input',updateNumberInputs);
maxSlider.addEventListener('input',updateNumberInputs);

minPriceInput.addEventListener('input',updateSliders);
maxPriceInput.addEventListener('input',updateSliders);

updateNumberInputs();

const paragraphsSlider = document.getElementById('number-para');
const wordsSlider = document.getElementById('no-words-para');
const tagSelect = document.getElementById("no-tag");
const outputContainer = document.querySelector('.output');
const paragraphValue = document.getElementById("value-para");
const wordsValue = document.getElementById("value-word");
const generateButton = document.querySelector(".generate");

const tagOptions = ["p", "h1", "h2", "h3", "h4", "h5", "h6", "span"];

function createOptionsUI() {
    tagOptions.forEach((tag) => {
        const option = document.createElement("option");
        option.value = tag;
        option.textContent = `<${tag}>`;
        tagSelect.appendChild(option);
    });
    paragraphsSlider.addEventListener("input", updateparagraphValue);
    wordsSlider.addEventListener("input", updatewordsValue);
    generateButton.addEventListener("click", generateLoremIpsum);
}

function updateparagraphValue() {
    paragraphValue.textContent = paragraphsSlider.value;
}

function updatewordsValue() {
    wordsValue.textContent = wordsSlider.value;
}

function generateLoremIpsum() {
    const paragraph = parseInt(paragraphsSlider.value);
    const tag = document.getElementById("no-tag").value;
    const wordsPerParagraph = parseInt(wordsSlider.value);
    const includeHtml = document.getElementById("include").value;

    const LoremIpsumText = generateText(paragraph, tag, includeHtml, wordsPerParagraph);
    displayLoremIpsum(LoremIpsumText);
}

function generateText(paragraph, tag, includeHtml, wordsPerParagraph) {
    const LoremIpsumArray = new Array(paragraph).fill("");

    for (let i = 0; i < paragraph; i++) {
        const words = generateWords(wordsPerParagraph);
        LoremIpsumArray[i] = includeHtml === 'Yes'
            ? `<${tag}>${words}</${tag}>`
            : words;
    }

    return LoremIpsumArray.join("\n");
}

function generateWords(numWords) {
    const LoremIpsumText = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas cum officia, doloremque unde sequi error provident, cupiditate quisquam amet deleniti laborum. Error quas ut tempore ipsum praesentium debitis, odio excepturi? Deleniti eum, reiciendis natus possimus ex, fuga exercitationem unde at voluptatibus consequuntur illum tempore soluta voluptates veniam nobis magni assumenda laudantium ipsam dolor quo rem praesentium! Dignissimos, pariatur cumque? Vitae! Incidunt minima harum veritatis deserunt ipsa, est dolorem aut quisquam architecto illo hic tempore eaque nostrum voluptatibus suscipit nesciunt quae sequi magnam ab eum voluptas ad ducimus rem. Doloremque, iste!`;

    const words = LoremIpsumText.split(" ");
    return numWords <= words.length
        ? words.slice(0, numWords).join(" ")
        : words.join(" ");
}

function displayLoremIpsum(text) {
    outputContainer.innerHTML = text;
}

createOptionsUI();

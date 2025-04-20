const inputSecond = document.getElementById("textInput");
const outputSecond = document.querySelector(".output");
const btnSecond = document.querySelector(".generate");
const btnFirst = document.querySelector(".check");
const inputfirst = document.getElementById("text-word-1");
const inputAnagram = document.getElementById("text-anagram-1");
const btnThird = document.querySelector(".count");
const inputThird = document.getElementById("text-word-3");
const inputString = document.querySelector(".textString");
const Secondoutput = document.querySelector(".outputSecond");

btnSecond.addEventListener("click", () => {
    let input = inputSecond.value; // Get the input value
    let arr = input.split(""); // Convert the string to an array of characters
    let randomOutput = ""; // Reset the randomOutput for each click

    while (arr.length > 0) {
        let randomIndex = Math.floor(Math.random() * arr.length); // Get a random index
        randomOutput += arr.splice(randomIndex, 1); // Remove and add the random character to the output
    }

    outputSecond.textContent = randomOutput; // Display the shuffled string
});

btnFirst.addEventListener("click", () =>{
    let input = inputfirst.value;
    let arr1 = input.split("").sort();
    let anagram = inputAnagram.value;
    let arr2 = anagram.split("").sort();
    if(arr1.join("") === arr2.join("")) alert("True, It is an Anagram");
    else alert("False, It is not an Anagram"); 
});


btnThird.addEventListener("click", () => {
    let counter = 0; // Initialize counter
    let string = inputString.value; // Main input string
    let word = inputThird.value; // Word to find anagrams of

    // Sort the characters of the input word
    let sortedWord = word.split("").sort().join("");

    // Loop through all substrings of the main string of the same length as the word
    for (let i = 0; i <= string.length - word.length; i++) {
        // Extract substring of the same length as the word
        let substring = string.substring(i, i + word.length);
        
        // Sort the characters of the substring
        let sortedSubstring = substring.split("").sort().join("");

        // Compare the sorted word and sorted substring
        if (sortedWord === sortedSubstring) {
            counter++;
        }
    }
    Secondoutput.textContent = counter;
});

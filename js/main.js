///palindrome checker***

const textInput = document.getElementById("text-input");
const check = document.getElementById("check");
const hint = document.getElementById("hint");


check.addEventListener("click", palindrome);


function palindrome() {
    if (textInput.value == "") {
        alert("please enter a value!");
    }
    let isPalindrome = true;
    let processedStr = textInput.value.replace(/[\W]/g, "");

    for (let i = 0; i < processedStr.length / 2; i++ ) {
        if (processedStr[i] !== processedStr[processedStr.length - 1 - i]) {
            isPalindrome = false;
        } else {
            isPalindrome = true;
        }
    }
}
























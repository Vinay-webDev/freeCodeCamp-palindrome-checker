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
    /* this is very nice algo ig checking letters from both start and end if they have same value and type then it's a palidrome **/ 
    for (let i = 0; i < processedStr.length / 2; i++ ) {
        if (processedStr[i] !== processedStr[processedStr.length - 1 - i]) {
            isPalindrome = false;
        }
    }
    if (isPalindrome) {
        hint.innerHTML = `${textInput.value} is a palindrome💡`;
        hint.style.textAlign = "center";
    } else {
        hint.innerHTML = `${textInput.value} is not a palindrome💡`;
        hint.style.textAlign = "center";
    }
}
























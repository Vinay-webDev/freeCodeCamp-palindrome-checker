///palindrome checker***
const textInput = document.getElementById("text-input");
const check = document.getElementById("check");
const hint = document.getElementById("hint");

check.addEventListener("click", palindromeOne);

/*
function palindrome() {
    if (textInput.value == "") {
        alert("please enter a value!");
    }
    let isPalindrome = true;
    let processedStr;
    if (textInput.value.length === 1) {
        hint.innerText = `${textInput.value} is a palindrome💡`;
    } else if (textInput.value.includes("_")) {
        processedStr = textInput.value.replace(/_/g, "");
    } else {
        processedStr = textInput.value.replace(/[\W]/g, "");
    }
    
    //this is very nice algo ig checking letters from both start and end if they have same value and type then it's a palidrome
    for (let i = 0; i < Math.floor(processedStr.length / 2); i++ ) {
        if (processedStr[i] !== processedStr[processedStr.length - 1 - i]) {
            isPalindrome = false;
        }
    }
    if (isPalindrome) {
        hint.innerText = `${textInput.value} is a palindrome💡`;
        //hint.style.textAlign = "center";
    } else {
        hint.innerText = `${textInput.value} is not a palindrome💡`;
        //hint.style.textAlign = "center";
    }
}
*/
/////////////////////////////////////////////////////////////////////////////////////////
/*5. When the #text-input element only contains the letter A and the #check-btn element is clicked, the #result element should contain the text "A is a palindrome".
7. When the #text-input element contains the text _eye and the #check-btn element is clicked, the #result element should contain the text "_eye is a palindrome".
10. When the #text-input element contains the text A man, a plan, a canal. Panama and the #check-btn element is clicked, the #result element should contain the text "A man, a plan, a canal. Panama is a palindrome".
13. When the #text-input element contains the text almostomla and the #check-btn element is clicked, the #result element should contain the text "almostomla is not a palindrome".
14. When the #text-input element contains the text My age is 0, 0 si ega ym. and the #check-btn element is clicked, the #result element should contain the text "My age is 0, 0 si ega ym. is a palindrome".
*/
///////////////////////////////////////////////////////////////////////////////////////////

function palindromeOne () {
    if (textInput.value == '') {
        alert("please input a value");
    }
    let filteredString;

    if (textInput.value.includes("_")) {
        filteredString = textInput.value.replace(/_/g, "").toLowerCase();
        console.log(filteredString);
    } else if (textInput.value.length === 1) {
        return hint.innerText = `${textInput.value} is a palindrome`;
    }
    else {
        filteredString = textInput.value.replace(/[\W]/g, "").toLowerCase();
        console.log(filteredString);
    }
    
    for ( let i = 0; i < Math.floor(filteredString.length / 2); i++ ) {
        if (filteredString[i] === filteredString[filteredString.length - 1 - i]) {
            hint.innerText = `${textInput.value} is a palindrome`;
        } else {
            hint.innerText = `${textInput.value} is not a palindrome`;
        }
    } 
}






















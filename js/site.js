function reverseString() {
    let userWord = document.getElementById("tacoCat").value;
    let cleanedWord = userWord.replaceAll(/[^A-Za-z0-9]/g, "").toLowerCase();

    let start = cleanedWord.length - 1;
    let reverseWord = "";
    for (let i = start; i >= 0; i--) {
        reverseWord = reverseWord + cleanedWord[i];
    }

    let output = document.getElementById("tacoOutput");
    output.innerText = reverseWord;


}

var isPalindrome = function (reverseWord) {
    if (reverseWord == cleanedWord) {
        alert(reverseWord + "is a isPalindrome.");

    } else {
        alert(reverseWord + "is not a palindrome.");
    }
}
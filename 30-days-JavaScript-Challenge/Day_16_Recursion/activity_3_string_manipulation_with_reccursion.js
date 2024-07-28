// Task 5: Write a recursive function to reverse a string. Log the result for a few cases.

function reverString(string, length = string.length - 1){
    if (length < 0) return ''; 
    return string[length] + reverString(string, length - 1); 
}

const string = 'hello';

console.log(reverString(string));

// Alternate 

function reverseStringAlt(string) {
    if (string === "") return ""; 
    return string[string.length - 1] + reverseStringAlt(string.slice(0, -1)); // Recursive case
}

console.log(reverseStringAlt("hello"));


// Task 6: Write a recursive function to check if a string is palindrome. Log the result for a few cases.

function checkPalindrome(string){

    return reverseStringAlt(string) === string ? true : false;
}

console.log(checkPalindrome('madam'));
console.log(checkPalindrome("racecar")); // Output: true
console.log(checkPalindrome("hello")); // Output: false
console.log(checkPalindrome("a")); // Output: true
console.log(checkPalindrome("")); // Output: true

// another approach

function isPalindrome(string){
    if(string.length <= 1) return true;
    
    if(string[0] !== string[string.length-1]) return false;

    return isPalindrome(string.slice(1,-1));
}

console.log('Another approach');

console.log(checkPalindrome('madam'));
console.log(checkPalindrome("racecar")); // Output: true
console.log(checkPalindrome("hello")); // Output: false
console.log(checkPalindrome("a")); // Output: true
console.log(checkPalindrome("")); // Output: true
// Task 1: Solve the Palindrom Problem on leetCode.

// Write a function

let isPalindrome = function(x) {
    let reverseNumber = 0;
    let originalValue = x;

    while (x > 0) {

        let digit = x % 10;
        reverseNumber = (reverseNumber * 10) + digit;
        x = Math.floor(x / 10);

        if (reverseNumber > 2147483647) {
            return false;
        }
    }

    if(x < 0 ){
        return false;
    }else{
        if (reverseNumber <= -2147483648 || reverseNumber >= 2147483647) {
            return false;
        }else{
            if(reverseNumber === originalValue) return true
            else return false
        }
    }

};

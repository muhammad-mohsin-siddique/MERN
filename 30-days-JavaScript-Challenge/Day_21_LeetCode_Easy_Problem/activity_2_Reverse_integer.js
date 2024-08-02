// Task 1: Solve the reverse integer problem on the leetCode 

// Write a function that takes an integer and returns it with it's digit reversed.

// Handle egde cases like negative numbers and numbers ending in zero;

// Log the reversed integer for a few cases

let reverse = function (x) {
    let reverseNumber = 0;

    const sign = Math.sign(x);

    x = Math.abs(x);

    while (x > 0) {
        let digit = x % 10;
        reverseNumber = (reverseNumber * 10) + digit;
        x = Math.floor(x / 10);

        if (reverseNumber > 2147483647) {
            return 0;
        }
    }

    reverseNumber = reverseNumber * sign; 

    if (reverseNumber <= -2147483648 || reverseNumber >= 2147483647) {
        return 0;
    }
    
    return reverseNumber;
}


console.log('Reverse of 123 is :', reverse(-123456));

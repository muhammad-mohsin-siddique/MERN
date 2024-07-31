// Task 1: Write regular expression to match a simple pattern (e.g., match all occurence of the word 'JavaScript') in a string. Log the matches
let regularExpression = /JavaScript/g

let text = 'JavaScript is a powerful language. Many developers enjoy writing JavaScript.';

let match = text.match(regularExpression);

console.log(match);

// Task 2: Write a regular exxpression to match all digits in a string. Log the matches.


regularExpression = /\d+/g;

text = 'The total cost is 150 dollars and the order number is 12345.';

match = text.match(regularExpression);

console.log(match);
// Task 3: Write a regular expression to match all words in a string that start with capital letter. Log the matches.

let regularExpression = /[A-Z]\w*/g;

// \b[A-Z][a-z]*\b

/*

\b: Word boundary to ensure you're matching full words.
[A-Z]: Matches any uppercase letter.
[a-z]*: Matches any lowercase letters following the uppercase letter.
\b: Another word boundary to ensure the word ends correctly.

*/

let text = 'My name is Muhammad Mohsin Siddique. I am Good in English, Maths and Science';

let match = text.match(regularExpression);

console.log(match);

// Task 4: Write a regular expression to match all sequences of one or more digits in a string. Log the matches.

regularExpression = /[0-9]+/g;

text = 'Age: 21, Born In: 2001';

match = text.match(regularExpression);

console.log(match);
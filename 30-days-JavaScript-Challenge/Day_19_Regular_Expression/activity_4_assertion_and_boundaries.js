// Task 7: Write a regular expression to match if a word only if it is at the begining of a string. Log the matches.

let RE = /^javaScript\b/i;

let  text = 'JavaScript is a versatile language.';

// text = 'it javaScript is fun!';

let match = text.match(RE);

console.log(match);

// Task 8: Write a regular expression to match if a word only if it is at the end of a string. Log the matches.
RE = /\bjavaScript\b[.,?]?$/i;

// text = 'I love JavaScript.';

// text  = 'Learning JavaScript is fun.'
// text  = 'JavaScript,'
text  = 'This sentence ends with JavaScript.'
// text  = 'I am learning Java.'
// text  = 'he topic is JavaScript'


match = text.match(RE);

console.log(match);
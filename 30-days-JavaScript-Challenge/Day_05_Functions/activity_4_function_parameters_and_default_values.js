//Task 7: write a function that takes two parameters and return their product. Provide the default value for the second parameter
function multipleOfTwoNums(num1, num2 = 1){
    return num1 * num2;
}


console.log(multipleOfTwoNums(10));

//Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.

function greetingMessage(personName, personAge = 18){
    return `Hello, ${personName}! You are ${personAge} years old.`;
}

console.log(greetingMessage('Muhammad Mohsin Siddique'));
console.log(greetingMessage('Muhammad Mohsin Siddique', 21));

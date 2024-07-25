// Task 4: Creat a Custome Error class that extend with built-in Error class.Throw and instance of this custome class error in a function and handle it using a try-catch block

class CustomError extends Error {
    constructor(message) {
        super(message); // Call the parent class constructor
        this.name = 'CustomError'; // Set the error name
    }
}

// Function that throws an instance of the custom error

function division(numerator,denominator){
    if(denominator == 0 || denominator == undefined){
        throw new CustomError('Dividing by Zero!');
    }else
    {
        return numerator / denominator;
    }

}

// Try-catch block to handle the custom error
try {
    division();
} catch (error) {
    if (error instanceof CustomError) {
        console.error(`Caught a custom error: ${error.message}`);
    } else {
        console.error(`Caught an unknown error: ${error.message}`);
    }
}

// Task 5: Write a function that validate user input (e.g., checking if string is not epmty) and thorws a custom error if the validation is failed. Handle the custom error using a try-catch block


function validateInput(input) {
    if (!input || input.trim() === '') {
        throw new CustomError('Input cannot be empty or whitespace only');
    } else {
        console.log('Input is valid:', input);
    }
}

try {
    const userInput = 'i'; // Simulate user input
    validateInput(userInput);
} catch (error) {
    if (error instanceof CustomError) {
        console.error(`CustomError: ${error.message}`);
    } else {
        console.error(`An unknown error occurred: ${error.message}`);
    }
}
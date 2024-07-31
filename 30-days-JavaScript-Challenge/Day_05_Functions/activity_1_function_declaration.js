//Task 1: Write a function to check if a number is even or odd and log the result to the console 

function isEven(number){
    if(number%2 === 0){
        console.log(`The Number ${number} is Even`);
    }else
        console.log(`The Number ${number} is ODD`);

}

isEven(1);

//Task 2: Write a function to square of a number and return the result 

function squareOfNumber(number) {
    return number**2;
}
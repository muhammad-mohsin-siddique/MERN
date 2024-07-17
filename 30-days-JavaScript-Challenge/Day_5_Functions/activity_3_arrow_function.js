// Task 5: write an arrow function to calculate the sum of two numbers and return the result

const additionOfTwoNums = (num1, num2) => (num1 + num2);

console.log(additionOfTwoNums(10,5));

//another way where proper checking involve both must be numbers

const additionOfTwoNumners = function (num1, num2){
    if(Number.isFinite(num1) && Number.isFinite(num2)){
        return num1 + num2;
    }
    else
        return NaN;
}

console.log(additionOfTwoNumners('10',5));

//Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value;

const charContain = (string, character)=> {
    if(string.indexOf(character) !== -1)
        return true;
    else
        return false;
}

console.log(charContain("Muhammad", 'e'));
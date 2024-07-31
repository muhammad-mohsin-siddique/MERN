//Task 3: Write a function expression to find the maximum of two numbers and log the result to the console 

const maximumNumber = function (num1, num2){
    if(typeof num1 === 'number' && typeof num2 === 'number'){
        if(num1 > num2){
            console.log(`Number: ${num1} is Greater than Number: ${num2}`);
        }
        else
        console.log(`Number: ${num2} is Greater than Number: ${num1}`);
    }
    else
        console.log(`Number1: ${num1} and Number2: ${num2} Invalid comparison Check the datatype`);
}

maximumNumber('10', 13);


// Task 4: Write a function expression to concatinate two strings and return the result

const concatinateString = function(str1, ...str2){

    let resultantString ='';

    str2.forEach((item)=>{
        resultantString+=item;
    });
    
    return str1 + resultantString;
}

console.log(concatinateString('Muhammad Mohsin', ' Siddique', ' 13', ' Lahore'));
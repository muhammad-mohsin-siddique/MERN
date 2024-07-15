//Task 1: Write a Program to check if a number is positive, negative or Zero, and log the result to the console

let number = 10;

if(number > 0 ){
    console.log(`The number: ${number} is positive`);
}else{
    if(number < 0){
        console.log(`The number: ${number} is negative`);
    }else{
        if(number === 0){
            console.log(`The number: ${number} is zero`);
        }else{
            console.log(`The number: ${number} is not a number`);
        }
    }
}

//Or we can check by this way

number = -10;

if(number > 0){
    console.log(`The number: ${number} is positive`);
}
if(number < 0){
    console.log(`The number: ${number} is negative`);
}
if(number === 0){
    console.log(`The number: ${number} is zero`);
}else{
    console.log(`The number: ${number} is not a number`);
}

//OR 

number = 0;

if (number > 0) {
    console.log(`The number: ${number} is negative`);
} else if(number < 0) {
    console.log(`The number: ${number} is negative`);
} else if(number === 0){
    console.log(`The number: ${number} is negative`);
}else{
    console.log(`The number: ${number} is not a number`);
}


//Task 2: Write a Program to check if a person is eligible to vote(age >= 18 ) and log the result to the console

let age = 18;

if(age >= 18){
    console.log(`Welcome you are Eligible to Vote`);
}else{
    console.log(`Sorry!, you are not Eligible to Vote`);
}

age = 17;

if(age >= 18){
    console.log(`Welcome you are Eligible to Vote`);
}else{
    console.log(`Sorry!, you are not Eligible to Vote`);
}
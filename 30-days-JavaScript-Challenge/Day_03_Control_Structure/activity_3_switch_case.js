//Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the result to the console
const day = 6;

switch (day) {
    case 1:
        console.log(`Day ${day}: is Monday`);
        break;
    case 2:
        console.log(`Day ${day}: is Tuesday`);
        break;
    case 3:
        console.log(`Day ${day}: is Wednesday`);
        break;
    case 4:
        console.log(`Day ${day}: is Thursday`);
        break;
    case 5:
        console.log(`Day ${day}: is Friday`);
        break;
    case 6:
        console.log(`Day ${day}: is Saturday`);
        break;
    case 7:
        console.log(`Day ${day}: is Sunday`);
        break;
    default:
        console.log(`${day}: Not a Valid Input`);
        break;
}

//Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score log the result to the console


let score = 10;


switch (true) {
    case score >= 80:
        console.log(`Your grade is A`);
        break;
    case score >= 75:
        console.log(`Your grade is B+`);
        break;
    case score >= 70:
        console.log(`Your grade is B`);
        break;
    case score >= 65:
        console.log(`Your grade is C+`);
        break;
    case score >= 60:
        console.log(`Your grade is C`);
        break;
    case score >= 55:
        console.log(`Your grade is D+`);
        break;
    case score >= 50:
        console.log(`Your grade is D`);
        break;
    default:
        console.log(`Your grade is F`);
        break;
}

// Why we use true in the key? because when the program run the value of score evaluate and if result produce true then console the result 
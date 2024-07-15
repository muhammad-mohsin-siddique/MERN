//Task 3: Write a program to find the largest of three numbers usign nested if-else statements

let score1 = 50;
let score2 = 10;
let score3 = 80;

if(score1 > score2){
    if(score1 > score3){
        console.log(`Score1: ${score1}, Score2: ${score2}, Score3: ${score3}. Greater Score is: ${score1}`);
    }else{
        console.log(`Score1: ${score1}, Score2: ${score2}, Score3: ${score3}. Greater Score is: ${score3}`);
    }
}else if(score2 > score3){
    console.log(`Score1: ${score1}, Score2: ${score2}, Score3: ${score3}. Greater Score is: ${score2}`);
}else{
    console.log(`Score1: ${score1}, Score2: ${score2}, Score3: ${score3}. Greater Score is: ${score3}`);
}
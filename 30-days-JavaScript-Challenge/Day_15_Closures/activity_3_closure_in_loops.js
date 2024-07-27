// Task 5: Write a loop that creat an array of functions. Each Function should log it's index when called. Use a closure to ensure each function logs the correct result

const myFuncArray = [];

function createFunction(){
    let index = -1;
    function myfunctions(){
        index++;
        return index;
    }
    return myfunctions;

}

const creatMyFunctions = createFunction();
for (let index = 0; index < 10; index++) {    
    myFuncArray.push(creatMyFunctions);
}

for (let index = 0; index < 10; index++) {    
    console.log(myFuncArray[index]());
}

// Task 1: Solve the "valid parantheses" Problem on Leet Code.

// Write a function that takes string containing just characters '(', '{', '[', ']', '}', ')' and determines if the input string is valid.

// A string is valid if open brakets are closed in the correct order.

// Log the result of few cases


class Stack{

    constructor(){
        this.array = [];
        this.counter = 0;
    }
    push(value){
        this.array[this.counter++] = value;
    }
    pop(){
        if(this.counter <= 0){
            return false;
        } else{
            return this.array[--this.counter];
            
        }
    }
    peek(){
        if(this.counter <= 0){
           return false;
        } else{
            return this.array[this.counter - 1];
        }
    }
    isEmpty() {
        return this.counter === 0;
    }
}


var isValid = function(s) {
    let i = 0;
    const stackArray = new  Stack();

    while(i < s.length){
        if(s[i] === '(' || s[i] === '{' || s[i] === '['){
            stackArray.push(s[i]);
        }else{
            if(stackArray.peek() === '(' && s[i] === ')'){
                stackArray.pop();
            } else if(stackArray.peek() === '{' && s[i] === '}'){
                stackArray.pop();
            }else if(stackArray.peek() === '[' && s[i] === ']'){
                stackArray.pop();
            }else{
                return false;
            }
        }
        i++;
    }

    return stackArray.isEmpty();
};
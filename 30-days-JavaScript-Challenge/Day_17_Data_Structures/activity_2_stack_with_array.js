// Task 3: Implement a Stack class with methods push(add element), pop(remove element), and peek(view the top element);

// Stack with an Array

class Stack{
    constructor(){
        this.array = [];
        this.count = 0;
    }
    push(value){
        this.array.push(value);
        this.count ++;
    }
    pop(){
        if(this.array.length === 0){
            throw new Error('Stack is Underflow')
        } else{
            --this.count;
            return this.array.pop();
        }
    }
    peek(){
        if(this.array.length === 0){
            throw new Error('Stack is Empty');
        } else{
            return this.array[this.array.length - 1];
        }
    }
}

const stackArray = new  Stack();

try {
    stackArray.pop();
    


    
} catch (error) {

    console.error(error.message);

}finally {

    stackArray.push(10);
    stackArray.push(20);
    stackArray.push(30);
    stackArray.push(40);
    stackArray.push(50);

    console.log(stackArray.array);
    console.log(stackArray.count);
    console.log(stackArray.peek());


    console.log(stackArray.pop());

    console.log(stackArray.array);

    console.log(stackArray.count);

    console.log(stackArray.pop());

    console.log(stackArray.array);

    console.log(stackArray.count);
}



// Task 4: Use the Stack class to reverse a string by pushing all characters  onto the stack and then poping them off.

const stringStack = new Stack();

// HELLO => reverse => OLLEH


stringStack.push('H');
stringStack.push('E');
stringStack.push('L');
stringStack.push('L');
stringStack.push('O');

console.log(stringStack.pop());
console.log(stringStack.pop());
console.log(stringStack.pop());
console.log(stringStack.pop());
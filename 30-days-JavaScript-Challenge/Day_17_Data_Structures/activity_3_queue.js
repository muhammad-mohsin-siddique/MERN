// Task 5: Implement a Queue class with methods enqueue ( add element ) , dequeue (remove element ) and front (view the first element)

class Queue{
    constructor(){
        this.array = [];
        this.count = 0;
    }

    enqueue(value){
        this.array.push(value);
        this.count++;
    }

    dequeue(){
        if(this.array.length === 0){
            throw new Error("Underflow");
        }else{
            --this.count;
            return this.array.shift();
        }
    }
    front(){
        if(this.array.length === 0){
            throw new Error("Queue is Empty")
        }else{
            return this.array[0];
        }
    }
}


const queue = new Queue();

try {
    queue.enqueue(100);
    queue.enqueue(200);
    queue.enqueue(300);
    queue.enqueue(400);
    queue.enqueue(500);

    console.log(queue.array);

    console.log(queue.front());

    console.log(queue.dequeue());

    console.log(queue.array);

    console.log(queue.front());

    console.log(queue.dequeue());

    console.log(queue.array);

    console.log(queue.front());

    console.log(queue.dequeue());

    console.log(queue.array);

    console.log(queue.dequeue());

    console.log(queue.array);

    console.log(queue.dequeue());

    console.log(queue.array);

    console.log(queue.dequeue());
    
} catch (error) {
    console.log(error.message);
}



// Task 6: Use the Queue class to simulate a simple printer Queue which prints jobs are added to the Queue and processed in order



const printerQueue = new Queue();

printerQueue.enqueue('pdf10');
printerQueue.enqueue('padf1');
printerQueue.enqueue('padf2');
printerQueue.enqueue('padf3');
printerQueue.enqueue('padf4');
printerQueue.enqueue('padf5');
printerQueue.enqueue('padf6');
printerQueue.enqueue('padf8');


const intervalId = setInterval(() => {
    try {
        const item = printerQueue.dequeue();
        console.log(`${item} is Printing: `);
    } catch (e) {
        //console.log(e.message); 
        clearInterval(intervalId); // Stop the interval
    }
}, Math.floor(Math.random() * 1000) + 1000);







// Task 1: Creat a promise that resolve with a message after a 2-second timeout and log the message to the console 

new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('Promise is Completed');
    }, 2000)
}).then((message)=>{
    console.log(message);
});

// Task 2: Creat a promise that reject with an error message after 2-second timeout and handle the error using .cath().

new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject('Promise is not Completed');
    }, 2000)
}).catch((error)=>{
    console.log(error);
});
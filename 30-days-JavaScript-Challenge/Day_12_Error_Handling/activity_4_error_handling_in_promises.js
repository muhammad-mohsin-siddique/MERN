// Task 6: Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log an appropriate message to the console .

const promise = new Promise((resolve, reject) => {
    const isSuccess = Math.random() < 0.5; // Randomly decide success or failure
    setTimeout(() => {
        if (isSuccess) {
            resolve("Promise resolved successfully!");
        } else {
            reject("Promise rejected!");
        }
    }, 1000); // 1 second delay for demonstration
});
promise
.then((message)=>{
    console.log(message);
})
.catch((error)=>{
    console.error(error);
});

// Task 7: Use try-catch within a async function to handle error from a promise that randomly resolves or rejects, and log the error message


async function promiseConsumed(){
    try {
        console.log('async Function');
        const response = await promise;
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}


promiseConsumed();
// Task 8:  Use Promise.all to waite for multiple promises to resolve and then log all their values.

function createPromise(id, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Promise ${id} resolved after ${delay}ms`);
        }, delay);
    });
}

// Creating multiple promises with different delays
let promise1 = createPromise(1, 1000);

// const promise2 = createPromise(2, 2000); 

let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(`Promise ${2} resolved after ${2000}ms`);
    }, 2000);
});
let promise3 = createPromise(3, 1500);

// Using Promise.all to wait for all promises to resolve
Promise.all([promise1, promise2, promise3])
    .then(values => {
        console.log('All promises resolved:');
        values.forEach(value => console.log(value));
    })
    .catch(error => {
        console.error('One of the promises rejected:', error);
    });






// Task 9:  Use Promise.race to log the value of the first promise that resolves among multiple promises.




function createPromise(id, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Promise ${id} resolved after ${delay}ms`);
            // Uncomment the next line and comment the resolve line to see rejection handling
            // reject(`Promise ${id} rejected after ${delay}ms`);
        }, delay);
    });
}

// Creating multiple promises with different delays
promise1 = createPromise(1, 1000);
promise2 = createPromise(2, 500);
promise3 = createPromise(3, 1500);

// Using Promise.race to wait for the first promise to resolve
Promise.race([promise1, promise2, promise3])
    .then(value => {
        console.log('First promise resolved:', value);
    })
    .catch(error => {
        console.error('First promise rejected:', error);
    });
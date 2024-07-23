// Task 4: write an async function that waits for  promise to resolve and then log the resolved value;

let promiseGetuser = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log('Request accepted');
        resolve({ username: 'Muhammad Mohsin Siddique', password: '123' });
    }, 2000)
})

async function consumePromise(){
    const response = await promiseGetuser;
    console.log(response);
}

consumePromise();

// Task 5: Write an async function that handles a rejected promises usign try-catch and logs the error message


promiseGetuser2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        const error = true;
        if(!error){
            console.log('Request accepted');
            resolve({ username: 'Muhammad Mohsin Siddique', password: '123' });
        }else{
            reject('Request rejected');
        }
        
    }, 2000)
});

async function consumePromise2(){
    try {
        const response = await promiseGetuser2;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
    
}

consumePromise2();
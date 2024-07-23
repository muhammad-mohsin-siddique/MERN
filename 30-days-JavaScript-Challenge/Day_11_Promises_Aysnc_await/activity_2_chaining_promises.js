// Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promise to log the message in a specific order

new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log('Request accepted');
        resolve({ username: 'Muhammad Mohsin Siddique', password: '123' });
    }, 2000)
}).then((user)=>{
    console.log(user);
    return user.username;
}).then((username)=>{
    console.log(username);
});
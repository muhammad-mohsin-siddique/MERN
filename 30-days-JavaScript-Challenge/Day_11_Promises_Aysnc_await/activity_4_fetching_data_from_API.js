// Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.

fetch('https://api.github.com/users/muhammad-mohsin-siddique')
.then((resolve)=>{
    console.log('enter in resolve');
    return resolve.json();
})
.then((data)=>{
    console.log('enter in data');
    console.log(data.followers);
})
.catch((reject)=>{
    console.log(reject);
});


// Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.

async function getGithubProfile(){
   try {
        console.log('async/await')
       const response =  await fetch('https://api.github.com/users/muhammad-mohsin-siddique');
       const data = await response.json();
       console.log(data);
   } catch (error) {
    console.log(error);
   }
}

getGithubProfile();

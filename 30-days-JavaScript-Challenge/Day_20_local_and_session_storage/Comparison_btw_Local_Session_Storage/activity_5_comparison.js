// Task 9: Write a function that accept key and value, and saves the value to both localStorage and sessionStorage. Retrieve and log the values from both storage mechanisms.


function mylocalStorage(key,value){
    localStorage.setItem(key,value);
    return true;
}

function mysessionStorage(key,value){
    sessionStorage.setItem(key,value);
    return true;
}

const myName = 'Ch. Muhammad Mohsin Siddique';
const myage = 21;

mylocalStorage('name', myName);
mylocalStorage('age', myage);


mysessionStorage('name', myName);
mysessionStorage('age', myage);


// Task 10:  Write a function that clear all data from the both localStorage and sessionStorage. Verify that both sotages are empty


function clearLocalStorage(){
    
    localStorage.clear();
}

function clearSessionStorage(){
    sessionStorage.clear();
}

// clearLocalStorage();
// clearSessionStorage();




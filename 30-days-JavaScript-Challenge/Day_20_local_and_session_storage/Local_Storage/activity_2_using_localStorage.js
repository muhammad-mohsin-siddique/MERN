// Task 3: Creat a sample form that saves the user input (e.g., name and email) to localStorage when submitted. Retrieved and display saved data on page load

const form = document.querySelector('form');
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;

    localStorage.setItem('name',name);
    localStorage.setItem('email',email);

});

window.addEventListener('load', ()=>{

   const name =  localStorage.getItem('name');
   const email = localStorage.getItem('email');

   console.log('Name: ', name);
   console.log('Email:', email);
});


// Task 4: Write a script to remove an item from localStorage. Log the localStorage content before and after removal.


const allData = {};

// Loop through all the keys in localStorage
for (let i = 0; i < localStorage.length; i++) {
    
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);   
    allData[key] = value;
}

console.log('All Date', allData);

localStorage.removeItem('score1');

console.log('All Date', allData);

localStorage.removeItem('email');

localStorage.removeItem('email');

localStorage.removeItem('user');




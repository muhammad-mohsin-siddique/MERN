// Task 3: Creat a sample form that saves the user input (e.g., name and email) to sessionStorage when submitted. Retrieved and display saved data on page load

const form = document.querySelector('form');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;

    sessionStorage.setItem('name',name);
    sessionStorage.setItem('email',email);

});

window.addEventListener('load', ()=>{

   const name =  sessionStorage.getItem('name');
   const email = sessionStorage.getItem('email');

   console.log('Name: ', name);
   console.log('Email:', email);
});


// Task 4: Write a script to remove an item from localStorage. Log the localStorage content before and after removal.


const allData = {};

// Loop through all the keys in localStorage
for (let i = 0; i < sessionStorage.length; i++) {
    
    const key = sessionStorage.key(i);
    const value = sessionStorage.getItem(key);   
    allData[key] = value;
}

console.log('All Date', allData);

sessionStorage.removeItem('score1');

console.log('All Date', allData);

// sessionStorage.removeItem('email');

// sessionStorage.removeItem('email');

sessionStorage.removeItem('user');




// Task 7: Add a submit event listener  to a form  that prevents the default submission and logs the form data to the console
const form = document.querySelector('#basicInfoForm');
form.addEventListener('submit', function(e){
    e.preventDefault();
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const age = document.querySelector('#age').value;
    const gender = document.querySelector('#gender').value;
    console.log(`Name: ${name}\nEmail: ${email} \nAge: ${age}\nGender: ${gender}`);
}, false);

// Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph


const dropdown = document.querySelector('#gender');
const selectedOption = document.querySelector('.selected-option');

dropdown.addEventListener('change', function (e){
    const changeOption = `Selected Option is: ${e.target.value}`;
    selectedOption.innerHTML = changeOption;
}, false);

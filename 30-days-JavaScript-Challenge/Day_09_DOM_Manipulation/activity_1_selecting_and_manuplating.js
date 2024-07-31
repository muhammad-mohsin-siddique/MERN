// Task 1: Select an HTML element by it's ID and change it's text

const heading = document.querySelector('#heading');
heading.innerHTML = 'Activity_1_Task_1';

// OR

const title = document.getElementById('heading');

title.innerHTML = 'DOM Manupilation';

//OR

title.innerText = 'Muhammad Mohsin Siddique => Updated text';

// Task 2: Select an HTML element by it's Class and change it's background color

let container = document.querySelector('.container');
container.style.backgroundColor = "green";

container = document.getElementsByClassName('container'); // It returns the HTML collection
container[0].style.backgroundColor = 'red';
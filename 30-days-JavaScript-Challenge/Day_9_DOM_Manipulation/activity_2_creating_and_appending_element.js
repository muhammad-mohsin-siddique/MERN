// Task 3: Creat a new div element with some text content and append to the body

const div = document.createElement('div');
div.innerHTML = 'New Div Element Created';
div.setAttribute('style','width:300px; height:300px; background-color: green;')
document.body.appendChild(div);

// Task 4: Creat a new li element and add it to an existing ul list;

let programmingList = document.querySelector('#programming');
const li = document.createElement('li');
li.innerHTML = 'JAVA';
programmingList.appendChild(li);
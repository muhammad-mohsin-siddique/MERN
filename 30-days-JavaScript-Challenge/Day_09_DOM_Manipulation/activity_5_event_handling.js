// Task 9: Add a click event listner to a button that changes the text content of a paragrpah
const btn = document.createElement('button');
const container_para = document.querySelector('#event-handling');
const para = document.querySelector('.btn-update');

btn.innerText = 'Click Me';

container_para.appendChild(btn);

btn.addEventListener('click', ()=>{
    para.innerHTML = `Muhammad Mohsin Siddique: Day 9 JavaScript Challange With Chai aur Code`
})


// Task 10: Add a mouseover event to an element that changes its border color

const allDiv = document.querySelectorAll('div');
allDiv.forEach(element => {
    console.log(element);
    element.addEventListener('mouseover', ()=>{
        element.style.border = '5px solid'
        element.style.borderColor = 'orange';

    })
});
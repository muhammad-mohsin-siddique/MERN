// Task 1: Add a click event listner to a button that changes the text content of a paragraph
const activityTitle = document.querySelector('.activity-title');
const activityBtn = document.querySelector('#activity-btn');

activityBtn.addEventListener('click', function (e){
    activityTitle.innerHTML = 'Done';
}, false);


// Task 2: Add a double click to an image that toggles its visibility

const imgContainer = document.querySelector('.image-container');
const img = document.querySelector('#dog-image');

imgContainer.addEventListener('dblclick', function (e){
    img.classList.toggle('visibility');
}, false);
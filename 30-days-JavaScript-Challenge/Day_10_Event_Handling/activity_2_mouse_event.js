// Task 3: Add mouseover event listener to an element that changes it's background color 

const divContainer = document.querySelector('.activity-2');
divContainer.addEventListener('mouseover', function (e){
    divContainer.style.backgroundColor = 'orange';
}, false);

// Task 4: Add mouseout event listener to an element that reset it's background color 

divContainer.addEventListener('mouseout', function (e){
    divContainer.style.backgroundColor = 'green';
}, false);


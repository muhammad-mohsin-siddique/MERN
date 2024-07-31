// Task 7: Select an HTML element and change one of it's attributes (e.g., src of an img tag );
const image = document.querySelector('img');
setInterval(()=>{
    image.setAttribute('src','https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500');
}, 10000); // after 10s the image src will set 


// Task 8: Add and remove a CSS class to/from an HTML element

const element = document.querySelector('.red');


element.classList.remove('red');
element.classList.add('green');

// Fun with JS 


setInterval(()=>{
    element.classList.toggle('red');
    element.classList.toggle('green');
}, 3000)
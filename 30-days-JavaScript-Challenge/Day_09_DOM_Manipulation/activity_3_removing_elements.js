// Task 5: Select an HTML elements and remove it from the DOM

const removeElement = document.querySelector('.name');

removeElement.remove();

// Some more prectise


programmingList = document.querySelector('#programming');

//const firstElement = programmingList.firstChild; //it is a text node so be careful using firstChild property
//const lastElement = programmingList.lastChild;//correct output

// This method will give the first and the last childe
const firstElementChild = programmingList.firstElementChild;

const lastElementChild = programmingList.lastElementChild;

// programmingList.removeChild(firstElementChild); we can remove element by target the parent element

// remove element from the parent 
firstElementChild.remove();

lastElementChild.remove();

// Task 6: Remove the last child of the specific HTML element.

const nextSibling = programmingList.nextElementSibling;
console.log('Next sibling:', nextSibling);
nextSibling.remove();

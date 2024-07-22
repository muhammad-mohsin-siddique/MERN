// Task 9: Add a click event listener to a list that logs the text content of the clicked using event delegation

const programmingLanguagesList = document.querySelector('#programmingLanguages');

programmingLanguagesList.addEventListener('click', (e) => {
    if (e.target && e.target.nodeName === 'LI') {
        console.log(e.target.textContent);
    }
});


// Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements.

const container = document.querySelector('#container');
const addButton = document.querySelector('#addButton');

// Event listener for dynamically added paragraphs using event delegation
container.addEventListener('click', (event) => {
    if (event.target && event.target.nodeName === 'P') {
        console.log(`Clicked on: ${event.target.textContent}`);
    }
});

addButton.addEventListener('click', () => {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = `Paragraph ${container.children.length + 1}`;
    container.appendChild(newParagraph);
});
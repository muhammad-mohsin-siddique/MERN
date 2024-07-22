// Task 5: Add a keydown event listener to an input field that log the key pressed to the console.

const typingField = document.querySelector('#typing');
typingField.addEventListener('keydown', function(e){
    console.log(e.key);
    console.log(e.keyCode);
}, false);

// Task 6: Add a keyup event listener to an input field that displays the current value in the paragraph

const showText = document.querySelector('.show-Text');
typingField.addEventListener('keyup', (e)=>{
    const value = typingField.value;
    showText.innerHTML = `you Typed: ${value}`;
}, false);
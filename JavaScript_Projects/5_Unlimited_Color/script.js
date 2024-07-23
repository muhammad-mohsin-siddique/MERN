const start = document.querySelector('#start');
const stop = document.querySelector('#stop');

function ranomColorCodeGenerator(){
    const randomNumber = Math.floor(Math.random() * 16777215);
    const hexString = randomNumber.toString(16).padStart(6, '0');
    return `#${hexString}`; 
}

const changeBGColor = function(){
    randomColor = ranomColorCodeGenerator();
    document.body.style.background = `${randomColor}`;
};
let setinterval; 
 

start.addEventListener('click', function(){
    if(!setinterval){
        setinterval = setInterval(changeBGColor, 1000);
    }
});

stop.addEventListener('click', function(){
    clearInterval(setinterval);
    document.body.style.background = `${randomColor}`;
    setinterval = null;
})
// Write a function to count the occurences of each character in a string. Log the character counts.

function characterCount(string){
    const characterCounter = {};
    string = string.toLowerCase();
    for(let char of string) {
        if (characterCounter[char]) {
            characterCounter[char]++;
        } else {
            characterCounter[char] = 1;
        }
    }
    return characterCounter
}


const name= 'Muhammad Mohin Siddique ';

console.log(characterCount(name));



// Task 7: Write a functions to find the longest sub-string without repeating  character in a string. Log the length of the substring.

function longestSubstring(string){
    let startOfString = 0
    let endOfString = 0;
    let maximumLengthOfSubstring = 0;
    let subString = new Set();

    while(endOfString < string.length){
        if(!subString.has(string[endOfString])){
            subString.add(string[endOfString]);
            endOfString++;
            maximumLengthOfSubstring = Math.max(maximumLengthOfSubstring, subString.size);
        }else{
            subString.delete(string[startOfString]);
            startOfString++;
        }
    }
    return maximumLengthOfSubstring;
}

console.log(longestSubstring('GeeksforGeeks'));
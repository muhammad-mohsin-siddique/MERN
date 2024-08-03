// Task 2: Solve the "Longest Substring Without Repeating Character problem" on LeetCode.
// Write a function that takes the string and returns the length of the longest substring without repeating characters.
// Log the length for a few test cases, including edge cases.


var lengthOfLongestSubstring = function(s) {
    let endOfString = 0;
    let visitedElementIndex = 0;
    let maximumLengthOfSubString = 0;

    let subString = new Set();

    while(endOfString < s.length){
        if(subString.has(s[endOfString])){
            subString.delete(s[visitedElementIndex]);
            visitedElementIndex++;
        }else{
            subString.add(s[endOfString]);
            endOfString++;
        }

        maximumLengthOfSubString = Math.max(maximumLengthOfSubString, subString.size);
    }

    return maximumLengthOfSubString;

};


// One Approach But Time limit Exceeded

// var groupAnagrams = function(strs) {
//     let result = [];
//     if(strs.length === 1){
//         return [strs];
//     }else{
//         while(strs.length > 0){
//             let subResult = [strs[0]];
//             for(let j = 1; j < strs.length; j++){
//                 if(isAnargam(strs[0], strs[j])){
//                     subResult.push(strs[j]);
//                     strs.splice(j,1);
//                     j--;
//                 }
//             }
//             result.push(subResult);
//             strs.splice(0,1);
//         }
//     }
//     return result;
// };

// // Check whether the string is Angram or not return true or false

// function isAnargam(str1, str2){
    
//     let characterList = {};


//     for(const character of str1){
//         if(!characterList.hasOwnProperty(character)){
//             characterList[character] = 1;
//         }else{
//             characterList[character]++;
//         }
//     }

//     for(const character of str2){
//         if(characterList.hasOwnProperty(character)){
//             characterList[character]--;
//         }else{
//             return false;
//         }
//     }

//     for (const key in characterList) {
//         if(characterList[key] !== 0){
//             return false;
//         }
//     }

//     return true;
// }




// Another Approch 


var groupAnagrams = function(strs) {
    const map = {};

    for (let str of strs) {
        let sortedStr = str.split('').sort().join('');

        
        
        if (!map[sortedStr]) {
            map[sortedStr] = [];
        }
       
        map[sortedStr].push(str);

        console.log(map);
    }

    
    return Object.values(map);
};

// Test case
const strs = ["i", "i", "i"];
console.log(groupAnagrams(strs)); 
// Task 1: Solve the Two sum problem on LeetCode. 

// Write a function that makes an array of numbers and target number, and returns the indeices of the two numbers that add up to the target

// Log the indices for a few test cases.

var twoSum = function(nums, target) {

    for(let i = 0; i < nums.length ; i++){

        for(let j = i + 1; j < nums.length; j++){

            if(nums[i] + nums[j] === target){
                
                return [i,j];
            }
        }
    }
}





// This Approach Time complexity is O(m+n). For this problem we can use another approach like Binary search or Divide and conquer


// var findMedianSortedArrays = function(nums1, nums2) {
//     let sortedMergedArray = mergeSortedArrays(nums1, nums2);
//     let length = sortedMergedArray.length;
    
//     if(length % 2 !== 0){
//         return sortedMergedArray[Math.floor(length / 2.0)];
//     } else {
//         return (sortedMergedArray[Math.floor(length / 2.0)] + sortedMergedArray[Math.floor(length / 2.0) - 1]) / 2.0 ;
//     }
// };

// function mergeSortedArrays(array1, array2) {
//     let array2Index = 0, array1Index = 0;
//     const mergedSortedArray = [];

//     while (array1Index < array1.length && array2Index < array2.length) {
//         if (array1[array1Index] <= array2[array2Index]) {
//             mergedSortedArray.push(array1[array1Index]);
//             array1Index++;
//         } else {
//             mergedSortedArray.push(array2[array2Index]);
//             array2Index++;
//         }
//     }

//     // Add any remaining elements from array1 or array2
//     while (array1Index < array1.length) {
//         mergedSortedArray.push(array1[array1Index]);
//         array1Index++;
//     }

//     while (array2Index < array2.length) {
//         mergedSortedArray.push(array2[array2Index]);
//         array2Index++;
//     }

//     return mergedSortedArray;
// }



// Binary search Approach O(log (min(m,n))


var findMedianSortedArrays = function(nums1, nums2) {
    if (nums1.length > nums2.length) {
        // Ensure nums1 is the smaller array
        return findMedianSortedArrays(nums2, nums1);
    }

    let m = nums1.length;
    let n = nums2.length;
    let low = 0, high = m;

    while (low <= high) {
        let i = Math.floor((low + high) / 2);
        let j = Math.floor((m + n + 1) / 2) - i;

        let leftA = (i === 0) ? -Infinity : nums1[i - 1];
        let rightA = (i === m) ? Infinity : nums1[i];
        let leftB = (j === 0) ? -Infinity : nums2[j - 1];
        let rightB = (j === n) ? Infinity : nums2[j];

        if (leftA <= rightB && leftB <= rightA) {
            // Found the correct partition
            if ((m + n) % 2 === 0) {
                return (Math.max(leftA, leftB) + Math.min(rightA, rightB)) / 2.0;
            } else {
                return Math.max(leftA, leftB);
            }
        } else if (leftA > rightB) {
            high = i - 1;
        } else {
            low = i + 1;
        }
    }

    return [];
};
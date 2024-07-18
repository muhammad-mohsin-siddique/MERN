// Task 10: use a for loop to iterate over the array aand log each element   to the console 

const myArr = ['Muhammad Mohsin Siddique', 300, ['Reading', 'coding'], 'BSCS', true, 3.70, ];

for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    console.log(`${index + 1} Element of Array is: ${element} `);
}

// Task 11:  Use forEach method to iterate over the array and log each element to the console

const myArr2 = ['BSCS', 'BSIT', 'BSSE'];

myArr2.forEach((department, index)=>{
    console.log(`${index + 1} Element of Array is: ${department} `);
});
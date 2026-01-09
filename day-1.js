/* -------------------------------
PROBLEM 1: ARRAY BASICS
---------------------------------

Given an array of numbers:

const nums = [2, 4, 6, 8, 10];

TASK:
1. Create a new array where each number is multiplied by 2
2. Store it in a variable called `doubledNums`
3. Log the result

Expected Output:
[4, 8, 12, 16, 20]

*/

// 👉 Solution below 👇
const nums = [2, 4, 6, 8, 10];
console.log(nums);

let doubledNums = [];

for (let num of nums) {
    let doubledNum = num * 2;

    doubledNums.push(doubledNum);
}

console.log(doubledNums);

/* -------------------------------
PROBLEM 2: STRING BASICS
---------------------------------

Given a string:

const name = "junaid";

TASK:
1. Convert the string to uppercase
2. Store it in a variable called `upperName`
3. Log the result

Expected Output:
"JUNAID"

*/

// 👉 Write your solution below 👇
const lowerName = "junaid";
console.log(`lowercase string ${lowerName}`);

let upperName = lowerName.toUpperCase();
console.log(`Uppercase string ${upperName}`);
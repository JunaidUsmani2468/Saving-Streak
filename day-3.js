/* -------------------------------
PROBLEM 1: ARRAY SUM
---------------------------------

Given an array of numbers:

const nums = [5, 10, 15, 20];

TASK:
1. Find the sum of all numbers
2. Store the result in a variable called `totalSum`
3. Log the result

Expected Output:
50

*/

// 👉 Write your solution below 👇
const nums = [5, 10, 15, 20];
let totalSum = 0;

for (let num of nums) {
    totalSum = totalSum + num;
}

console.log(totalSum);

/* -------------------------------
PROBLEM 2: STRING FIRST CHARACTER
---------------------------------

Given a string:
*/

const text = "chaos";

/*
TASK:
1. Get the first character of the string
2. Store it in a variable called `firstChar`
3. Log the result

Expected Output:
"c"

*/

// 👉 Write your solution below 👇
let firstChar = text[0];

console.log(firstChar);
/*
--------------------------------
PROBLEM 1: ARRAY ZERO COUNT
--------------------------------

Given an array of numbers:
*/

const nums = [0, 3, 0, 5, 7, 0, 1];

/*
TASK:
1. Count how many numbers are ZERO
2. Store the count in a variable called `zeroCount`
3. Log the result

Expected Output:
3
*/

// 👉 Write your solution below 👇

let zeroCount = 0;

for (let num of nums) {
    if (num === 0) {
        zeroCount++;
    }
}

console.log(zeroCount);

/*
--------------------------------
PROBLEM 2: STRING CHARACTER COUNT
--------------------------------

Given a string:
*/

const text = "consistency";

/*
TASK:
1. Count how many characters are in the string
2. Store the count in a variable called `charCount`
3. Log the result

Expected Output:
11
*/

// 👉 Write your solution below 👇

let charCount = text.length;

console.log(charCount);
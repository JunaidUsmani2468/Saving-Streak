/*
-------------------------------
PROBLEM 1: ARRAY POSITIVE COUNT
-------------------------------

Given an array of numbers:
*/

const nums = [-3, 5, 0, 8, -2, 7];

/*
TASK:
1. Count how many numbers are POSITIVE (greater than 0)
2. Store the count in a variable called `positiveCount`
3. Log the result

Expected Output:
3
*/

// 👉 Write your solution below 👇

let positiveCount = 0;

for (let num of nums) {
    if (num > 0) {
        positiveCount++;
    }
}

console.log(positiveCount);

/*
-------------------------------
PROBLEM 2: STRING WORD COUNT
-------------------------------

Given a string:
*/

const text = "code every single day";

/*
TASK:
1. Count how many words are in the string
2. Store the count in a variable called `wordCount`
3. Log the result

Expected Output:
4
*/

// 👉 Write your solution below 👇

let wordCount = 0;
let newText = text.split(' ');

console.log(newText.length);
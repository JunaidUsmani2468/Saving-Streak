/*
--------------------------------
PROBLEM 1: ARRAY MULTIPLE COUNT
--------------------------------

Given an array of numbers:
*/

const nums = [3, 5, 10, 15, 20, 7];

/*
TASK:
1. Count how many numbers are MULTIPLES OF 5
2. Store the count in a variable called `multipleCount`
3. Log the result

Expected Output:
4
*/

// 👉 Write your solution below 👇

let multipleCount = 0;

for (let num of nums) {
    if (num % 5 === 0) {
        multipleCount++;
    }
}

console.log(multipleCount);

/*
--------------------------------
PROBLEM 2: STRING LOWERCASE COUNT
--------------------------------

Given a string:
*/

const text = "JavaScriptIsFun";

/*
TASK:
1. Count how many characters are LOWERCASE letters
2. Store the count in a variable called `lowerCount`
3. Log the result

Expected Output:
11
*/

// 👉 Write your solution below 👇

let lowerCount = 0;

for (let char of text) {
    if (char === char.toLowerCase() && char !== char.toUpperCase()) {
        lowerCount++;
    }
}

console.log(lowerCount);
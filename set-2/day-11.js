/*
-------------------------------
PROBLEM 1: ARRAY GREATER THAN COUNT
-------------------------------

Given an array of numbers:
*/

const nums = [5, 12, 3, 20, 7, 15];

/*
TASK:
1. Count how many numbers are GREATER THAN 10
2. Store the count in a variable called `greaterCount`
3. Log the result

Expected Output:
3
*/

// 👉 Write your solution below 👇

let greaterCount = 0;

for (let num of nums) {
    if (num > 10) {
        greaterCount++;
    }
}

console.log(greaterCount);

/*
-------------------------------
PROBLEM 2: STRING SPACE COUNT
-------------------------------

Given a string:
*/

const text = "keep moving forward";

/*
TASK:
1. Count how many SPACES are in the string
2. Store the count in a variable called `spaceCount`
3. Log the result

Expected Output:
2
*/

// 👉 Write your solution below 👇

let spaceCount = 0;

for (let char of text) {
    if (char === " ") {
        spaceCount++;
    }
}

console.log(spaceCount);
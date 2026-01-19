/*
-------------------------------
PROBLEM 1: ARRAY MAX VALUE
-------------------------------

Given an array of numbers:
*/

const nums = [12, 45, 7, 89, 23];

/*
TASK:
1. Find the largest number in the array
2. Store it in a variable called `maxValue`
3. Log the result

Expected Output:
89
*/

// 👉 Write your solution below 👇

let maxValue = 0;

for (let num of nums) {
    if (num > maxValue) {
        maxValue = num;
    }
}

console.log(maxValue);

/*
-------------------------------
PROBLEM 2: STRING LAST CHARACTER
-------------------------------

Given a string:
*/

const word = "streak";

/*
TASK:
1. Get the last character of the string
2. Store it in a variable called `lastChar`
3. Log the result

Expected Output:
"k"
*/

// 👉 Write your solution below 👇

let lastChar;

for (let i = 0; i < word.length; i++) {
    if (i == word.length - 1) {
        lastChar = word[i];
    }
}

console.log(lastChar);
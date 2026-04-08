/*
--------------------------------
PROBLEM 1: ARRAY DIVISIBLE BY 3 COUNT
--------------------------------

Given an array of numbers:
*/

const nums = [3, 6, 10, 9, 14, 21, 4];

/*
TASK:
1. Count how many numbers are DIVISIBLE BY 3
2. Store the count in a variable called `divisibleByThreeCount`
3. Log the result

Expected Output:
4

Write your solution below 👇
*/

// Solution: Without Built-ins
let divisibleByThreeCount = 0;

for (let num of nums) {
    if (num % 3 === 0) {
        divisibleByThreeCount++;
    }
}

console.log(divisibleByThreeCount);

// Solution: Using Built-ins
const divisibleByThreeCount_ = nums.filter(n => n % 3 === 0).length;
console.log(divisibleByThreeCount_);



/*
--------------------------------
PROBLEM 2: STRING DIGIT COUNT
--------------------------------

Given a string:
*/

const text = "js2026isfun";

/*
TASK:
1. Count how many DIGITS (0–9) are in the string
2. Store the count in a variable called `digitCount`
3. Log the result

Expected Output:
4

Write your solution below 👇
*/

// Solution: Without Built-ins
let digitCount = 0;

for (let char of text) {
    if (char >= '0' && char <= '9') {
        digitCount++;
    }
}


console.log(digitCount);

// Solution: Using Built-ins
const digitCount_ = text.match(/\d/g)?.length || 0;
console.log(digitCount_);
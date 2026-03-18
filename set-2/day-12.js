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

Write your solution below 👇
*/

// Solution: Without Built-ins
let multipleCount = 0;

for (let num of nums) {
    if (num % 5 === 0) {
        multipleCount++;
    }
}

console.log(multipleCount);

// Solution: Using Built-ins
const multipleCount_ = nums.filter(n => n % 5 === 0).length;
console.log(multipleCount_);



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

Write your solution below 👇
*/

// Solution: Without Built-ins
let lowerCount = 0;

for (let char of text) {
    if (char >= 'a' && char <= 'z') {
        lowerCount++;
    }
}

console.log(lowerCount);

// Solution: Using Built-ins
const lowerCount_ = text.replace(/[^a-z]/g, '').length;
console.log(lowerCount_);
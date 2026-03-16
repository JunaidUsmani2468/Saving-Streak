/*
-----------------------------
PROBLEM 1: ARRAY EVEN COUNT
-----------------------------

Given an array of numbers:
*/

const nums = [2, 7, 4, 9, 10, 3, 6];

/*
TASK:
1. Count how many numbers are EVEN
2. Store the count in a variable called `evenCount`
3. Log the result

Expected Output:
4

Write your solution below 👇
*/

// Solution: Without Built-ins
let evenCount = 0;

for (let num of nums) {
    if (num % 2 === 0) {
        evenCount++;
    }
}

console.log(evenCount);

// Solution: Using Built-ins
let evenCount_ = nums.filter(n => n % 2 === 0).length;
console.log(evenCount_);



/*
-----------------------------
PROBLEM 2: STRING UPPERCASE COUNT
-----------------------------

Given a string:
*/

const text = "JavaScriptIsFun";

/*
TASK:
1. Count how many characters are UPPERCASE letters
2. Store the count in a variable called `upperCount`
3. Log the result

Expected Output:
4

Write your solution below 👇
*/

// Solution: Without Built-ins
let upperCount = 0;

for (let char of text) {
    if (char >= 'A' && char <= 'Z') {
        upperCount++;
    }
}

console.log(upperCount);

// Solution: Using Built-ins
let upperCount_ = text.match(/[A-Z]/g)?.length || 0;
console.log(upperCount_);
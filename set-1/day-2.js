/* -------------------------------
PROBLEM 1: ARRAY COUNT
---------------------------------

Given an array of numbers:

const nums = [1, 3, 5, 7, 9, 2, 4];

TASK:
1. Count how many numbers are EVEN
2. Store the count in a variable called `evenCount`
3. Log the result

Expected Output: 2

Write your solution below 👇
*/

// Solution: Without Built-ins
const nums = [1, 3, 5, 7, 9, 2, 4];
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



/* -------------------------------
PROBLEM 2: STRING LENGTH
---------------------------------

Given a string:

const word = "JavaScript";

TASK:
1. Find the length of the string
2. Store it in a variable called `wordLength`
3. Log the result

Expected Output:
10

Write your solution below 👇
*/

// Solution: Without Built-ins
const word = "JavaScript";
let wordLength = 0;

for (let char in word) {
    wordLength++;
}

console.log(wordLength);

// Solution: Using Built-ins
let wordLength_ = word.length;
console.log(wordLength_);
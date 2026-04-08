/*
--------------------------------
PROBLEM 1: ARRAY ODD COUNT
--------------------------------

Given an array of numbers:
*/

const nums = [4, 7, 9, 12, 15, 18, 21];

/*
TASK:
1. Count how many numbers are ODD
2. Store the count in a variable called `oddCount`
3. Log the result

Expected Output:
4

Write your solution below 👇
*/

// Solution: Without Built-ins
let oddCount = 0;

for (let num of nums) {
    if (num % 2 !== 0) {
        oddCount++;
    }
}

console.log(oddCount);

// Solution: Using Built-ins
const oddCount$ = nums.filter(n => n % 2).length;
console.log(oddCount$);



/*
--------------------------------
PROBLEM 2: STRING VOWEL COUNT
--------------------------------

Given a string:
*/

const text = "ConsistencyIsKey";

/*
TASK:
1. Count how many VOWELS are in the string (a, e, i, o, u)
2. Store the count in a variable called `vowelCount`
3. Log the result

Expected Output:
5

Write your solution below 👇
*/

// Solution: Without Built-ins
let vowelCount = 0;

for (let char of text) {
    if (
        char === 'a' ||
        char === 'e' ||
        char === 'i' ||
        char === 'o' ||
        char === 'u' ||
        char === 'A' ||
        char === 'E' ||
        char === 'I' ||
        char === 'O' ||
        char === 'U'
    ) {
        vowelCount++;
    }
}

console.log(vowelCount);

// Solution: Using Built-ins
const vowelCount$ = text.replace(/[^aeiou]/gi, '').length;
console.log(vowelCount$);
/*
-------------------------------
PROBLEM 1: ARRAY NEGATIVE COUNT
-------------------------------

Given an array of numbers:
*/

const nums = [-5, 3, -1, 0, 8, -2, 6];

/*
TASK:
1. Count how many numbers are NEGATIVE (less than 0)
2. Store the count in a variable called `negativeCount`
3. Log the result

Expected Output:
3

Write your solution below 👇
*/

// Solution: Without Built-ins
let negativeCount = 0;

for (let num of nums) {
    if (num < 0 ) {
        negativeCount++;
    }
}

console.log(negativeCount);

// Solution: Using Built-ins
let negativeCount_ = nums.filter(n => n < 0).length;
console.log(negativeCount_);



/*
-------------------------------
PROBLEM 2: STRING CONSONANT COUNT
-------------------------------

Given a string:
*/

const text = "javascript";

/*
TASK:
1. Count how many CONSONANTS are in the string
   (letters except a, e, i, o, u)
2. Store the count in a variable called `consonantCount`
3. Log the result

Expected Output:
7

Write your solution below 👇
*/

// Solution: Without Built-ins
let consonantCount = 0;

for (let char of text.toLowerCase()) {
    if (
        char !== 'a' &&
        char !== 'e' &&
        char !== 'i' &&
        char !== 'o' &&
        char !== 'u'
    ) {
        consonantCount++;
    }
}

console.log(consonantCount);

// Solution: Using Built-ins
let consonantCount_ = text.match(/[^aeiou]/gi).length;
console.log(consonantCount_);
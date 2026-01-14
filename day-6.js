/*
-------------------------------
PROBLEM 1: ARRAY ODD COUNT
-------------------------------

Given an array of numbers:
*/

const nums = [3, 8, 11, 6, 9, 4, 7];

/*
TASK:
1. Count how many numbers are ODD
2. Store the count in a variable called `oddCount`
3. Log the result

Expected Output:
4
*/

// 👉 Write your solution below 👇

let oddCount = 0;

for (let num of nums) {
    if (num % 2 !== 0) {
        oddCount++;
    }
}

console.log(oddCount);

/*
-------------------------------
PROBLEM 2: STRING VOWEL COUNT
-------------------------------

Given a string:
*/

const text = "javascript";

/*
TASK:
1. Count how many vowels are in the string (a, e, i, o, u)
2. Store the count in a variable called `vowelCount`
3. Log the result

Expected Output:
3
*/

// 👉 Write your solution below 👇

let vowelCount = 0;

for (let i = 0; i < text.length; i++) {
    if (
        text[i] === 'a' ||
        text[i] === 'e' ||
        text[i] === 'i' ||
        text[i] === 'o' ||
        text[i] === 'u'
    ) {
        vowelCount++
    }
}

console.log(vowelCount);
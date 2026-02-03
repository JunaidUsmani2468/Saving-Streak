/*
-------------------------------
PROBLEM 1: ARRAY MIN VALUE
-------------------------------

Given an array of numbers:
*/

const nums = [34, 7, 21, 2, 89];

/*
TASK:
1. Find the smallest number in the array
2. Store it in a variable called `minValue`
3. Log the result

Expected Output:
2
*/

// 👉 Write your solution below 👇

let minValue = Number.MAX_VALUE;

for (let num of nums) {
    if (num < minValue) {
        minValue = num;
    }
}

console.log(minValue);

/*
-------------------------------
PROBLEM 2: STRING REVERSE
-------------------------------

Given a string:
*/

const text = "chaos";

/*
TASK:
1. Reverse the string
2. Store it in a variable called `reversedText`
3. Log the result

Expected Output:
"soahc"
*/

// 👉 Write your solution below 👇

let reversedText;

for (let i = text.length - 1; i >= 0 ; i--) {
    if (reversedText) {
        reversedText = reversedText + text[i];
    } else {
        reversedText = text[i];
    }
}

console.log(reversedText);
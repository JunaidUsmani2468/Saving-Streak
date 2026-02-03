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
*/

// 👉 Write your solution below 👇

let evenCount = 0;

for (let num of nums) {
    if (num % 2 === 0) {
        evenCount++;
    }
}

console.log(evenCount);

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
*/

// 👉 Write your solution below 👇

let alphabets = [...Array(26)].map((_, i) => String.fromCharCode(i + 65));
let upperCount = 0;

for (let char of text) {
    
    for (let alphabet of alphabets) {
        if (char === alphabet) {
            upperCount++;
            break;
        }
    }

}

console.log(upperCount);
/*
----------------------------------
DAY 25 PROBLEM: COUNT VALID WORDS
----------------------------------

Given a string and an array of forbidden starting letters:
*/

const text = "code builds logic through daily effort";
const forbidden = ['b', 'd'];

/*
TASK:
1. Count how many WORDS do NOT start with any letter in the `forbidden` array
2. Words are separated by single spaces
3. Comparison should be case-sensitive
4. Store the count in a variable called `validCount`
5. Log the result

RULES:
1. Do NOT use built-in helpers (split, includes, map, filter, reduce)
2. Use only loops and conditions
3. Handle the first and last word correctly

Expected Output:
4

Explanation:
Valid words are:
code, logic, through, effort
*/

// 👉 Write your solution below 👇

let validCount = 0;

for (let i = 0; i < text.length; i++) {
    if (i === 0 || text[i - 1] === ' ') {
        let isValidWord = true;

        for (let char of forbidden) {
            if (char === text[i]) {
                isValidWord = false;
                break;
            }
        }

        if (isValidWord) {
            validCount++;
        }
    }
}

console.log(validCount);
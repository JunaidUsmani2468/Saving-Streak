/*
----------------------------------
DAY 31 PROBLEM: COUNT WORDS BY LENGTH LIST
----------------------------------

Given an array of numbers and a string:

*/

const lengths = [4, 6];
const text = "code learn build dream focus create grow adapt thrive";

/*
TASK:
1. Count how many WORDS in the string have a length
   that exists in the `lengths` array
2. Words are separated by single spaces
3. Comparison is case-sensitive
4. Store the result in a variable called `count`
5. Log the result

RULES:
1. Do NOT use built-in helpers (split, includes, map, filter, reduce)
2. Use only loops and conditions
3. Handle the first and last word correctly

Expected Output:
4

Explanation:
Words with valid lengths: code (4), grow (4), create (6), thrive (6)
*/

// 👉 Write your solution below 👇

let count = 0;
let wordLength = 0;

for (let i = 0; i <= text.length; i++) {
    if (i < text.length && text[i] !== ' ') {
        wordLength++;
    } else {
        if (wordLength) {
            for (let len of lengths) {
                if (len === wordLength) {
                    count++;
                    break;
                }
            }

            wordLength = 0;
        }
    }
}

console.log(count);
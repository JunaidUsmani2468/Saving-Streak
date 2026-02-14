/*
----------------------------------------
DAY 37 PROBLEM: FIRST NON-REPEATING CHAR
----------------------------------------

Given a string:

*/

const text = "swiss programming";

/*
TASK:
1. Find the FIRST character in the string
   that appears ONLY ONCE.
2. Ignore spaces.
3. Store the result in a variable called `result`.
4. Log the result.

RULES:
- Do NOT use built-in helpers (split, map, filter, reduce, indexOf, includes)
- You may traverse the string more than once.
- Use an object to track frequencies.

Expected Output:
w

Explanation:
Character counts:
s → 3
w → 1
i → 2
...
The first character that appears only once is 'w'.
*/

let result = '';
let freq = {};

for (let char of text) {
    if (char !== ' ') {
        freq[char] = (freq[char] || 0) + 1;
    }
}

for (let char of text) {
    if (char !== ' ' && freq[char] === 1) {
        result = char;
        break;
    }
}

console.log(result);
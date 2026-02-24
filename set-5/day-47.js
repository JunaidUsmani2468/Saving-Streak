/*
----------------------------------------
DAY 47 PROBLEM: Longest Vowel Streak
----------------------------------------

You are given an array of strings.
Each string contains lowercase letters and spaces.

Your task is to find the LENGTH of the longest
continuous streak of vowels (a, e, i, o, u)
across all strings combined.
*/

const textArray = [
  "keep going",
  "coooperate daily",
  "beautiful code wins"
];

/*
TASK:
1. Traverse the array of strings
2. Traverse each string character by character
3. Count continuous vowel streaks
4. Reset the streak when a non-vowel OR space appears
5. Track the maximum vowel streak length
6. Store the final number in a variable called `result`
7. Log the result

RULES:
- Do NOT use built-in helpers (split, map, filter, reduce, regex, etc.)
- Use loops and conditions only
- Treat only vowels: a, e, i, o, u
- Traverse carefully; clarity over tricks

Expected Output:
3

Explanation:
The longest vowel streak is "ooo" in "coooperate",
which contains 3 vowels in a row.
*/

let isVowel = char =>
    char === 'a' ||
    char === 'e' ||
    char === 'i' ||
    char === 'o' ||
    char === 'u';

let count = 0;
let result = 0;

for (let text of textArray) {
    for (let char of text) {
        if (char !== ' ' && isVowel(char)) {
            count++;
        } else {
            count = 0;
        }

        if (result < count) {
            result = count;
        }
    }
}

console.log(result);
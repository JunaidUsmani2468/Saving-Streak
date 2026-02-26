/*
----------------------------------------
DAY 49 PROBLEM: Most Frequent Consonant
----------------------------------------

You are given a single string.

Your task is to find the consonant (non-vowel letter)
that appears the MOST times in the string.
Ignore spaces completely.
*/

const text = "discipline builds consistency";

/*
TASK:
1. Traverse the string character by character
2. Ignore spaces
3. Ignore vowels (a, e, i, o, u)
4. Count frequency of each consonant using an object
5. Find the consonant with the highest frequency
6. Store the result in a variable called `result`
7. Log the result

RULES:
- Do NOT use built-in helpers (split, map, reduce, Object.keys, regex, etc.)
- Use loops and conditions only
- Case-sensitive (string is lowercase here)
- Traverse carefully; clarity over tricks

Expected Output: s

Explanation:
Among consonants, the letter 'n' appears the most times
in the string "discipline builds consistency".
*/

let isBan = char =>
    char === 'a' ||
    char === 'e' ||
    char === 'i' ||
    char === 'o' ||
    char === 'u' ||
    char === ' ';

let freq = {};
let maxCount = 0;
let result = '';

for (let char of text) {
    if (isBan(char)) continue;

    if (!freq[char]) {
        freq[char] = 0;
    }

    freq[char]++;

    if (maxCount < freq[char]) {
        maxCount = freq[char];
        result = char;
    }
}

console.log(result);
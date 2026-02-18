/*
----------------------------------------
DAY 41 PROBLEM: Character Frequency Ignoring Spaces
----------------------------------------

You are given a single sentence (string).

Your task is to count how many times EACH character appears
in the sentence, ignoring spaces.
*/

const sentenceText = "code builds discipline";

/*
TASK:
1. Traverse the string character by character
2. Ignore spaces completely
3. Count frequency of each character
4. Store the result in an object called `result`
5. Log the result

RULES:
- Do NOT use built-in helpers (split, map, reduce, Object.keys, etc.)
- Use loops and conditions only
- Case-sensitive counting
- Ignore spaces only (count everything else)

Expected Output: { c: 2, o: 1, d: 3, e: 2, b: 1, u: 1, i: 4, l: 2, s: 2, p: 1, n: 1 }

Explanation:
Each character (except spaces) is counted based on
how many times it appears in the sentence.
*/

let result = {};

for (let char of sentenceText) {
    if (char === ' ') continue;

    if (!result[char]) {
        result[char] = 0;
    }

    result[char]++;
}

console.log(result);
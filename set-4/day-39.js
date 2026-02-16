/*
----------------------------------------
DAY 39 PROBLEM: Longest Word Length Finder
----------------------------------------

You are given an array of sentences (strings).
Your task is to find the LENGTH of the longest word
across all sentences combined.
*/

const sentences = [
  "learning javascript daily",
  "consistency beats motivation",
  "small steps matter"
];

/*
TASK:
1. Traverse each sentence in the array
2. Extract words manually (character by character)
3. Find the longest word length
4. Store the length in a variable called `result`
5. Log the result

RULES:
- Do NOT use built-in helpers (split, map, filter, reduce, etc.)
- Traverse the array only ONCE
- Use loops and conditions only

Expected Output: 11

Explanation:
The longest word is "consistency" which has 11 characters.
*/

let result = 0;
let currentWordLength = 0;

for (let sentence of sentences) {
    for (let i = 0; i <= sentence.length; i++) {
        if (sentence[i] && sentence[i] !== ' ') {
            currentWordLength++;
        } else {
            currentWordLength = 0;
        }

        if (currentWordLength > result) {
            result = currentWordLength;
        }
    }
}

console.log(result);